import { ReactNode } from 'react'

export const H1 = ({ children, className }: { children: ReactNode, className?: string }) => {
	return (
    <h1 className={`text-header text-2xl font-semibold ${className}`}>
      {children}
    </h1>
  );
}
export const H2 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={`text-header text-2xl font-semibold ${className}`}>
      {children}
    </h1>
  );
};

export const H3 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={`text-lg font-semibold text-primaryBlack ${className}`}>
      {children}
    </h3>
  );
};

export const H4 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h4 className={`text-base font-medium text-header ${className}`}>
      {children}
    </h4>
  );
};


export const H5 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h5 className={`text-lg font-medium text-header ${className}`}>
      {children}
    </h5>
  );
};

export const H6 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h6 className={`text-xs font-normal text-paraGray ${className}`}>
      {children}
    </h6>
  );
};

export const P = ({
  children,
  className,
  small,
}: {
  children: ReactNode;
  className?: string;
  small?: boolean;
}) => {
  return (
    <p
      className={` ${small ? "text-sm font-medium" : "text-base font-normal"} text-paraGray/70 ${className?.includes("leading") ? className : `leading-6 ${className}`}`}
    >
      {children}
    </p>
  );
};
