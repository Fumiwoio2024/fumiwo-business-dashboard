// src/components/Modal.js

const ModalContainer = ({
  isVisible,
  onClose,
  children,
  title,
}: {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      role="dialog"
      onClick={onClose}
      className={`absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ${
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
          <h3 className="text-header text-lg font-bold">{title}</h3>
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
