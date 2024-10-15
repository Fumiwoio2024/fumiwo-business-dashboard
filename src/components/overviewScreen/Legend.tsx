import { ReactNode } from "react";

const Legend = ({
  data,
  vertical,
  useLegendColor,
}: {
  data: { label: ReactNode; color: string }[];
  vertical?: boolean;
  useLegendColor?: boolean;
}) => {
  return (
    <div
      className={`flex justify-center ${vertical ? "flex-col gap-1" : "gap-3"} `}
    >
      {data.map((item) => (
        <div className="flex items-center gap-1.5 text-xxs">
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <p style={{ color: useLegendColor ? item.color : "initial" }}>
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Legend;
