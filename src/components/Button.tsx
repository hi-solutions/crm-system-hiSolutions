"use client";

import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  className?: string;
  textClassName?: string;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      icon,
      className = "",
      textClassName = "",
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    // Tailwind closest matches per requirements:
    // - Background color closest to #005FDA -> use bg-blue-600
    // - px = 40px -> px-10 (2.5rem)
    // - py = 29px -> py-7 (1.75rem ≈ 28px)
    // - text color #FFFFFF -> text-white
    // - font size 22px -> closest is text-2xl (24px)
    // - font weight 600 -> font-semibold
    // - flex with gap 8px -> inline-flex items-center gap-2
    const baseStyles =
      "inline-flex items-center justify-center gap-2 bg-(--Primary) px-4 py-2 text-white font-normal transition-colors hover:bg-blue-700 focus:outline-none  focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-4xl hover:cursor-pointer active:scale-[0.98]";
    // const baseStyles =
    //   "inline-flex items-center justify-center gap-2 bg-blue-600 px-4 py-2 text-white font-normal transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-4xl hover:cursor-pointer";

    return (
      <button
        ref={ref}
        type={type}
        className={`${baseStyles} ${className}`}
        {...props}
      >
        {icon ? (
          <span className="shrink-0" aria-hidden>
            {icon}
          </span>
        ) : null}
        <span className={`whitespace-nowrap ${textClassName}`}>{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
