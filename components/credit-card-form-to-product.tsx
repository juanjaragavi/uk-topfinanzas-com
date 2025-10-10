"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // Import Cookies
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Logo from "./ui/logo";
import {
  BRAND_STATIC_FIELDS,
  BRAND_STATIC_FIELDS_LOWER,
  UTM_PARAM_KEYS,
  formStrings,
} from "@/lib/constants";
import { step1Strings, step2Strings } from "@/lib/strings";
import { pushGTMConversion } from "@/components/analytics/gtm";
import { trackGoogleAdsConversion } from "@/components/analytics/google-ads";

type SubmissionStatus = "idle" | "success" | "duplicate" | "error";

const buildKitFields = (fields: Record<string, string | null | undefined>) =>
  Object.fromEntries(
    Object.entries(fields).filter(
      ([, value]) => value !== undefined && value !== null && value !== "",
    ),
  );

const GOOGLE_ADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "";
const GTM_CONVERSION_EVENT_NAME = "quiz_lead_submitted";

// Cookie names for user tracking
const COOKIE_NAMES = {
  QUIZ_COMPLETED: "quizCompleted",
  USER_REGISTERED: "userRegistered",
  USER_DATA: "userData",
};

// Cookie validation configuration - use safe defaults during SSR
const getCookieConfig = () => {
  // Only access environment variables on the client side
  if (typeof window === "undefined") {
    // Server-side: return safe defaults
    return {
      VALIDATION_ENABLED: true,
      SHORT_EXPIRATION: 1,
      DEFAULT_EXPIRATION: 30,
    };
  }

  // Client-side: can safely access environment variables
  return {
    VALIDATION_ENABLED:
      process.env.NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED !== "false",
    SHORT_EXPIRATION: parseInt(
      process.env.NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION || "1",
      10,
    ),
    DEFAULT_EXPIRATION: 30,
  };
};

export default function CreditCardFormToProduct() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    preference: "",
    preferenceText: "", // Add a new field to store the text value
    income: "",
    incomeText: "", // Add a new field to store the text value
    email: "",
    firstName: "",
    receiveMessages: false,
  });

  const [isRegisteredUser, setIsRegisteredUser] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null,
  );

  const hasAutoSubmittedRef = useRef(false);

  const totalSteps = 3;
  const progress = Math.round(((step - 1) / (totalSteps - 1)) * 100) || 0;

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const getPreferenceText = (id: string): string => {
    const option = step1Strings.options.find((opt) => opt.id === id);
    return option ? option.label : "";
  };

  const getIncomeText = (id: string): string => {
    const option = step2Strings.options.find((opt) => opt.id === id);
    return option ? option.label : "";
  };

  const triggerConversionEvents = () => {
    if (!GOOGLE_ADS_CONVERSION_LABEL) {
      console.warn(
        "[QUIZ] Google Ads conversion label is not configured; skipping Ad conversion event.",
      );
    } else {
      trackGoogleAdsConversion(GOOGLE_ADS_CONVERSION_LABEL);
    }

    pushGTMConversion(GTM_CONVERSION_EVENT_NAME);
  };

  const persistRegistrationCookies = () => {
    const cookieConfig = getCookieConfig();
    const cookieExpiration = cookieConfig.VALIDATION_ENABLED
      ? cookieConfig.DEFAULT_EXPIRATION
      : cookieConfig.SHORT_EXPIRATION;

    Cookies.set(COOKIE_NAMES.QUIZ_COMPLETED, "true", {
      expires: cookieExpiration,
    });

    if (formData.email) {
      const registrationData = {
        email: formData.email,
        firstName: formData.firstName,
        ...(!cookieConfig.VALIDATION_ENABLED && {
          _temporaryMode: true,
          _timestamp: new Date().toISOString(),
        }),
      };

      Cookies.set(COOKIE_NAMES.USER_REGISTERED, "true", {
        expires: cookieExpiration,
      });
      Cookies.set(COOKIE_NAMES.USER_DATA, JSON.stringify(registrationData), {
        expires: cookieExpiration,
      });

      console.log(
        `[QUIZ] Cookie validation: ${
          cookieConfig.VALIDATION_ENABLED ? "enabled" : "disabled"
        }, expiration: ${cookieExpiration} days`,
      );
    }
  };

  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if user is registered based on cookies on component mount
  useEffect(() => {
    if (!mounted) return;

    const cookieConfig = getCookieConfig();
    // Skip cookie validation entirely if disabled via environment variable
    if (!cookieConfig.VALIDATION_ENABLED) {
      console.log("[QUIZ] Cookie validation temporarily disabled");
      setIsRegisteredUser(false);
      return;
    }

    const userRegistered = Cookies.get(COOKIE_NAMES.USER_REGISTERED);
    const userData = Cookies.get(COOKIE_NAMES.USER_DATA);

    if (userRegistered === "true" && userData) {
      setIsRegisteredUser(true);

      // Pre-fill data from cookies for registered users
      try {
        const savedData = JSON.parse(userData);
        if (savedData.email) {
          updateFormData({
            email: savedData.email,
            firstName: savedData.firstName || "",
            receiveMessages: true, // Assume they already agreed
          });
        }
      } catch (error) {
        console.error("Error parsing saved user data:", error);
      }
    }
  }, [mounted]);

  useEffect(() => {
    if (formData.preference) {
      updateFormData({
        preferenceText: getPreferenceText(formData.preference),
      });
    }
    if (formData.income) {
      updateFormData({ incomeText: getIncomeText(formData.income) });
    }
  }, [formData.preference, formData.income]);

  useEffect(() => {
    if (
      step < totalSteps &&
      ((step === 1 && formData.preference) || (step === 2 && formData.income))
    ) {
      if (step === 2 && formData.income && isRegisteredUser) {
        if (hasAutoSubmittedRef.current) {
          return;
        }

        hasAutoSubmittedRef.current = true;
        const timer = setTimeout(() => {
          void handleSubmit();
        }, 500);

        return () => clearTimeout(timer);
      }

      const timer = setTimeout(() => setStep(step + 1), 500);
      return () => clearTimeout(timer);
    }

    return undefined;
  }, [formData, step, isRegisteredUser]);

  useEffect(() => {
    if (!isRegisteredUser) {
      hasAutoSubmittedRef.current = false;
    }
  }, [isRegisteredUser]);

  const router = useRouter();

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();

    if (isSubmitting) {
      return;
    }

    console.log("[QUIZ-to-product] Form submission attempt", formData);
    setIsSubmitting(true);
    setSubmissionStatus("idle");
    setSubmissionMessage(null);

    try {
      const utmParams: Record<string, string> = {};
      UTM_PARAM_KEYS.forEach((param) => {
        const value = sessionStorage.getItem(param);
        if (typeof value === "string") {
          utmParams[param] = value;
        }
      });

      const utmFieldsForSheets = UTM_PARAM_KEYS.reduce<Record<string, string>>(
        (acc, key) => {
          acc[key] = utmParams[key] ?? "";
          return acc;
        },
        {},
      );

      const normalizedHiddenFields = {
        source: utmParams.utm_source ?? "",
        medium: utmParams.utm_medium ?? "",
        campaign: utmParams.utm_campaign ?? "",
        term: utmParams.utm_term ?? "",
        content: utmParams.utm_content ?? "",
      };

      const nameParts = formData.firstName.trim().split(" ");
      const apiFirstName = nameParts[0] || "";
      const apiLastName = nameParts.slice(1).join(" ") || "";

      const kitFields = {
        acepto_politicas_de_tratamiento_de_datos_y_terminos_y_condiciones:
          formData.receiveMessages ? "1" : "0",
        beneficio_empresa: null,
        contacto: null,
        cual_es_tu_ingreso_mensual: formData.incomeText || formData.income,
        cuanto_dinero_necesitas: null,
        date_created: new Date().toISOString(),
        describe_tu_necesidad: null,
        elige_el_grupo_que_mejor_describe_tu_situacion_actual: null,
        estas_reportado_en_buro_de_credito: null,
        flujo_prestamos_2: null,
        last_name: apiLastName,
        monto_empresa: null,
        newsletter: null,
        pais: BRAND_STATIC_FIELDS_LOWER.pais,
        marca: BRAND_STATIC_FIELDS_LOWER.marca,
        phone_number: null,
        preferencia_1_cupo_de_credito_alto: null,
        preferencia_2_sin_buro: null,
        preferencia_3_millas_y_puntos: null,
        preferencia_4_credito_inmediato: null,
        preferencia_5_sin_anualidad: null,
        preferencia_6_cashback: null,
        que_es_lo_que_mas_importante_en_una_tarjeta_de_credito:
          formData.preferenceText || formData.preference,
        quickemailverification_free: null,
        quickemailverification_result: null,
        quickemailverification_safe_to_send: null,
        quiz_campana_leads: null,
        quiz_prestamos: null,
        quiz_prestamos_2: null,
        quiz_prestamos_bbva: null,
        quiz_prestamos_credilikeme: null,
        quiz_prestamos_discover: null,
        quiz_prestamos_empresarial_sabadell: null,
        quiz_prestamos_upstart: null,
        quiz_prestamo_kueski: null,
        quiz_tarjetas: "SI",
        quiz_tarjeta_bbva_azul: null,
        quiz_tarjeta_citi_double_cash: null,
        quiz_tarjeta_hsbc_zero: null,
        quiz_tarjeta_nubank: null,
        quiz_tarjeta_nubank_2: null,
        quiz_tarjeta_platacard: null,
        quiz_tarjeta_stori: null,
        quiz_tarjeta_visa_signature: null,
        recovery: null,
        reingresar_flujo_tarjetas: null,
        tarjetas_neobancos: null,
        source: normalizedHiddenFields.source || null,
        medium: normalizedHiddenFields.medium || null,
        campaign: normalizedHiddenFields.campaign || null,
        term: normalizedHiddenFields.term || null,
        content: normalizedHiddenFields.content || null,
        utm_adgroup: utmParams.utm_adgroup || null,
        utm_campaign: utmParams.utm_campaign || null,
        utm_content: utmParams.utm_content || null,
        utm_medium: utmParams.utm_medium || null,
        utm_source: utmParams.utm_source || null,
        utm_term: utmParams.utm_term || null,
      };

      const kitData = {
        first_name: apiFirstName,
        email_address: formData.email,
        state: "active",
        fields: buildKitFields(kitFields),
      };

      const sheetsPayload = {
        ...formData,
        ...utmFieldsForSheets,
        ...normalizedHiddenFields,
        ...BRAND_STATIC_FIELDS,
        ...BRAND_STATIC_FIELDS_LOWER,
      };

      const sheetsResponse = await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sheetsPayload),
      });

      const sheetsResult = await sheetsResponse.json().catch(() => ({}));

      if (sheetsResponse.status === 409) {
        console.info("[QUIZ-to-product] Duplicate submission", sheetsResult);
        persistRegistrationCookies();
        setSubmissionStatus("duplicate");
        setSubmissionMessage(
          "We already have your latest details. Redirecting you to your offers.",
        );

        setTimeout(() => {
          router.push("https://linkly.link/2ERav");
        }, 800);
        return;
      }

      if (!sheetsResponse.ok) {
        throw new Error(
          (sheetsResult as { error?: string })?.error ||
            "Failed to add registration to sheet",
        );
      }

      if (!isRegisteredUser || formData.email) {
        try {
          const subscribeResponse = await fetch("/api/subscribe", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(kitData),
          });

          if (!subscribeResponse.ok) {
            const subscribeError = await subscribeResponse
              .json()
              .catch(() => null);
            console.error(
              "[QUIZ-to-product] Subscription API error",
              subscribeError,
            );
          } else {
            const subscribeResult = await subscribeResponse
              .json()
              .catch(() => null);
            console.log("Subscription API response:", subscribeResult);
          }
        } catch (subscriptionError) {
          console.error(
            "[QUIZ-to-product] Error calling subscription API",
            subscriptionError,
          );
        }
      }

      triggerConversionEvents();
      persistRegistrationCookies();
      setSubmissionStatus("success");
      setSubmissionMessage(
        "Thanks! Redirecting you to your tailored credit card options.",
      );

      setTimeout(() => {
        router.push("https://linkly.link/2ERav");
      }, 800);
    } catch (error) {
      console.error("[QUIZ-to-product] Error handling submission", error);
      setSubmissionStatus("error");
      setSubmissionMessage(
        "We couldn’t confirm your registration. Please try again in a moment.",
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white flex flex-col h-[100dvh]">
      <div className="bg-[#2E74B5] py-3 px-4 flex justify-center -mb-8 flex-none">
        <Logo />
      </div>

      <div className="relative flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="px-4 pt-10 pb-20"
          >
            <form onSubmit={(e) => step === totalSteps && handleSubmit(e)}>
              {step === 1 && (
                <Step1 formData={formData} updateFormData={updateFormData} />
              )}
              {step === 2 && (
                <Step2 formData={formData} updateFormData={updateFormData} />
              )}
              {step === 3 && (
                <>
                  <Step3
                    formData={formData}
                    updateFormData={updateFormData}
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                    submissionStatus={submissionStatus}
                    submissionMessage={submissionMessage}
                  />
                </>
              )}
            </form>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-4 flex-none bg-white border-t shadow-lg">
        <div className="w-full space-y-3 mt-2">
          <div className="space-y-2">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#8DC63F] to-[#2E74B5]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <div className="text-left text-sm text-gray-600">
              {progress}
              {formStrings.progressBar.complete}
              {progress < 100
                ? formStrings.progressBar.keepItUp
                : formStrings.progressBar.completed}
              {isRegisteredUser && step === 2 && (
                <div className="text-xs text-[#2E74B5] mt-1">
                  Welcome back! We'll use your saved information.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
