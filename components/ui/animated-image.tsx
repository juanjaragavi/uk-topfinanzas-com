"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  delay?: number
  duration?: number
  once?: boolean
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
      className={`rounded-xl shadow-lg p-0 m-0 ${className}`}
    >
      <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className="w-full h-auto rounded-xl" />
    </motion.div>
  )
}
