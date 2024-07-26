// src/components/Modal.js

const ModalContainer = ({
  isVisible,
  onClose,
  children,
}: {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      role="dialog"
      onClick={onClose}
      className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`transform rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
