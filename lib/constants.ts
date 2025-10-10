// Constant strings used throughout the application for UK market

export const metadata = {
  title: "Find Your Perfect Credit Card - TopFinance UK",
  description: "Find the perfect credit card tailored to your needs",
};

export const UTM_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export const BRAND_STATIC_FIELDS = {
  Pais: "Reino Unido",
  Marca: "Top Finanzas",
} as const;

export const BRAND_STATIC_FIELDS_LOWER = {
  pais: BRAND_STATIC_FIELDS.Pais,
  marca: BRAND_STATIC_FIELDS.Marca,
} as const;

export const commonStrings = {
  copyright: "© Top Networks Inc. 2025",
  important: {
    prefix: "Important:",
    emailVerification:
      "please check that your email is correct so we can send you the information you need",
  },
};

export const formStrings = {
  progressBar: {
    complete: "% complete",
    keepItUp: ", keep going!",
    completed: "!",
  },
  footer: {
    termsText:
      "By signing up, I agree to receive text messages at the phone number and email provided and I agree that I can unsubscribe from the SMS and Email list at any time. SMS message rates may apply. I also confirm that I am over 18 years old and accept the terms set out in the",
    termsLink: "Terms of Use",
    and: "and",
    privacyLink: "Privacy Policy",
    disclaimer:
      ". Important: please check that your email is correct so we can send you the information you need",
  },
  submission: {
    success: "Form submitted successfully!",
  },
};

export const step3Strings = {
  title: "Excellent!",
  fields: {
    email: "Email",
    name: "First Name",
    lastName: "Last Name",
    phone: "Mobile",
  },
  checkbox: "I accept the data policy and terms & conditions",
  button: "VIEW MY OPTIONS",
  placeholders: {
    email: "example@email.com",
    name: "Your first name",
    lastName: "Your last name",
    phone: "11 digits (e.g. 07123456789)",
  },
};
