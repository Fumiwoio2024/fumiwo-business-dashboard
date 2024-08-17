import { PrimaryButton } from "@components/global/Buttons";
import Divider from "@components/global/Divider";
import Input from "@components/global/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type TBusinessInfoForm = {
  businessName?: string; // optional
  type?: string; // optional
  registrationNumber?: string; // optional
  country: string;
  address: string;
  state: string;
  city: string;
};

const defaultValues = {
  businessName: "",
  type: "",
  registrationNumber: "",
  country: "Nigeria",
  address: "",
  state: "",
  city: "",
};

const BusinessSettingForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
  });

  const submitForm: SubmitHandler<TBusinessInfoForm> = async (data) => {
    const payload = {
      name: data.businessName,
      type: data.type,
      registrationNumber: data.registrationNumber,
      addressInfo: {
        country: "NG",
        address: data.address,
        state: data.state,
        city: data.city,
      },
    };

    navigate("/dashboard/settings/onboarding/contact-details", {
      state: {
        businessDetails: payload,
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="space-y-5 rounded-md bg-white"
    >
      <Input
        disabled
        label="Business name"
        placeholder="Enter your business name"
        type="text"
        error={errors.businessName?.message}
        {...register("businessName", {
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
          disabled
          label="Registration number"
          placeholder="Enter your business registration number"
          type="text"
          error={errors.registrationNumber?.message}
          {...register("registrationNumber", {
            required: "Registration number is required",
            pattern: {
              value: /^[A-Za-z0-9 ]+$/,
              message: "Invalid Company name",
            },
            minLength: {
              value: 7,
              message: "Registration number must be at least 7 characters",
            },
          })}
        />

        <Input
          disabled
          label="Business type"
          placeholder="Enter your business type"
          type="text"
          error={errors.type?.message}
          {...register("type", {
            required: "Business type is required",
            pattern: {
              value: /^[A-Za-z0-9 ]+$/,
              message: "Invalid Company type",
            },
            minLength: {
              value: 3,
              message: "Business type must be at least 3 characters",
            },
          })}
        />
      </div>

      <div className="flex gap-5">
        <Input
          disabled
          label="Country"
          placeholder="Enter Country"
          type="text"
          error={errors.country?.message}
          {...register("country", {
            required: "Country is required",
            pattern: {
              value: /^[A-Za-z0-9 ]+$/,
              message: "Invalid Country",
            },
            minLength: {
              value: 3,
              message: "Country must be at least 3 characters",
            },
          })}
        />

        <Input
          disabled
          label="State"
          placeholder="Enter State"
          type="text"
          error={errors.state?.message}
          {...register("state", {
            required: "State is required",
            pattern: {
              value: /^[A-Za-z0-9 ]+$/,
              message: "Invalid State",
            },
            minLength: {
              value: 3,
              message: "State must be at least 3 characters",
            },
          })}
        />
      </div>

      <div className="flex gap-5">
        <Input
          disabled
          label="City"
          placeholder="Enter City"
          type="text"
          error={errors.city?.message}
          {...register("city", {
            required: "City is required",
            pattern: {
              value: /^[A-Za-z0-9 ]+$/,
              message: "Invalid City",
            },
            minLength: {
              value: 3,
              message: "City must be at least 3 characters",
            },
          })}
        />

        <Input
          disabled
          label="Address"
          placeholder="Enter business address"
          type="text"
          error={errors.address?.message}
          {...register("address", {
            required: "Address is required",
            minLength: {
              value: 3,
              message: "Address must be at least 3 characters",
            },
          })}
        />
      </div>
      <Divider />

      {errors ? (
        <p className="text-center text-buttonTextBlue">
          Please{" "}
          <span className="cursor-pointer font-semibold text-primaryGreen">
            contact
          </span>{" "}
          your Fumiwo account manager to make changes to your business
        </p>
      ) : (
        <PrimaryButton size="medium" className="w-full" type="submit">
          Continue
        </PrimaryButton>
      )}
    </form>
  );
};

export default BusinessSettingForm;
