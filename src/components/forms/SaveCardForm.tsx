import { PrimaryButton } from "@components/global/Buttons";
import Divider from "@components/global/Divider";
import Input from "@components/global/Input";
import { H2, P } from "@components/global/Typography";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const defaultValues = {
  cardNumber: "",
  cvc: "",
  expiryDate: "",
};

const SaveCardForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
  });

  const submitForm: SubmitHandler<typeof defaultValues> = async (data) => {
    // console.log(payload);
    // sessionStorage.setItem("fmw_onbd_business_form_dt", JSON.stringify(data));
    // navigate("/dashboard/settings/onboarding/contact-details", {
    //   state: {
    //     businessDetails: payload,
    //   },
    // });
  };

  return (
    <div>
      <div className="space-y-3">
        <H2>Enter card details</H2>
        <P>Your card details are fully sceured</P>
      </div>

      <form
        onSubmit={handleSubmit(submitForm)}
        className="mt-5 space-y-5 rounded-md bg-white"
      >
        <Input
          label=" Card number"
          placeholder="0000 0000 0000 0000"
          type="text"
          error={errors.cardNumber?.message}
          {...register("cardNumber", {
            required: "Business name is required",
            pattern: {
              value: /^[A-Za-z0-9 ]+$/,
              message: "Invalid Company name",
            },
            minLength: {
              value: 3,
              message: "Business name must be at least 3 characters",
            },
          })}
        />

        <div className="flex gap-5">
          <Input
            label="Expiry Date"
            placeholder="Enter your business registration number"
            type="date"
            error={errors.expiryDate?.message}
            {...register("expiryDate", {
              required: "Registration number is required",
            })}
          />

          <Input
            label="CVC"
            placeholder="123"
            type="text"
            error={errors.cvc?.message}
            {...register("cvc", {
              required: "CVC is required",
            })}
          />
        </div>

        <Divider />

        <PrimaryButton
          // loading={isPending}
          className="w-full"
          type="submit"
        >
          Save card
        </PrimaryButton>
      </form>
    </div>
  );
};

export default SaveCardForm;
