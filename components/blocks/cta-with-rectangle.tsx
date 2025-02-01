"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CTAProps {
  badge?: {
    text: string
  }
  title: string
  action: {
    text: string
    href: string
    variant: "default" | "outline"
  }
  className?: string
}

export function CTASection({
  badge,
  title,
  action,
  className,
}: {
  badge?: {
    text: string;
  };
  title: string;
  action: {
    text: string;
    href: string;
    variant: "default" | "outline";
  };
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      {/* Background Rectangle */}
      <div className="absolute inset-0 bg-black/[0.02] rounded-3xl" />

      {/* Content Container */}
      <div className="relative px-6 py-10 md:px-10 text-center">
        {/* Badge */}
        {badge && (
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-black/[0.03] text-sm">
            {badge.text}
          </div>
        )}

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
          {title}
        </h2>

        {/* Action Button */}
        <div className="text-center">
          <a
            href={action.href}
            className="inline-block rounded-md px-6 py-3 text-base font-medium 
            bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
            text-white shadow-lg hover:shadow-xl transition-all"
          >
            {action.text}
          </a>
        </div>
      </div>
    </div>
  );
}
