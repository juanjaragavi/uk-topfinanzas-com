import type React from "react"
import { forwardRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export interface ButtonBaseProps {
  variant?: "primary" | "secondary"
  showArrow?: boolean
  fullWidth?: boolean
  className?: string
  children?: React.ReactNode
}

export interface ButtonAsButtonProps extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined
}

export interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", showArrow = false, fullWidth = false, className, children, ...props }, ref) => {
    const buttonStyles = cn(
      "inline-flex items-center justify-center px-8 py-3 text-base font-medium transition-colors duration-200 rounded-full",
      {
        "bg-[#4ADE80] hover:bg-[#22C55E] text-white": variant === "primary",
        "bg-white hover:bg-gray-100 text-gray-900 border border-gray-300": variant === "secondary",
        "w-full": fullWidth,
      },
      className,
    );
    
    const content = (
      <>
        <span>{children}</span>
        {showArrow && <ArrowRight className="ml-2 -mr-1 w-5 h-5" />}
      </>
    );

    if ('href' in props && props.href !== undefined) {
      return (
        <Link href={props.href} className={buttonStyles}>
          {content}
        </Link>
      );
    }

    return (
      <button
        className={buttonStyles}
        ref={ref}
        {...(props as ButtonAsButtonProps)}
      >
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
