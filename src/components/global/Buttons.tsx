import { ButtonHTMLAttributes, ReactNode } from "react";

type TPrimaryButton = {
  onClick?: () => void;
  children: string | JSX.Element;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  className?: ReactNode;
  small?: boolean;
  size?: "small" | "medium" | "large";
};

export const PrimaryButton = ({
  children,
  className,
  disabled,
  loading,
  small,
  size = "large",
  ...props
}: TPrimaryButton) => {
  size = small ? "small" : size;

  return (
    <button
      disabled={disabled || loading}
      className={`rounded-[50px] font-medium transition duration-300 ${[
        size === "small" && "px-4 py-3 text-xs",
        size === "medium" && "px-4.5 py-3 text-base",
        size === "large" && "py-4.5 px-10 text-lg",
        disabled || loading
          ? "!text-header/50 cursor-not-allowed !bg-primaryGreen/50"
          : "text-header bg-primaryGreen hover:bg-primaryGreen/80 active:bg-primaryGreen/50",
      ].join(" ")} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export const SecondaryButton = ({
  children,
  className,
  small,
  size = "large",
  ...props
}: TPrimaryButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
  size = small ? "small" : size;

  return (
    <button
      className={`text-header rounded-[50px] border border-primaryGreen bg-white font-medium transition duration-300 hover:bg-primaryGreen/5 active:bg-primaryGreen/20 ${[
        size === "small" && "px-4 py-3 text-xs",
        size === "medium" && "px-4.5 py-3 text-base",
        size === "large" && "py-4.5 px-10 text-lg",
      ].join(" ")} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const BorderlessButton = ({
  children,
  className,
  small,
  size = "large",
  ...props
}: TPrimaryButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
  size = small ? "small" : size;

  return (
    <button
      className={`rounded-[50px] border border-none bg-white font-medium text-secondaryButton transition duration-300 hover:text-secondaryButton/70 active:text-secondaryButton/40 ${[
        size === "small" && "px-4 py-3 text-xs",
        size === "medium" && "px-4.5 py-3 text-base",
        size === "large" && "py-4.5 px-10 text-lg",
      ].join(" ")} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const OverviewButton = ({
  children,
  className,
  // small,
  // size = "large",
  ...props
}: TPrimaryButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
  // size = small ? "small" : size;

  return (
    <button
      className={`rounded-[10px] border border-sidebarBorder bg-white p-3 text-sm font-medium text-graySubtext transition duration-200 hover:bg-paraGray/5 active:bg-paraGray/20 ${[
        // size === "small" && "px-4 py-3 text-xs",
        // size === "medium" && "px-4.5 py-3 text-base",
        // size === "large" && "px-10 py-4.5 text-lg",
      ].join(" ")} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};


