import { PrimaryButton } from "@components/global/Buttons";
import Input from "@components/global/Input";
import { useForm } from "react-hook-form";

const EnterPassword = ({
  openKey,
  onClose,
}: {
  openKey: () => void;
  onClose: () => void;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { password: "" },
  });

  const submitForm = () => {
    openKey();
    onClose();
    reset();
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

      <PrimaryButton size="medium" className="w-full">
        Continue
      </PrimaryButton>
    </form>
  );
};

export default EnterPassword;
