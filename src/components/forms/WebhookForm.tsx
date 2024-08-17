import { PrimaryButton } from "@components/global/Buttons";
import Input from "@components/global/Input";
import { SubmitHandler, useForm } from "react-hook-form";

const defaultValues = {
  webhookUrl: "",
};

const WebhookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const submitForm: SubmitHandler<typeof defaultValues> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-8 text-left">
      <Input
        label="Webhook URL"
        placeholder="https://www.example.io"
        type="url"
        error={errors.webhookUrl?.message}
        {...register("webhookUrl", {
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />

      <PrimaryButton size="medium" className="w-full" type="submit">
        Save changes
      </PrimaryButton>
    </form>
  );
};

export default WebhookForm;
