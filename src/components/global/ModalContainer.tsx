import useAppKeyPress from "@hooks/custom/useAppKeyPress";

const ModalContainer = ({
  isVisible,
  onClose,
  children,
  title,
  description,
}: {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  description?: string;
}) => {
  useAppKeyPress("Escape", onClose);
  return (
    <div
      autoFocus
      role="dialog"
      onClick={onClose}
      className={`absolute inset-0 z-10 grid place-items-center overflow-y-auto bg-black bg-opacity-70 py-5 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`transform rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-90"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-header">{title}</h3>
            <p className="text-xs text-paraGray/70">{description}</p>
          </div>
          <button onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
