import { dummyTeamMembers } from "@/utils/data";
import { BorderlessButton, PrimaryButton } from "@components/global/Buttons";
import Input from "@components/global/Input";
import { SubmitHandler, useForm } from "react-hook-form";

type TCreateRoleFormProps = {
  onClose: () => void;
};

const defaultValues = {
  role_name: "",
  role_description: "",
};

const CreateRoleForm = ({ onClose }: TCreateRoleFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: defaultValues,
    mode: "onBlur",
  });

  const submitForm: SubmitHandler<typeof defaultValues> = async () => {
    onClose();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="w-[640px] space-y-6">
      <div className="space-y-5">
        <Input
          label="Role name"
          placeholder="Enter role name"
          type="text"
          error={errors.role_name?.message}
          {...register("role_name", {
            required: " Role name is required",
            minLength: {
              value: 3,
              message: "Role name must be at least 3 characters",
            },
          })}
        />
        <Input
          label="Role description"
          placeholder="Enter role description"
          type="text"
          error={errors.role_description?.message}
          {...register("role_description", {
            required: " Role description is required",
            minLength: {
              value: 5,
              message: "Role description is too short",
            },
          })}
        />

        <div className="space-y-6">
          <h4 className="text-sm font-semibold text-primaryBlack">
            Permissions
          </h4>

          <div className="space-y-3">
            {dummyTeamMembers[0].role.permissions.map((permissions) => (
              <div
                key={permissions}
                role="button"
                className="flex items-center space-x-2"
              >
                <input
                  id={permissions}
                  name={permissions}
                  value={permissions}
                  type="checkbox"
                  className="h-5 w-5 rounded border text-indigo-600 accent-[#F9F5FF] outline-header focus:ring-indigo-300"
                />
                <label
                  htmlFor={permissions}
                  className="text-sm font-medium capitalize text-graySubtext"
                >
                  {permissions.replace("-", " ")}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <PrimaryButton size="medium" className="w-full" type="submit">
          Save
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

export default CreateRoleForm;
