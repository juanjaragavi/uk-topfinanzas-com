"use client";

import type React from "react";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
  as = "div",
}) => {
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </Component>
  );
};
