"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import OptionButton from "../ui/option-button";
import { step1Strings } from "@/lib/strings";
import { commonStrings } from "@/lib/constants";
import ProgressIndicator from "../ProgressIndicator";
import VisitorCounter from "../VisitorCounter";

interface Step1Props {
  formData: {
    preference: string;
  };
  updateFormData: (data: { preference: string }) => void;
}

export default function Step1({ formData, updateFormData }: Step1Props) {
  const [selected, setSelected] = useState(formData.preference);

  const options = step1Strings.options;

  const handleSelect = (id: string) => {
    setSelected(id);
    updateFormData({ preference: id });
  };

  return (
    <div className="space-y-4">
      <ProgressIndicator step={1} />
      <div className="text-left">
        <h2 className="text-md font-bold text-left text-gray-950">
          {step1Strings.title}
        </h2>
      </div>

      <motion.h1
        className="text-xl leading-tight font-bold text-left text-[#2E74B5]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {step1Strings.question}
      </motion.h1>

      <motion.div
        className="space-y-2 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, staggerChildren: 0.1 }}
      >
        {options.map((option, index) => (
          <OptionButton
            id={option.id}
            label={option.label}
            selected={selected === option.id}
            onClick={() => handleSelect(option.id)}
            delay={0.1 * index}
            className="pregunta_1"
          />
        ))}
      </motion.div>

      <div className="mt-10">
        <div className="flex justify-center mb-4">
          <div className="rounded-full px-6 py-2 shadow-md">
            <VisitorCounter />
          </div>
        </div>
        <p className="text-left text-xs text-gray-500">
          {commonStrings.copyright}
        </p>
      </div>
    </div>
  );
}
