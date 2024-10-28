import { BorderlessButton, PrimaryButton } from "@components/global/Buttons";
import Input from "@components/global/Input";
import { useMCreateRole } from "@hooks/api/mutations/app/role.mutation.query";
import { useQPermissions } from "@hooks/api/queries/role.queries";
import { useState } from "react";
// import { TRole } from "@type/global.types";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
const defaultValues = {
  role_name: "",
  role_description: "",
};

type TCreateRoleFormProps = {
  onClose: () => void;
  isEdit: boolean;
  // details: TRole;
  details?: typeof defaultValues;
};

// const result = [
//   "onboard-users",
//   "view-users",
//   "delete-users",
//   "manage-roles",
//   "manage-cards",
//   "update-preferences",
//   "manage-clients",
//   "view-transactions",
//   "manage-plans",
//   "view-auditlogs",
//   "view-analytics",
// ];

const CreateRoleForm = ({ onClose, details, isEdit }: TCreateRoleFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: isEdit ? details : defaultValues,
    mode: "onBlur",
  });

  const [permissionsArr, setPermissions] = useState<string[]>([]);
  const { mutate } = useMCreateRole();
  const { result: permRes } = useQPermissions();
  const submitForm: SubmitHandler<typeof defaultValues> = async (data) => {
    const req = {
      name: data.role_name,
      description: data.role_description,
      permissions: permissionsArr,
    };

    mutate(req, {
      onSuccess: () => {
        toast.success("Role created successfully");
        onClose();
        reset();
      },
    });
  };

  const actions = permRes?.flatMap((resource) =>
    resource.permissions.map((permission) => permission.action),
  );

  // const actionArr = permRes?.reduce((acc, curr): string[] => {
  //   // const tempPermissons = [...curr.permissions];
  //   // const tempActions = [...curr.permissions, ...acc.permissions];
  //   return [...curr.permissions, ...acc.permissions];
  // }, []);

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

          <div className="space-y-6">
            {actions?.map((permissions, index) => (
              <div
                key={permissions}
                role="button"
                className="flex items-center space-x-2"
              >
                <input
                  id={permissions}
                  name={permissions}
                  value={permissionsArr[index]}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setPermissions((prev) => [...prev, e.target.name]);
                    } else {
                      setPermissions((prev) =>
                        prev.filter((perm) => perm !== e.target.name),
                      );
                    }
                  }}
                  type="checkbox"
                  className="h-4 w-4 rounded border text-indigo-600 accent-[#F9F5FF] outline-header focus:ring-indigo-300"
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
