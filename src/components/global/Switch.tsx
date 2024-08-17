const Switch = ({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}) => {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`${
        enabled ? "bg-switchGreen" : "bg-gray-300"
      } -colors relative inline-flex h-6 w-11 items-center rounded-full transition duration-200 focus:outline-none`}
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
