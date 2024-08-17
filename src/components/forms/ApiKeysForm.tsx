import { handleGenericError } from "@/helpers/functions/handleGenericError";
import { useMResetNewPassword } from "@/hooks/api/mutations/auth";
import Input from "@components/global/Input";
import { SubmitHandler, useForm } from "react-hook-form";

const defaultValues = {
  password: "pub_live_WXh54PoQMlxU23Xeo09jAsDcx3Xe0RMgPZsPZs",
  newPassword: "pub_live_WXh54PoQMlxU23Xeo09jAsDcx3Xe0RMgPZsPZs",
  confirmPassword: "pub_live_WXh54PoQMlxU23Xeo09jAsDcx3Xe0RMgPZsPZs",
};

const ApiKeysForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues,
  });

  const { mutate: mutateReset } = useMResetNewPassword();

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
        label="Live secret key"
        placeholder="Enter your old password"
        type="password"
        error={errors.password?.message}
        noMessage
        {...register("password", {
          required: "Old Password is required",
        })}
      />

      <Input
        label="Live public key"
        placeholder="Enter your new password"
        type="text"
        error={errors.newPassword?.message}
        noMessage
        {...register("newPassword", {
          required: "New Password is required",
          validate: () =>
            newPassword === confirmPassword || "Passwords do not match",
        })}
      />
      <Input
        label="Test key"
        placeholder="Confirm your new password"
        type="text"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword", {
          validate: () =>
            newPassword === confirmPassword || "Passwords do not match",
        })}
      />
    </form>
  );
};

export default ApiKeysForm;
