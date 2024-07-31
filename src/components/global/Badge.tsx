import { ReactNode } from "react";

const Badge = ({
  children,
  type,
}: {
  children: ReactNode;
  type: "success" | "error" | "warning";
}) => (
  <span
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${[
      type === "success" && "border-green-200 bg-green-50 text-green-500",
      type === "error" && "border-red-200 bg-red-50 text-red-800",
      type === "warning" && "border-yellow-200 bg-yellow-50 text-yellow-500",
    ].join(" ")} `}
  >
    {children}
  </span>
);
export default Badge;