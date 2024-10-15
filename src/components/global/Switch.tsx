import Loader from "./Loader";

const Switch = ({
  enabled,
  onChange,
  disabled,
  loading,
}: {
  enabled: boolean;
  onChange?: (enabled: boolean) => void;
  disabled?: boolean;
  loading?: boolean;
}) => {
  return loading ? (
    <div className="px-auto flex h-6 w-11 items-center justify-center">
      <Loader color={"#d1d5db"} />
    </div>
  ) : (
    <button
      disabled={disabled || loading}
      onClick={() => onChange?.(!enabled)}
      className={`${
        enabled ? "bg-switchGreen" : "bg-gray-300"
      } -colors relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full transition duration-200 focus:outline-none`}
    >
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200`}
      />
    </button>
  );
};

export default Switch;
