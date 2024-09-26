import { ReactNode } from "react";

const Badge = ({
  children,
  type,
  className,
  color,
}: {
  color?: string;
  children: ReactNode;
  type?: "success" | "error" | "warning";
  className?: string;
}) => (
  <span
    style={{ color, borderColor: `${color}90`, backgroundColor: `${color}20` }}
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${[
      type === "success" && "border-green-200 bg-green-50 text-green-500",
      type === "error" && "border-red-200 bg-red-50 text-red-800",
      type === "warning" && "border-warningBorder bg-warningBg text-warning",
    ].join(" ")} ${className} `}
  >
    {children}
  </span>
);
export default Badge;
