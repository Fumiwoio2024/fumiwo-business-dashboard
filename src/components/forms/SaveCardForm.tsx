import { formatCardNumber } from "@helpers/functions/formatCardNumber";
import { PrimaryButton } from "@components/global/Buttons";
import Divider from "@components/global/Divider";
import Input from "@components/global/Input";
import { H2, P } from "@components/global/Typography";
import { SubmitHandler, useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

const defaultValues = {
  cardNumber: "",
  cvc: "",
  expiryDate: "",
};

const SaveCardForm = ({ onClose }: { onClose: () => void }) => {
  // const [cardNumber, setCardNumber] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues,
    mode: "onBlur",
  });

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value.slice(0, 19));
    setValue("cardNumber", formattedValue, { shouldValidate: true });
  };

  const handleCvcInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("cvc", e.target.value.slice(0, 3), { shouldValidate: true });
  };

  const submitForm: SubmitHandler<typeof defaultValues> = async () => {
    // console.log(payload);
    // sessionStorage.setItem("fmw_onbd_business_form_dt", JSON.stringify(data));
    // navigate("/dashboard/settings/onboarding/contact-details", {
    //   state: {
    //     businessDetails: payload,
    //   },
    // });
    onClose();
    reset();
  };

  return (
    <div className="min-w-[710px]">
      <div className="space-y-3">
        <H2>Enter card details</H2>
        <P>Your card details are fully secured</P>
      </div>

      <form
        onSubmit={handleSubmit(submitForm)}
        className="mt-5 space-y-5 rounded-md bg-white"
      >
        <Input
          label=" Card number"
          placeholder="0000 0000 0000 0000"
          type="text"
          min={3}
          error={errors.cardNumber?.message}
          {...register("cardNumber", {
            onChange: handleCardInputChange,
            required: "Debit card number is required",
            minLength: {
              value: 19,
              message: "Invalid debit card number",
            },
            maxLength: 19,
          })}
        />

        <div className="flex gap-5">
          <Input
            label="Expiry Date"
            placeholder="Enter your business registration number"
            type="date"
            error={errors.expiryDate?.message}
            {...register("expiryDate", {
              required: "Expiry date is required",
            })}
          />

          <Input
            label="CVC"
            placeholder="123"
            type="text"
            error={errors.cvc?.message}
            {...register("cvc", {
              onChange: handleCvcInputChange,
              required: "CVC is required",
              minLength: {
                value: 3,
                message: "Invalid CVC",
              },
              maxLength: 3,
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
