"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

// Button Component
interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

const variantClasses = {
  primary: "bg-accent-600 text-white hover:bg-accent-700 focus-visible:ring-accent-500",
  secondary: "bg-primary-900 text-white hover:bg-primary-800 focus-visible:ring-primary-900",
  outline: "bg-transparent text-primary-900 border border-primary-300 hover:bg-primary-50 hover:border-primary-400 focus-visible:ring-primary-500",
  white: "bg-white text-primary-900 hover:bg-slate-50 focus-visible:ring-white",
  ghost: "bg-transparent text-slate-600 hover:text-primary-900 hover:bg-slate-100",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-6 py-3 text-base gap-2",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", children, className, disabled, asChild, ...props }, ref) => {
    const Comp = asChild ? motion.span : motion.button;
    
    return (
      <Comp
        ref={ref as any}
        whileHover={!disabled ? { scale: 1.02 } : undefined}
        whileTap={!disabled ? { scale: 0.98 } : undefined}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-md",
          "transition-colors duration-200",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

// Section Header Component
interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={cn(
            "section-label",
            dark ? "text-accent-400" : "text-accent-600"
          )}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={cn(
          "text-display-sm md:text-display-md font-semibold",
          dark ? "text-white" : "text-primary-900"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            "mt-3 text-base max-w-xl",
            align === "center" && "mx-auto",
            dark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

// Badge Component
interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "gold" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-slate-100 text-slate-700",
    accent: "bg-accent-50 text-accent-700",
    gold: "bg-gold-100 text-gold-700",
    outline: "bg-transparent border border-slate-300 text-slate-600",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
