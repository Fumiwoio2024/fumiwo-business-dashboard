import { PrimaryButton } from "@components/global/Buttons";
import Input from "@components/global/Input";
import { useMSignIn } from "@hooks/api/mutations/auth";
import { getUser } from "@utils/constants";
import { SubmitHandler, useForm } from "react-hook-form";

const EnterPassword = ({
  openKey,
  onClose,
}: {
  openKey: () => void;
  onClose: () => void;
}) => {
  const user = getUser();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { password: "" },
  });
  const { mutate, isPending } = useMSignIn();

  const submitForm: SubmitHandler<{ password: string }> = (data) => {
    if (!user) return;

    mutate(
      { ...data, userType: "business", email: user.email },
      {
        onSuccess: (data) => {
          if (data.data.data.token) {
            openKey();
            onClose();
            reset();
          }
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="w-[370px] space-y-6">
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        error={errors.password?.message}
        {...register("password", {
          required: {
            value: true,
            message: "Password is required",
          },
        })}
      />

      <PrimaryButton loading={isPending} size="medium" className="w-full">
        Continue
      </PrimaryButton>
    </form>
  );
};

export default EnterPassword;
