import { PrimaryButton } from "@components/global/Buttons";
import Divider from "@components/global/Divider";
import Input from "@components/global/Input";
import { handleGenericError } from "@helpers/functions/handleGenericError";
import { useMUpdateProfile } from "@hooks/api/mutations/app/profile.mutation";
import { useQueryClient } from "@tanstack/react-query";
import { TUser } from "@type/global.types";

import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type TProfileSettingForm = {
  firstName: string;
  lastName: string;
  // role: string;
  // email: string;
};

const ProfileSettingForm = ({ user }: { user: TUser }) => {
  const defaultValues = {
    firstName: user?.firstName || user?.name,
    lastName: user?.lastName,
    // role: user?.role,
    // email: user?.email,
  };

  const { mutate, isPending } = useMUpdateProfile();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
  });

  const submitForm: SubmitHandler<TProfileSettingForm> = async (data) => {
    mutate(
      {
        firstName: data.firstName,
        lastName: data.lastName,
      },
      {
        onSuccess: (res) => {
          if (res.status === 200) {
            queryClient.invalidateQueries({ queryKey: ["profile-me"] });
            localStorage.setItem(
              "fmw_business_user",
              JSON.stringify(res.data.data),
            );
            toast.success("Profile updated successfully");
          }
        },
        onError: (error) => handleGenericError(error),
      },
    );
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="space-y-5 rounded-md bg-white"
    >
      <div className="flex gap-5">
        <Input
          label={user.firstName ? "First name" : "Name"}
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
        {user?.lastName && (
          <Input
            label="Last name"
            placeholder="Enter last name"
            type="text"
            error={errors.lastName?.message}
            value={user.lastName}
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
        )}
      </div>

      {/* <div className="flex gap-5"> */}
      <Input
        disabled
        label="Email"
        placeholder="Enter email"
        type="email"
        value={user?.email}
        // error={errors.email?.message}
        // {...register("email", {
        //   required: "Email is required",
        //   pattern: {
        //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        //     message: "Invalid Email",
        //   },
        //   minLength: {
        //     value: 3,
        //     message: "Email must be at least 3 characters",
        //   },
        // })}
      />
      <Input
        disabled
        label="Role"
        placeholder="Enter role"
        type="text"
        value={user?.role.name}
        // error={errors.role?.message}
        // {...register("role", {
        //   required: "Role is required",
        //   pattern: {
        //     value: /^[A-Za-z0-9 ]+$/,
        //     message: "Invalid Role",
        //   },
        //   minLength: {
        //     value: 3,
        //     message: "Role must be at least 3 characters",
        //   },
        // })}
      />
      {/* </div> */}

      <Divider />

      <PrimaryButton
        loading={isPending}
        size="medium"
        className="w-full"
        type="submit"
      >
        Save changes
      </PrimaryButton>
    </form>
  );
};

export default ProfileSettingForm;
