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

export const H3 = ({ children, className }: { children: ReactNode, className?: string }) => {
	return (
		<h3 className={`font-semibold text-lg md:text-2xl text-primaryBlack  ${className}`}>
			{children}
		</h3>
	)
}

export const H4 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h4 className={`text-header text-base font-medium ${className}`}>
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
    <h5 className={`text-header text-lg font-medium ${className}`}>
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
      className={` ${small ? "text-sm font-medium" : "text-md font-normal"} text-paraGray/70 ${className?.includes("leading") ? className : `leading-6 ${className}`}`}
    >
      {children}
    </p>
  );
};

