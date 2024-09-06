export const SessionCardTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="space-y-1.5">
      <h4 className="text-xl font-semibold text-header">{title}</h4>
      <p className="text-xs font-normal text-paraGray/70">{description}</p>
    </div>
  );
};

export const SessionCardItemName = ({ name }: { name: string }) => {
  return <p className="text-sm font-semibold text-paraGray">{name}</p>;
};

export const SessionCardItemValue = ({
  value,
}: {
  value: string | number | boolean | null | undefined;
}) => {
  return (
    <p className="text-sm font-normal capitalize text-paraGray">
      {value === null ? "N/A" : value === undefined ? "..." : String(value)}
    </p>
  );
};
