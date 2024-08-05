import { BorderlessButton, PrimaryButton } from "@components/global/Buttons";
import { P } from "@components/global/Typography";

const DeleteTeamMember = ({ onClose }: { onClose: () => void }) => {
  const submitForm = () => {
    onClose();
  };

  return (
    <div className="w-[370px] space-y-12">
      <P>
        You are about to remove this user from your team. Are you sure about
        this?
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

export default DeleteTeamMember;
