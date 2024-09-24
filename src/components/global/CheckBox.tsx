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
        className={`flex h-4 w-4 cursor-pointer items-center justify-center rounded-md border transition-all ${checked ? "border-[#011D7B] bg-[#F9F5FF]" : "border-[#011D7B] bg-white"} `}
      >
        {checked && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="border"
          >
            <path
              d="M14.6663 6.5L8.24967 12.9167L5.33301 10"
              stroke="#011D7B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
