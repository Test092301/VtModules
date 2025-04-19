import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({ className, variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-primary";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <h1 className={cn("text-xl font-bold font-poppins", textColor)}>
        VT Modules
      </h1>
    </div>
  );
}
