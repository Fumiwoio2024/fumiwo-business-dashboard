import { useState } from "react";

const Checkbox = ({
  // checked,
  // setChecked,
  label,
}: {
  label: string;
  checked: boolean;
  setChecked: (checked: boolean) => void;
}) => {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex items-center gap-2">
      <div
        onClick={toggleCheckbox}
        className={`flex h-4 w-4 cursor-pointer items-center justify-center rounded-md border transition-all ${checked ? "border-[#011D7B] bg-[#F9F5FF]" : "border-[#718096] bg-white"}`}
      >
        {checked ? (
          <svg
            width="10"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6668 1.5L4.25016 7.91667L1.3335 5"
              // stroke="#718096"
              stroke="#011D7B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="10"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6668 1.5L4.25016 7.91667L1.3335 5"
              stroke="#718096"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </div>
      <label
        htmlFor={label}
        className="text-sm font-normal capitalize text-graySubtext"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
