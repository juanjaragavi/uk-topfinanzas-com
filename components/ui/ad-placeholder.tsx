import type React from "react"

interface AdPlaceholderProps {
  width: number
  height: number
  className?: string
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ width, height, className = "" }) => {
  return (
    <div
      className={`bg-gray-100 border border-gray-200 flex items-center justify-center ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <p className="text-gray-500 text-sm">
        Ad ({width}x{height})
      </p>
    </div>
  )
}

