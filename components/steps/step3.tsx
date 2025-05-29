"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { step3Strings, commonStrings } from "@/lib/constants";
import { step3Texts } from "@/lib/strings";
import VisitorCounter from "../VisitorCounter";

interface Step3Props {
  formData: {
    email: string;
    firstName: string;
    receiveMessages: boolean;
  };
  updateFormData: (
    data: Partial<{
      email: string;
      firstName: string;
      receiveMessages: boolean;
    }>
  ) => void;
  onSubmit: (e?: React.FormEvent) => void;
}

export default function Step3({
  formData,
  updateFormData,
  onSubmit,
}: Step3Props) {
  const [email, setEmail] = useState(formData.email);
  const [firstName, setFirstName] = useState(formData.firstName);
  const [receiveMessages, setReceiveMessages] = useState(
    formData.receiveMessages
  );
  const [errors, setErrors] = useState<{
    email: string | null;
    firstName: string | null;
    general: string | null;
  }>({
    email: null,
    firstName: null,
    general: null,
  });

  const validateEmail = (email: string): boolean => {
    if (!email) {
      setErrors((prev) => ({
        ...prev,
        email: step3Texts.validationErrors.emailRequired,
      }));
      return false;
    }

    // Basic email format validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({
        ...prev,
        email: step3Texts.validationErrors.emailInvalid,
      }));
      return false;
    }

    // Check for incomplete domains
    const domainPart = email.split("@")[1]?.toLowerCase();
    if (domainPart) {
      // Check for domains that appear incomplete or invalid
      if (domainPart.split(".").length < 2 || domainPart.endsWith(".")) {
        setErrors((prev) => ({
          ...prev,
          email: step3Texts.validationErrors.emailDomainIncomplete,
        }));
        return false;
      }
    }

    setErrors((prev) => ({ ...prev, email: null }));
    return true;
  };

  const validateFirstName = (name: string): boolean => {
    if (!name.trim()) {
      setErrors((prev) => ({
        ...prev,
        firstName: step3Texts.validationErrors.nameRequired, // Assuming you'll update strings
      }));
      return false;
    }

    if (name.trim().length < 2) {
      setErrors((prev) => ({
        ...prev,
        firstName: step3Texts.validationErrors.nameLength, // Assuming you'll update strings
      }));
      return false;
    }
    // Add more specific validation if needed, e.g., no numbers, special characters

    setErrors((prev) => ({ ...prev, firstName: null }));
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    updateFormData({ email: value });
    if (value.length > 5) {
      validateEmail(value);
    }
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFirstName(value);
    updateFormData({ firstName: value });
    if (value.length > 0) {
      validateFirstName(value);
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setReceiveMessages(checked);
    updateFormData({ receiveMessages: checked });
  };

  const validateForm = (): boolean => {
    // Validate all fields
    const isEmailValid = validateEmail(email);
    const isFirstNameValid = validateFirstName(firstName);

    // Check terms checkbox
    if (!receiveMessages) {
      setErrors((prev) => ({
        ...prev,
        general: step3Texts.validationErrors.acceptTerms,
      }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, general: null }));
    }

    return isEmailValid && isFirstNameValid && receiveMessages;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the entire form
    if (validateForm()) {
      onSubmit();
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-left mb-4">
        <h2 className="text-xl font-bold text-left text-gray-950">
          {step3Strings.title}
        </h2>
        <p className="text-xl leading-tight font-bold text-left text-[#2E74B5]">
          {step3Texts.subtitle.firstPart}{" "}
          <span className="text-[#4A8BC5]">
            {step3Texts.subtitle.highlight}
          </span>
        </p>
      </div>

      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-sm">
            {step3Strings.fields.email}
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => validateEmail(email)}
            required
            className={`h-9 text-sm ${
              errors.email
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-[#2E74B5] focus-visible:ring-[#8DC63F]"
            }`}
            placeholder={step3Strings.placeholders.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-500 mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="firstName" className="text-sm">
            {(step3Strings.fields as { firstName?: string })?.firstName ||
              "First Name"}
          </Label>
          <Input
            id="firstName"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            onBlur={() => validateFirstName(firstName)}
            required
            className={`h-9 text-sm ${
              errors.firstName
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-[#2E74B5] focus-visible:ring-[#8DC63F]"
            }`}
            placeholder={
              (step3Strings.placeholders as { firstName?: string })
                ?.firstName || "Enter your first name"
            }
            aria-describedby="firstName-error"
          />
          {errors.firstName && (
            <p id="firstName-error" className="text-xs text-red-500 mt-1">
              {errors.firstName}
            </p>
          )}
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="receiveMessages"
            checked={receiveMessages}
            onCheckedChange={handleCheckboxChange}
            className="mt-0.5 data-[state=checked]:bg-[#8DC63F] data-[state=checked]:border-[#8DC63F]"
          />
          <Label htmlFor="receiveMessages" className="text-xs">
            {step3Strings.checkbox}{" "}
            <a href="/terms" className="underline">
              here
            </a>
          </Label>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6"
      >
        {errors.general && (
          <p className="text-xs text-red-500 mt-2 text-left">
            {errors.general}
          </p>
        )}

        <button
          type="button"
          onClick={handleFormSubmit}
          disabled={!receiveMessages}
          className={`w-full py-3 text-sm font-medium rounded-full transition-colors shadow-md ${
            receiveMessages
              ? "bg-[#8DC63F] hover:bg-[#6BA828] text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {step3Strings.button}
        </button>
      </motion.div>

      <div className="mt-8">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-[#2E74B5] text-white px-6 py-2 shadow-md">
            <VisitorCounter />
          </div>
        </div>
        <p className="text-left text-sm">
          <span className="font-bold text-[#FF8C00]">
            {commonStrings.important.prefix}
          </span>{" "}
          {commonStrings.important.emailVerification}
        </p>
        <p className="text-left text-xs mt-2">{commonStrings.copyright}</p>
      </div>
    </div>
  );
}
