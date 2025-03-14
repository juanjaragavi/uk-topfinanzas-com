import type React from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  showArrow?: boolean
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", showArrow = false, fullWidth = false, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center px-8 py-3 text-base font-medium transition-colors duration-200 rounded-full",
          {
            "bg-[#4ADE80] hover:bg-[#22C55E] text-white": variant === "primary",
            "bg-white hover:bg-gray-100 text-gray-900 border border-gray-300": variant === "secondary",
            "w-full": fullWidth,
          },
          className,
        )}
        ref={ref}
        {...props}
      >
        <span>{children}</span>
        {showArrow && <ArrowRight className="ml-2 -mr-1 w-5 h-5" />}
      </button>
    )
  },
)
Button.displayName = "Button"

export { Button }

