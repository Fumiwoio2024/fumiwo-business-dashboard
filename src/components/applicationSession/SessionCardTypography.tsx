export const SessionCardTitle = ({
  title,
  description,
  isDropdown,
}: {
  title: string;
  description: string;
  isDropdown?: boolean;
}) => {
  return (
    <div className="space-y-1.5">
      <div className="flex gap-4">
        <h4 className="text-xl font-semibold text-header">{title}</h4>

        {isDropdown && (
          <svg
            className="mt-2"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.96004 4.47461L6.70004 7.73461C6.31504 8.11961 5.68504 8.11961 5.30004 7.73461L2.04004 4.47461"
              stroke="#718096"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </div>
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
