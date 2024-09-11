const Legend = ({ data }: { data: { label: string; color: string }[] }) => {
  return (
    <div className="flex justify-center gap-3">
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
