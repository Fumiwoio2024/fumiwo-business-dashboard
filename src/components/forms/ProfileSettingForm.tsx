import { PrimaryButton } from "@components/global/Buttons";
import Divider from "@components/global/Divider";
import Input from "@components/global/Input";
import { SubmitHandler, useForm } from "react-hook-form";

type TProfileSettingForm = {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
};

const defaultValues = {
  firstName: "Karim",
  lastName: "Amadou",
  role: "Super admin",
  email: "karim@fumiwo.io",
};

const ProfileSettingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
  });
  const submitForm: SubmitHandler<TProfileSettingForm> = async (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="space-y-5 rounded-md bg-white"
    >
      <div className="flex gap-5">
        <Input
          label="First name"
          placeholder="Enter first name"
          type="text"
          error={errors.firstName?.message}
          {...register("firstName", {
            required: "First name is required",
            pattern: {
              value: /^[A-Za-z0-9 ]+$/,
              message: "Invalid First name",
            },
            minLength: {
              value: 3,
              message: "First name must be at least 3 characters",
            },
          })}
        />

        <Input
          label="Last name"
          placeholder="Enter last name"
          type="text"
          error={errors.lastName?.message}
          {...register("lastName", {
            required: "Last name is required",
            pattern: {
              value: /^[A-Za-z0-9 ]+$/,
              message: "Invalid Last name",
            },
            minLength: {
              value: 3,
              message: "Last name must be at least 3 characters",
            },
          })}
        />
      </div>

      <Input
        disabled
        label="Email"
        placeholder="Enter email"
        type="email"
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid Email",
          },
          minLength: {
            value: 3,
            message: "Email must be at least 3 characters",
          },
        })}
      />
      <Input
        disabled
        label="Role"
        placeholder="Enter role"
        type="text"
        error={errors.role?.message}
        {...register("role", {
          required: "Role is required",
          pattern: {
            value: /^[A-Za-z0-9 ]+$/,
            message: "Invalid Role",
          },
          minLength: {
            value: 3,
            message: "Role must be at least 3 characters",
          },
        })}
      />

      <Divider />

      <PrimaryButton size="medium" className="w-full" type="submit">
        Save changes
      </PrimaryButton>
    </form>
  );
};

export default ProfileSettingForm;
