import { BorderlessButton, PrimaryButton } from "@components/global/Buttons";
import { P } from "@components/global/Typography";

const ConfirmDeleteModal = ({
  onClose,
  description,
  onConfirmDelete,
}: {
  onClose: () => void;
  description: string;
  onConfirmDelete: () => void;
}) => {
  const submitForm = () => {
    onConfirmDelete();
    onClose();
  };

  return (
    <div className="w-[370px] space-y-12">
      <P>
        {description }
      </P>

      <div className="space-y-3">
        <PrimaryButton
          onClick={submitForm}
          size="medium"
          className="w-full"
          type="submit"
        >
          Delete
        </PrimaryButton>
        <BorderlessButton
          size="medium"
          className="w-full !text-red-500"
          onClick={onClose}
        >
          Cancel
        </BorderlessButton>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
