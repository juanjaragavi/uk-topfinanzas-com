"use client";

import React from "react";
import { useAdZep } from "./adzep";

interface AdZepTriggerProps {
  /**
   * The event that should trigger AdZep activation
   * @default "click"
   */
  trigger?: "click" | "hover" | "focus" | "mouseenter" | "mouseleave";

  /**
   * Children elements that will have the trigger attached
   */
  children: React.ReactNode;

  /**
   * Optional className for the wrapper
   */
  className?: string;

  /**
   * Additional props to pass to the wrapper element
   */
  [key: string]: any;
}

/**
 * AdZep Trigger Component
 * - Wraps any element and triggers AdZep activation on specified events
 * - Useful for specific interactive elements that need AdZep activation
 *
 * @example
 * <AdZepTrigger trigger="click">
 *   <button>Click me to activate ads</button>
 * </AdZepTrigger>
 *
 * @example
 * <AdZepTrigger trigger="hover" className="special-link">
 *   <Link href="/some-page">Hover to activate ads</Link>
 * </AdZepTrigger>
 */
export default function AdZepTrigger({
  trigger = "click",
  children,
  className,
  ...props
}: AdZepTriggerProps) {
  const { activateAds } = useAdZep();

  const handleTrigger = (event: React.SyntheticEvent) => {
    activateAds();

    if (process.env.NODE_ENV === "development") {
      console.log(`AdZep: Manual trigger activated (${trigger})`, {
        target: (event.target as HTMLElement)?.tagName,
        timestamp: new Date().toISOString(),
      });
    }
  };

  const eventProps = {
    [trigger === "click"
      ? "onClick"
      : trigger === "hover"
      ? "onMouseEnter"
      : trigger === "focus"
      ? "onFocus"
      : trigger === "mouseenter"
      ? "onMouseEnter"
      : trigger === "mouseleave"
      ? "onMouseLeave"
      : "onClick"]: handleTrigger,
  };

  return (
    <div className={className} {...eventProps} {...props}>
      {children}
    </div>
  );
}

/**
 * AdZep Button Component
 * - A pre-configured button that activates AdZep on click
 * - Useful for CTA buttons and important interactive elements
 */
export function AdZepButton({
  children,
  onClick,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { activateAds } = useAdZep();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    activateAds();

    if (onClick) {
      onClick(event);
    }

    if (process.env.NODE_ENV === "development") {
      console.log("AdZep: Button click detected");
    }
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

/**
 * AdZep Link Component
 * - A pre-configured link that activates AdZep on click
 * - Wraps any link element (Next.js Link, regular anchor, etc.)
 */
export function AdZepLink({
  children,
  onClick,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { activateAds } = useAdZep();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    activateAds();

    if (onClick) {
      onClick(event);
    }

    if (process.env.NODE_ENV === "development") {
      console.log("AdZep: Link click detected", {
        href: props.href,
        text: typeof children === "string" ? children : "complex content",
      });
    }
  };

  return (
    <a onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
