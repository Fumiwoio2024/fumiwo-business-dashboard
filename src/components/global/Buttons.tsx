import { ButtonHTMLAttributes, ReactNode } from "react";
import Loader from "./Loader";

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
      className={`rounded-[50px] bg-primaryGreen font-medium text-header transition duration-300 hover:bg-primaryGreen/80 active:bg-primaryGreen/50 disabled:cursor-not-allowed disabled:!bg-primaryGreen/50 disabled:!text-header/50 ${[
        size === "small" && "px-4 py-3 text-xs",
        size === "medium" && "px-4.5 py-3 text-base",
        size === "large" && "px-10 py-4.5 text-lg",
      ].join(" ")} ${className}`}
      {...props}
    >
      <div className="mx-auto inline-flex items-center">
        {loading && <Loader />}
        {children}
      </div>
    </button>
  );
};
export const SecondaryButton = ({
  children,
  className,
  loading,
  disabled,
  small,
  size = "large",
  ...props
}: TPrimaryButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
  size = small ? "small" : size;

  return (
    <button
      disabled={disabled || loading}
      className={`rounded-[50px] border border-primaryGreen bg-white font-medium text-header transition duration-300 hover:bg-primaryGreen/5 active:bg-primaryGreen/20 ${[
        size === "small" && "px-4 py-3 text-xs",
        size === "medium" && "px-4.5 py-3 text-base",
        size === "large" && "px-10 py-4.5 text-lg",
      ].join(" ")} ${className}`}
      {...props}
    >
      <div className="flex items-center gap-2">
        {loading && <Loader />}
        {children}
      </div>
    </button>
  );
};

export const BorderlessButton = ({
  children,
  className,
  loading,
  disabled,
  small,
  size = "large",
  ...props
}: TPrimaryButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
  size = small ? "small" : size;

  return (
    <button
      disabled={disabled || loading}
      className={`rounded-[50px] border border-none bg-white font-medium text-secondaryButton transition duration-300 hover:text-secondaryButton/70 active:text-secondaryButton/40 ${[
        size === "small" && "px-4 py-3 text-xs",
        size === "medium" && "px-4.5 py-3 text-base",
        size === "large" && "px-10 py-4.5 text-lg",
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
  loading,
  disabled,
  // small,
  // size = "large",
  ...props
}: TPrimaryButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
  // size = small ? "small" : size;

  return (
    <button
      disabled={disabled || loading}
      className={`rounded-[10px] border border-sidebarBorder bg-white p-3 text-sm font-medium text-graySubtext transition duration-200 hover:bg-paraGray/5 active:bg-paraGray/20 ${[
        // size === "small" && "px-4 py-3 text-xs",
        // size === "medium" && "px-4.5 py-3 text-base",
        // size === "large" && "px-10 py-4.5 text-lg",
      ].join(" ")} ${className}`}
      {...props}
    >
      {loading && <Loader />}
      {children}
    </button>
  );
};


