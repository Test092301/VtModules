import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({ className, variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-primary";
  const highlightColor = "text-secondary";
  const circleColor = variant === "light" ? "text-white" : "text-primary";
  const innerCircleColor = variant === "light" ? "#1a4b8c" : "white";
  
  return (
    <div className={cn("flex items-center", className)}>
      <div className="mr-2">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={circleColor}>
          <circle cx="20" cy="20" r="20" fill="currentColor"/>
          <circle cx="20" cy="20" r="10" fill={innerCircleColor}/>
          <circle cx="20" cy="20" r="5" fill="#ff7722"/>
        </svg>
      </div>
      <h1 className={cn("text-xl font-bold font-poppins", textColor)}>
        CameraTech <span className={highlightColor}>India</span>
      </h1>
    </div>
  );
}
