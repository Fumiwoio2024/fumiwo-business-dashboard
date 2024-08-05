import {
  ForwardedRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  forwardRef,
  useState,
} from "react";
import Divider from "./Divider";

// type TInputProps = ({
// 	label: string;
// 	textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
// } & InputHTMLAttributes<HTMLInputElement>)

type TInputProps = {
  label?: string;
  error?: string | undefined;
  noMessage?: boolean;
  isSearch?: boolean;
  leftComponent?: JSX.Element;
} & (
  | InputHTMLAttributes<HTMLInputElement>
  | ({ isLargeInput: true } & TextareaHTMLAttributes<HTMLTextAreaElement>)
);

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, TInputProps>(
  ({ label, error, noMessage, leftComponent, isSearch, ...props }, ref) => {
    const [isEyeOpened, setIsEyeOpened] = useState(false);

    const isLargeInput = "isLargeInput" in props;

    return (
      <div className="text-header w-full">
        {label && (
          <>
            <label htmlFor={props.name} className="text-sm font-normal">
              {label}
            </label>
            <Divider height={6} />
          </>
        )}
        <div
          className={`flex w-full items-center overflow-hidden rounded-md border border-inputBorder focus-within:outline ${[
            props.disabled ? "!bg-disabledInput" : "bg-white",
            error
              ? "focus-within:outline-red-500"
              : "focus-within:outline-primaryGreen",
          ].join(" ")} `}
        >
          {isSearch ? (
            <div className="pl-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                  fill="#A5B3CD"
                />
                <path
                  d="M21.9977 22.7495C21.8077 22.7495 21.6177 22.6795 21.4677 22.5295L19.4677 20.5295C19.3282 20.3883 19.25 20.1979 19.25 19.9995C19.25 19.801 19.3282 19.6106 19.4677 19.4695C19.7577 19.1795 20.2377 19.1795 20.5277 19.4695L22.5277 21.4695C22.8177 21.7595 22.8177 22.2395 22.5277 22.5295C22.3777 22.6795 22.1877 22.7495 21.9977 22.7495Z"
                  fill="#A5B3CD"
                />
              </svg>
            </div>
          ) : (
            leftComponent
          )}
          {isLargeInput ? (
            <textarea
              ref={ref as ForwardedRef<HTMLTextAreaElement>}
              {...props}
              className={`w-full border-none bg-white px-4 py-3 outline-none ${props.className}`}
            />
          ) : (
            <>
              <input
                ref={ref as ForwardedRef<HTMLInputElement>}
                {...props}
                id={props.name}
                security="password"
                type={isEyeOpened ? "text" : props.type}
                className={`w-full border-none px-4 py-3 outline-none ${props.className}`}
              />
              {props.type === "password" && (
                <div
                  role="button"
                  onClick={() => setIsEyeOpened(!isEyeOpened)}
                  className="flex cursor-pointer items-center justify-center px-3.5"
                >
                  {isEyeOpened ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.55">
                        <path
                          d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z"
                          stroke="#404F65"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z"
                          stroke="#404F65"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.55">
                        <path
                          d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z"
                          stroke="#404F65"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17.8198 5.76998C16.0698 4.44998 14.0698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77"
                          stroke="#404F65"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.41992 19.5302C9.55992 20.0102 10.7699 20.2702 11.9999 20.2702C15.5299 20.2702 18.8199 18.1902 21.1099 14.5902C22.0099 13.1802 22.0099 10.8102 21.1099 9.40018C20.7799 8.88018 20.4199 8.39018 20.0499 7.93018"
                          stroke="#404F65"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.5099 12.7002C15.2499 14.1102 14.0999 15.2602 12.6899 15.5202"
                          stroke="#404F65"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.47 14.5298L2 21.9998"
                          stroke="#404F65"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.9998 2L14.5298 9.47"
                          stroke="#404F65"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  )}
                </div>
              )}
            </>
          )}
        </div>
        {error && !noMessage && (
          <p className="mt-1 text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  },
);

export default Input;
