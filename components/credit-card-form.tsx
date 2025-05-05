"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Logo from "./ui/logo";
import { formStrings } from "@/lib/constants";

// Define UTM parameters array
const UTM_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

export default function CreditCardForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    preference: "",
    income: "",
    email: "",
    name: "",
    lastName: "",
    phone: "",
    receiveMessages: false,
  });

  const [lastName, setLastName] = useState(formData.lastName);
  const [phone, setPhone] = useState(formData.phone);

  const totalSteps = 3;
  const progress = Math.round(((step - 1) / (totalSteps - 1)) * 100) || 0;

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  useEffect(() => {
    if (
      step < totalSteps &&
      ((step === 1 && formData.preference) || (step === 2 && formData.income))
    ) {
      const timer = setTimeout(() => setStep(step + 1), 500);
      return () => clearTimeout(timer);
    }
  }, [formData, step]);

  const router = useRouter();

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    console.log("Form submitted with data:", formData);

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
      const kitData = {
        first_name: formData.name,
        email_address: formData.email,
        state: "active",
        fields: {
          acepto_politicas_de_tratamiento_de_datos_y_terminos_y_condiciones:
            formData.receiveMessages ? "1" : "0",
          beneficio_empresa: null,
          birthday: "Feb 6", // Default value as specified
          contacto: null,
          cual_es_tu_ingreso_mensual: formData.income,
          cuanto_dinero_necesitas: null,
          date_created: null,
          describe_tu_necesidad: null,
          elige_el_grupo_que_mejor_describe_tu_situacion_actual: null,
          estas_reportado_en_buro_de_credito: null,
          flujo_prestamos_2: null,
          last_name: formData.lastName,
          monto_empresa: null,
          newsletter: null,
          pais: "UK", // Default value as specified
          phone_number: formData.phone,
          preferencia_1_cupo_de_credito_alto: null,
          preferencia_2_sin_buro: null,
          preferencia_3_millas_y_puntos: null,
          preferencia_4_credito_inmediato: null,
          preferencia_5_sin_anualidad: null,
          preferencia_6_cashback: null,
          que_es_lo_que_mas_importante_en_una_tarjeta_de_credito:
            formData.preference,
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

      // Send data to Kit API
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Kit-Api-Key": `${process.env.NEXT_PUBLIC_KIT_API_KEY}`,
      };

      // Make the API request
      const response = await fetch("https://api.kit.com/v4/subscribers", {
        method: "POST",
        body: JSON.stringify(kitData),
        headers: headers,
      });

      const result = await response.json();
      console.log("Kit API response:", result);
    } catch (error) {
      console.error("Error sending data to Kit API:", error);
    } finally {
      // Redirect to UK results page using Next.js router
      // regardless of API response to ensure good user experience
      router.push("/credit-card-recommender-p1");
    }
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    updateFormData({ lastName: e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    updateFormData({ phone: e.target.value });
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
                    handleLastNameChange={handleLastNameChange}
                    handlePhoneChange={handlePhoneChange}
                    lastName={lastName}
                    phone={phone}
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
            <div className="text-center text-sm text-gray-600">
              {progress}
              {formStrings.progressBar.complete}
              {progress < 100
                ? formStrings.progressBar.keepItUp
                : formStrings.progressBar.completed}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
