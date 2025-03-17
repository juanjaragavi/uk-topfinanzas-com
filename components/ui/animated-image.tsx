"use client";

import type React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once }}
      transition={{ duration, delay }}
      className={`p-0 m-0 ${className}`}
    >
      <Image
        src={src || "https://media.topfinanzas.com/images/favicon.png"}
        alt={alt}
        width={width}
        height={height}
        className="rounded-xl shadow-lg m-0 p-0 overflow-hidden"
        style={{ maxWidth: "100%", width: "auto", height: "auto" }}
        priority
      />
    </motion.div>
  );
};
