"use client"

import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeartbeatLoaderProps {
  className?: string
  size?: "sm" | "md" | "lg"
  showText?: boolean
  text?: string
}

export function HeartbeatLoader({
  className,
  size = "md",
  showText = false,
  text = "Loading...",
}: HeartbeatLoaderProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-20 w-20",
  }

  return (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)}>
      <div className="relative">
        {/* ECG line effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="absolute w-32 h-16" viewBox="0 0 120 40">
            <path
              d="M 0 20 L 30 20 L 35 10 L 40 30 L 45 15 L 50 20 L 120 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-purple-500 animate-pulse"
              style={{
                animation: "ecg-line 1.5s ease-in-out infinite",
              }}
            />
          </svg>
        </div>

        {/* Heart icon with pulse animation */}
        <Heart className={cn(sizeClasses[size], "text-purple-600 fill-purple-500", "animate-heartbeat")} />
      </div>

      {showText && <p className="text-sm font-medium text-gray-600 animate-pulse">{text}</p>}

      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          10% {
            transform: scale(1.1);
          }
          20% {
            transform: scale(1);
          }
          30% {
            transform: scale(1.15);
          }
          40% {
            transform: scale(1);
          }
        }

        @keyframes ecg-line {
          0% {
            opacity: 0.3;
            transform: translateX(-20px);
          }
          50% {
            opacity: 1;
            transform: translateX(0px);
          }
          100% {
            opacity: 0.3;
            transform: translateX(20px);
          }
        }

        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
