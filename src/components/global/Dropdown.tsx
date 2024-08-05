import { forwardRef, HTMLAttributes } from "react";
import Divider from "./Divider";

type TDropdown = {
  value: string;
  name: string;
  disabled?: boolean;
  error?: string | undefined;
  label: string;
  placeholder?: string;
  className?: string;
  options: { name: string; value: string | number }[] | undefined;
} & HTMLAttributes<HTMLSelectElement>;

const Dropdown = forwardRef<HTMLSelectElement, TDropdown>(
  (
    {
      label,
      value,
      placeholder = "Select an option",
      className,
      options,
      disabled,
      name,
      error,
      ...props
    },
    ref,
  ) => {
    const selected = options?.find((option) => option.value === value)?.name;
    return (
      <div className="text-header w-full">
        {label && (
          <>
            <label htmlFor={name} className="text-sm font-normal">
              {label}
            </label>
            <Divider height={6} />
          </>
        )}
        <div className="relative w-full">
          <div
            className={`absolute left-0 top-0 flex h-full w-full items-center justify-end overflow-hidden rounded-md border px-4 py-3 outline-none${[
              disabled ? "bg-disabledInput" : "bg-white",
              error ? "border-red-500" : "border-inputBorder",
            ].join(" ")} `}
          >
            <p className={`w-full ${!selected && "text-placeholder"}`}>
              {selected || placeholder}
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.999 8.50098L11.999 15.501L4.99902 8.50098"
                stroke="#404F65"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <select
            id={name}
            name={name}
            ref={ref}
            {...props}
            className={`flex w-full items-center overflow-hidden rounded-md border border-inputBorder px-4 py-3 opacity-0 outline-none ${className}`}
          >
            <option value={""}>{placeholder}</option>
            {options &&
              options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
          </select>
        </div>

        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  },
);

export default Dropdown;
