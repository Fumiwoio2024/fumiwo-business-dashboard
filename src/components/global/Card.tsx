import { ReactNode } from "react";

type TCardProps = {
  className?: string;
  children: ReactNode;
};
const Card = ({ className, children }: TCardProps) => {
  return (
    <section className={`rounded-md border bg-white p-6 ${className}`}>
      {children}
    </section>
  );
};

export default Card;

export const SummaryCard = ({
  title,
  value,
  percentage,
  isLoading,
  Icon,
  direction = "none",
  dateString = "yesterday",
}: {
  title: string;
  value: number | string;
  percentage?: number;
  direction?: "increase" | "decrease" | "none";
  dateString?: string;
  isLoading?: boolean;
  Icon: ReactNode;
}) => {
  let color = "";

  if (percentage && direction) {
    switch (direction) {
      case "decrease":
        color = "text-red-500";
        break;
      case "increase":
        color = "text-green-500";
        break;
      default:
        color = "";
        break;
    }
  }
  return (
    <Card className="col-span-1 flex h-[144px] flex-col justify-between">
      <div className="flex justify-between">
        <div className="space-y-1">
          <h4 className="text-semiNormal font-normal text-graySubtext">
            {isLoading ? "-" : title}
          </h4>
          <p className="text-xl font-medium">{isLoading ? "..." : value}</p>
        </div>
        {Icon}
      </div>
      {typeof percentage === "number" && (
        <p className="text-xs text-graySubtext">
          <span className={color}>
            {direction === "increase" && "+"}
            {direction === "decrease" && "-"}
            {percentage}%
          </span>{" "}
          from {dateString}
        </p>
      )}
    </Card>
  );
};