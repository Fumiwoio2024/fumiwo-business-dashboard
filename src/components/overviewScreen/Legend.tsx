const Legend = ({
  data,
  vertical,
}: {
  data: { label: string; color: string }[];
  vertical?: boolean;
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
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Legend;
