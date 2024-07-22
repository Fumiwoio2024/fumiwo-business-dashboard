import { ButtonHTMLAttributes, ReactNode } from "react";

type TPrimaryButton = {
  onClick?: () => void;
  children: string | JSX.Element;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  className?: ReactNode;
};

export const PrimaryButton = ({
  children,
  className,
  disabled,
  loading,
  ...props
}: TPrimaryButton) => {
  return (
    <button
      disabled={disabled || loading}
      className={`rounded-[50px] px-10 py-3 text-lg font-medium transition duration-300 ${disabled || loading ? "cursor-not-allowed !bg-primaryGreen/50 !text-textHeader/50" : "bg-primaryGreen text-textHeader hover:bg-primaryGreen/80 active:bg-primaryGreen/50"} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export const SecondaryButton = ({
  children,
  className,
  ...props
}: TPrimaryButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`rounded-[50px] border border-primaryGreen bg-white px-10 py-3 text-lg font-medium text-textHeader transition duration-300 hover:bg-primaryGreen/5 active:bg-primaryGreen/20 ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export const BorderlessButton = ({
  children,
  className,
  ...props
}: TPrimaryButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`rounded-[50px] border border-none bg-white px-10 py-3 text-lg font-medium text-secondaryButton transition duration-300 hover:text-secondaryButton/70 active:text-secondaryButton/40 ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};
