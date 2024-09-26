import { handleGenericError } from "@helpers/functions/handleGenericError";
import { useMResetNewPassword } from "@/hooks/api/mutations/auth";
import { PrimaryButton } from "@components/global/Buttons";
import Input from "@components/global/Input";
import { P } from "@components/global/Typography";
import { SubmitHandler, useForm } from "react-hook-form";

const defaultValues = {
  password: "",
  newPassword: "",
  confirmPassword: "",
};

const PasswordCheck = ({
  isStrong,
  title,
}: {
  isStrong: boolean;
  title: string;
}) => {
  return (
    <div className="flex items-center space-x-2">
      {isStrong ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="16" rx="8" fill="#0BE781" />
          <path
            d="M5 8L7 10L11 6"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="16" rx="8" fill="#D0D5DD" />
          <path
            d="M5 8L7 10L11 6"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <P small className="!text-sm">
        {title}
      </P>
    </div>
  );
};

const ChangeAppPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues,
  });

  const { mutate: mutateReset, isPending: isPendingReset } =
    useMResetNewPassword();

  const newPassword = watch("newPassword");
  const confirmPassword = watch("confirmPassword");

  const submitForm: SubmitHandler<typeof defaultValues> = async (data) => {
    const payload = {
      token: data.password,
      password: newPassword,
      confirmPassword: data.confirmPassword,
      userType: "business",
    };

    mutateReset(payload, {
      onSuccess: () => {
        reset();
      },
      onError: (error) => handleGenericError(error),
    });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-4 text-left">
      <Input
        label="Old Password"
        placeholder="Enter your old password"
        type="password"
        error={errors.password?.message}
        noMessage
        {...register("password", {
          required: "Old Password is required",
        })}
      />

      <Input
        label="New Password"
        placeholder="Enter your new password"
        type="password"
        error={errors.newPassword?.message}
        noMessage
        {...register("newPassword", {
          required: "New Password is required",
          validate: () =>
            newPassword === confirmPassword || "Passwords do not match",
        })}
      />
      <Input
        label="Confirm Password"
        placeholder="Confirm your new password"
        type="password"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword", {
          validate: () =>
            newPassword === confirmPassword || "Passwords do not match",
        })}
      />

      <div className="space-y-">
        <P small>Password Must contain:</P>
        <PasswordCheck
          isStrong={newPassword.length >= 8}
          title="At least 8 characters"
        />
        <PasswordCheck
          isStrong={newPassword.match(/[A-Z]/) !== null}
          title="At least one uppercase character"
        />
        <PasswordCheck
          isStrong={newPassword.match(/[a-z]/) !== null}
          title="At least one lowercase character"
        />
        <PasswordCheck
          isStrong={newPassword.match(/[0-9]/) !== null}
          title="At least one number"
        />
        <PasswordCheck
          isStrong={newPassword.match(/[!@#$%^&*(),.?":{}|<>]/) !== null}
          title="Must contain at least one special character"
        />
      </div>

      <PrimaryButton
        size="medium"
        className="w-full"
        type="submit"
        loading={isPendingReset}
      >
        Continue
      </PrimaryButton>
    </form>
  );
};

export default ChangeAppPassword;
