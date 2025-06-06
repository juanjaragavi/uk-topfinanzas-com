"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // Import Cookies
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Logo from "./ui/logo";
import { formStrings } from "@/lib/constants";
import { step1Strings, step2Strings } from "@/lib/strings";

// Define UTM parameters array
const UTM_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

// Cookie names for user tracking
const COOKIE_NAMES = {
  QUIZ_COMPLETED: "quizCompleted",
  USER_REGISTERED: "userRegistered",
  USER_DATA: "userData",
};

// Cookie validation configuration - use safe defaults during SSR
const getCookieConfig = () => {
  // Only access environment variables on the client side
  if (typeof window === 'undefined') {
    // Server-side: return safe defaults
    return {
      VALIDATION_ENABLED: true,
      SHORT_EXPIRATION: 1,
      DEFAULT_EXPIRATION: 30,
    };
  }
  
  // Client-side: can safely access environment variables
  return {
    VALIDATION_ENABLED: process.env.NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED !== 'false',
    SHORT_EXPIRATION: parseInt(process.env.NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION || '1', 10),
    DEFAULT_EXPIRATION: 30,
  };
};

export default function CreditCardForm() {
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
      console.log('[QUIZ] Cookie validation temporarily disabled');
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
      // For registered users, skip step 3 after completing step 2
      if (step === 2 && formData.income && isRegisteredUser) {
        // Submit directly for registered users
        setTimeout(() => {
          handleSubmit();
        }, 500);
      } else {
        // Normal flow: proceed to next step
        const timer = setTimeout(() => setStep(step + 1), 500);
        return () => clearTimeout(timer);
      }
    }
  }, [formData, step, isRegisteredUser]);

  const router = useRouter();

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    console.log("Form submitted with data:", formData);
    console.log("[DEBUG] API Key:", "[DEBUG] API Key: OK");

    try {
      // Get UTM parameters from session storage
      const utmParams: Record<string, string> = {};
      UTM_PARAM_KEYS.forEach((param) => {
        const value = sessionStorage.getItem(param);
        if (value) {
          utmParams[param] = value;
        }
      });

      // Prepare data for Kit API
      const nameParts = formData.firstName.trim().split(" ");
      const apiFirstName = nameParts[0] || "";
      const apiLastName = nameParts.slice(1).join(" ") || "";

      const kitData = {
        first_name: apiFirstName,
        email_address: formData.email,
        state: "active",
        fields: {
          acepto_politicas_de_tratamiento_de_datos_y_terminos_y_condiciones:
            formData.receiveMessages ? "1" : "0",
          beneficio_empresa: null,
          birthday: "Ene 1, 1988", // Default value as specified
          contacto: null,
          cual_es_tu_ingreso_mensual: formData.incomeText || formData.income, // Use text value with fallback to ID
          cuanto_dinero_necesitas: null,
          date_created: null,
          describe_tu_necesidad: null,
          elige_el_grupo_que_mejor_describe_tu_situacion_actual: null,
          estas_reportado_en_buro_de_credito: null,
          flujo_prestamos_2: null,
          last_name: apiLastName,
          monto_empresa: null,
          newsletter: null,
          pais: "Reino Unido", // Default value as specified
          phone_number: null,
          preferencia_1_cupo_de_credito_alto: null,
          preferencia_2_sin_buro: null,
          preferencia_3_millas_y_puntos: null,
          preferencia_4_credito_inmediato: null,
          preferencia_5_sin_anualidad: null,
          preferencia_6_cashback: null,
          que_es_lo_que_mas_importante_en_una_tarjeta_de_credito:
            formData.preferenceText || formData.preference, // Use text value with fallback to ID
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
          quiz_tarjetas: "SI", // Default value as specified
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
          source: "Quiz UK", // Default value as specified
          tarjetas_neobancos: null,
          // Include UTM params if available
          utm_source: utmParams.utm_source || null,
          utm_medium: utmParams.utm_medium || null,
          utm_campaign: utmParams.utm_campaign || null,
          utm_content: utmParams.utm_content || null,
          utm_term: utmParams.utm_term || null,
        },
      };

      // Send data to Kit API only if not a registered user or if we have new email data
      if (!isRegisteredUser || formData.email) {
        const apiKey = process.env.NEXT_PUBLIC_KIT_API_KEY || '';
        
        if (!apiKey) {
          console.error("Kit API key is not configured");
          // Continue with redirect anyway
        } else {
          const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Kit-Api-Key": apiKey,
          };

          // Make the API request
          const response = await fetch("https://api.kit.com/v4/subscribers", {
            method: "POST",
            body: JSON.stringify(kitData),
            headers: headers,
          });

          const result = await response.json();
          console.log("Kit API response:", result);
        }
      }
    } catch (error) {
      console.error("Error sending data to Kit API:", error);
    } finally {
      const cookieConfig = getCookieConfig();
      // Determine cookie expiration based on configuration
      const cookieExpiration = cookieConfig.VALIDATION_ENABLED 
        ? cookieConfig.DEFAULT_EXPIRATION 
        : cookieConfig.SHORT_EXPIRATION;

      // Set cookies to indicate quiz completion and user registration
      Cookies.set(COOKIE_NAMES.QUIZ_COMPLETED, "true", { expires: cookieExpiration }); 

      // Save user registration status and data for future visits
      if (formData.email) {
        // Add timestamp when validation is disabled for debugging/monitoring
        const registrationData = {
          email: formData.email,
          firstName: formData.firstName,
          ...((!cookieConfig.VALIDATION_ENABLED) && { 
            _temporaryMode: true, 
            _timestamp: new Date().toISOString() 
          })
        };

        Cookies.set(COOKIE_NAMES.USER_REGISTERED, "true", { expires: cookieExpiration });
        Cookies.set(
          COOKIE_NAMES.USER_DATA,
          JSON.stringify(registrationData),
          { expires: cookieExpiration }
        );

        // Log the current cookie validation status for debugging
        console.log(`[QUIZ] Cookie validation: ${cookieConfig.VALIDATION_ENABLED ? 'enabled' : 'disabled'}, expiration: ${cookieExpiration} days`);
      }

      // Redirect to UK results page using Next.js router
      // regardless of API response to ensure good user experience
      router.push("/credit-card-recommender-p1");
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
