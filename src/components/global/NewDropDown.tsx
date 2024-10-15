import useClickOutside from "@hooks/custom/useClickOutside";
import { ReactNode, useState } from "react";
import { OverviewButton } from "./Buttons";

const NewDropDown = <T extends { id: string; title: string }>({
  children,
  options,
  selectedOption,
  disabled,
  dropDownPosition = "bottom",
  setSelectedOption,
}: {
  disabled?: boolean;
  dropDownPosition?: "top" | "bottom";
  children?: ReactNode;
  options: T[];
  selectedOption: T;
  setSelectedOption: (state: T) => void;
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useClickOutside(setShowDropdown);

  return (
    <div className="relative w-fit">
      <button
        disabled={disabled}
        className="block text-start"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {children || (
          <OverviewButton>
            <div className="flex items-center">
              {selectedOption.title}
              <span className="ml-2.5 text-paraGray/70">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.96004 4.97461L6.70004 8.23461C6.31504 8.61961 5.68504 8.61961 5.30004 8.23461L2.04004 4.97461"
                    stroke="#718096"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </OverviewButton>
        )}
      </button>

      <div
        role="dialog"
        ref={dropdownRef}
        className={`border-dark-6 shadow-3xl absolute right-0 z-10 w-full min-w-48 transform rounded-lg border bg-white p-1 transition duration-300 ${[
          showDropdown
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0",
          dropDownPosition === "bottom" ? "top-12" : "bottom-7",
        ].join(" ")} `}
      >
        {options.map((option) => (
          <div
            key={option.title}
            className={`flex cursor-pointer justify-between p-3 text-sm font-medium text-paraGray/70 hover:bg-linkGray/10 ${selectedOption.id === option.id ? "bg-offWhite" : ""}`}
            onClick={() => {
              setSelectedOption(option);
              setShowDropdown(false);
            }}
          >
            {option.title}
            {selectedOption.id === option.id && (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6668 5L7.50016 14.1667L3.3335 10"
                  stroke="#009851"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewDropDown;
