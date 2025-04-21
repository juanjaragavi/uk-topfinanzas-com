"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<{
    name: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    message: string | null;
    general: string | null;
  }>({
    name: null,
    lastName: null,
    email: null,
    phone: null,
    message: null,
    general: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    if (!email) {
      setErrors((prev) => ({
        ...prev,
        email: "Email address is required",
      }));
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
      return false;
    }

    const domainPart = email.split("@")[1]?.toLowerCase();
    if (domainPart) {
      if (domainPart.split(".").length < 2 || domainPart.endsWith(".")) {
        setErrors((prev) => ({
          ...prev,
          email: "The email domain appears incomplete",
        }));
        return false;
      }
    }

    setErrors((prev) => ({ ...prev, email: null }));
    return true;
  };

  const validateName = (name: string): boolean => {
    if (!name.trim()) {
      setErrors((prev) => ({
        ...prev,
        name: "First name is required",
      }));
      return false;
    }

    if (name.trim().length < 2) {
      setErrors((prev) => ({
        ...prev,
        name: "First name must be at least 2 characters",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, name: null }));
    return true;
  };

  const validateLastName = (lastName: string): boolean => {
    if (!lastName.trim()) {
      setErrors((prev) => ({
        ...prev,
        lastName: "Last name is required",
      }));
      return false;
    }

    if (lastName.trim().length < 2) {
      setErrors((prev) => ({
        ...prev,
        lastName: "Last name must be at least 2 characters",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, lastName: null }));
    return true;
  };

  const validatePhone = (phoneNumber: string): boolean => {
    if (!phoneNumber) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number is required",
      }));
      return false;
    }

    // UK mobile numbers are 11 digits, typically starting with '07'
    const ukPhoneRegex = /^07\d{9}$/;

    // Alternative format with spaces or dashes
    const ukPhoneRegexAlt = /^(07[0-9]{3})[- ]?([0-9]{6})$/;

    // Remove any spaces or dashes for validation
    const cleanPhone = phoneNumber.replace(/[- ]/g, "");

    if (!ukPhoneRegex.test(cleanPhone) && !ukPhoneRegexAlt.test(phoneNumber)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid UK mobile number (11 digits)",
      }));
      return false;
    }

    // Check that it starts with valid UK mobile prefix (07)
    const firstTwoDigits = cleanPhone.substring(0, 2);
    if (firstTwoDigits !== "07") {
      setErrors((prev) => ({
        ...prev,
        phone: "The number must start with '07' (UK mobile prefix)",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, phone: null }));
    return true;
  };

  const validateMessage = (message: string): boolean => {
    if (!message.trim()) {
      setErrors((prev) => ({
        ...prev,
        message: "Please describe your query or request",
      }));
      return false;
    }

    if (message.trim().length < 10) {
      setErrors((prev) => ({
        ...prev,
        message: "Your message should be at least 10 characters",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, message: null }));
    return true;
  };

  const validateForm = (): boolean => {
    const isEmailValid = validateEmail(formData.email);
    const isNameValid = validateName(formData.name);
    const isLastNameValid = validateLastName(formData.lastName);
    const isPhoneValid = validatePhone(formData.phone);
    const isMessageValid = validateMessage(formData.message);

    if (!formData.acceptTerms) {
      setErrors((prev) => ({
        ...prev,
        general: "You must accept the terms and conditions to continue",
      }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, general: null }));
    }

    return (
      isEmailValid &&
      isNameValid &&
      isLastNameValid &&
      isPhoneValid &&
      isMessageValid &&
      formData.acceptTerms
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Live validation
    if (name === "email" && value.length > 5) {
      validateEmail(value);
    } else if (name === "name" && value.length > 0) {
      validateName(value);
    } else if (name === "lastName" && value.length > 0) {
      validateLastName(value);
    } else if (name === "phone" && value.length > 2) {
      validatePhone(value);
    } else if (name === "message" && value.length > 5) {
      validateMessage(value);
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, acceptTerms: checked }));
    if (checked) {
      setErrors((prev) => ({ ...prev, general: null }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        acceptTerms: false,
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-7xl bg-white">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left column - Image and Text */}
          <div className="md:col-span-5 space-y-6">
            <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-xl shadow-md">
              <Image
                src="https://media.topfinanzas.com/images/uk/contact-us-uk.webp"
                alt="Contact TopFinanzas UK"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-left">
              <h2 className="text-2xl font-semibold text-gray-800">
                Are you wondering how to achieve significant change in your
                personal finances?
              </h2>

              <p className="text-gray-700">
                If you're ready to embark on a transformative journey toward
                financial stability and prosperity, we're here to accompany you.
                Contact us through our email at{" "}
                <span className="font-semibold text-[#2E74B5]">
                  info@topfinanzas.com
                </span>{" "}
                or complete the form to share your questions, ideas, or plans.
              </p>

              <p className="text-gray-700">
                We commit to responding promptly and being your allies at every
                stage of this exciting journey that will transform your
                financial life.
              </p>

              <p className="text-gray-700 font-semibold">
                We look forward to hearing from you soon!
              </p>
            </div>
          </div>

          {/* Right column - Contact Form */}
          <div className="md:col-span-7 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="text-[#8DC63F] text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-6">
                  Your message has been sent successfully. We'll get back to you
                  shortly.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-[#2E74B5] hover:bg-[#245d91] text-white px-6 py-2 rounded-full transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#2E74B5] mb-6">
                  Send Us a Message
                </h2>

                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm">
                    First Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => validateName(formData.name)}
                    required
                    className={`h-10 ${
                      errors.name
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-[#2E74B5] focus-visible:ring-[#8DC63F]"
                    }`}
                    placeholder="Your first name"
                    aria-describedby="name-error"
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-500 mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="lastName" className="text-sm">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={() => validateLastName(formData.lastName)}
                    required
                    className={`h-10 ${
                      errors.lastName
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-[#2E74B5] focus-visible:ring-[#8DC63F]"
                    }`}
                    placeholder="Your last name"
                    aria-describedby="lastName-error"
                  />
                  {errors.lastName && (
                    <p
                      id="lastName-error"
                      className="text-xs text-red-500 mt-1"
                    >
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => validateEmail(formData.email)}
                    required
                    className={`h-10 ${
                      errors.email
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-[#2E74B5] focus-visible:ring-[#8DC63F]"
                    }`}
                    placeholder="example@email.com"
                    aria-describedby="email-error"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-500 mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-sm">
                    Mobile
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => validatePhone(formData.phone)}
                    required
                    className={`h-10 ${
                      errors.phone
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-[#2E74B5] focus-visible:ring-[#8DC63F]"
                    }`}
                    placeholder="11 digits (e.g. 07123456789)"
                    maxLength={11}
                    aria-describedby="phone-error"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-xs text-red-500 mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => validateMessage(formData.message)}
                    required
                    className={`min-h-[120px] ${
                      errors.message
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-[#2E74B5] focus-visible:ring-[#8DC63F]"
                    }`}
                    placeholder="Describe your query or request"
                    aria-describedby="message-error"
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-red-500 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex items-start space-x-2 mt-4">
                  <Checkbox
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={handleCheckboxChange}
                    className="mt-0.5 data-[state=checked]:bg-[#8DC63F] data-[state=checked]:border-[#8DC63F]"
                  />
                  <Label htmlFor="acceptTerms" className="text-xs">
                    I accept the{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-[#2E74B5] underline"
                    >
                      data policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="text-[#2E74B5] underline">
                      terms & conditions
                    </Link>
                  </Label>
                </div>

                {errors.general && (
                  <p className="text-xs text-red-500 mt-2 text-center">
                    {errors.general}
                  </p>
                )}

                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.acceptTerms}
                  className={`w-full py-3 text-sm font-medium rounded-full transition-colors shadow-md mt-6 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed text-white"
                      : formData.acceptTerms
                      ? "bg-[#8DC63F] hover:bg-[#6BA828] text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "SEND MESSAGE"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 text-center bg-white py-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Follow us on social media and take control of your finances
          </h3>
          <div className="flex justify-center space-x-6">
            <Link
              href="https://www.linkedin.com/company/top-networks-inc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#0077B5] hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.instagram.com/topfinance_en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#E1306C] hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
