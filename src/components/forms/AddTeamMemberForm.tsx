import { dummyRoles } from "@/utils/data";
import { BorderlessButton, PrimaryButton } from "@components/global/Buttons";
import Dropdown from "@components/global/Dropdown";
import Input from "@components/global/Input";
import { TUser } from "@type/global.types";
import { SubmitHandler, useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

type TAddTeamMemberFormProps = {
  onClose: () => void;
  details: TUser | null;
};

const defaultValues = {
  email: "",
  role: "",
};

const AddTeamMemberForm = ({ onClose, details }: TAddTeamMemberFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: details
      ? {
          email: details.email,
          role: details.role.slug,
        }
      : defaultValues,
    mode: "onBlur",
  });

  const submitForm: SubmitHandler<typeof defaultValues> = async () => {
    onClose();
    !details && reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="w-[640px] space-y-6">
      <div className="space-y-5">
        <Input
          disabled={!!details}
          label="Email"
          placeholder="Enter your email"
          type="email"
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />

        <Dropdown
          label="Role"
          placeholder="Select Role"
          value={watch("role")}
          options={dummyRoles}
          {...register("role", {
            required: "Role is required",
          })}
        />
      </div>

      <div className="space-y-3">
        <PrimaryButton size="medium" className="w-full" type="submit">
          Send invite
        </PrimaryButton>
        <BorderlessButton
          type="button"
          onClick={onClose}
          size="medium"
          className="w-full !text-red-500"
        >
          Cancel
        </BorderlessButton>
      </div>
    </form>
  );
};

export default AddTeamMemberForm;
