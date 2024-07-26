import { formatPhoneNumber } from "@/helpers/functions/formatPhone";
import { handleGenericError } from "@/helpers/functions/handleGenericError";
import { useMUpdatePassword } from "@/hooks/api/mutations/app/onboarding.mutatuions";
import { BorderlessButton, PrimaryButton } from "@components/global/Buttons";
import Divider from "@components/global/Divider";
import Input from "@components/global/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

type TContactPersonForm = {
  firstName: string;
  lastName: string;
  role?: string; // optional
  email: string;
  countryCode: string;
  mobile: string;
};

const defaultValues = {
  // contactPersonInfo: {
  firstName: "",
  lastName: "",
  role: "", // 	optional
  email: "",
  // phone:{
  countryCode: "+234",
  mobile: "",
  // }
  // },										// 	optional

  // name: '',								// 	optional
  // type: '',								// 	optional
  // registrationNumber: '',	//	optional
  // countryCode: '',
  // mobile: '',
  // addressInfo: {
  // country: '',
  // address: '',
  // state: '',
  // city: '',
  // },				//	optional
};

type TBusinessInfo = {
  name: string;
  type: string;
  registrationNumber: string;
  addressInfo: {
    country: string;
    address: string;
    state: string;
    city: string;
  };
};

const ContactPersonForm = () => {
  const data = sessionStorage.getItem("fmw_onbd_contact_person_form_dt");
  const savedContactPersonDetails: TContactPersonForm = JSON.parse(
    data || "{}",
  );
  const savedDefaultValues = savedContactPersonDetails?.firstName
    ? savedContactPersonDetails
    : defaultValues;

  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
    watch,
  } = useForm({
    defaultValues: savedDefaultValues,
    mode: "onBlur",
  });

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value.slice(0, 12));
    setValue("mobile", formattedValue, { shouldValidate: true });
  };

  const { mutate, isPending } = useMUpdatePassword();
  const submitForm: SubmitHandler<TContactPersonForm> = async (data) => {
    const businessInfo: TBusinessInfo = location.state?.businessDetails;

    const payload = {
      ...businessInfo,
      contactPersonInfo: {
        firstName: data.firstName,
        lastName: data.lastName,
        role: data.role,
        email: data.email,
        phone: {
          countryCode: data.countryCode,
          mobile: data.mobile,
        },
      },
    };

    mutate(payload, {
      onSuccess: () => {
        reset();
        sessionStorage.setItem("fmw_onbd_business_form_dt", JSON.stringify({}));
        sessionStorage.setItem(
          "fmw_onbd_contact_person_form_dt",
          JSON.stringify({}),
        );

        navigate("/dashboard/settings/onboarding/select-product", {
          state: {
            businessDetails: payload,
          },
        });
      },
      onError: (error) => {
        handleGenericError(error);
      },
    });
  };

  const goBack = async () => {
    sessionStorage.setItem(
      "fmw_onbd_contact_person_form_dt",
      JSON.stringify(getValues()),
    );

    navigate("/dashboard/settings/onboarding/business-details");
  };

  console.log(watch("mobile"));

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="mt-5 space-y-5 rounded-md bg-white"
    >
      <div className="flex gap-5">
        <Input
          label="Contact person first name"
          placeholder="Enter first name"
          type="text"
          error={errors.firstName?.message}
          {...register("firstName", {
            required: "Contact Person first name is required",
            pattern: {
              value: /^[A-Za-z0-9 ]+$/,
              message: "Invalid Contact Person first name",
            },
            minLength: {
              value: 3,
              message:
                "Contact Person first name must be at least 3 characters",
            },
          })}
        />

        <Input
          label="Contact person last name"
          placeholder="Enter last name"
          type="text"
          error={errors.lastName?.message}
          {...register("lastName", {
            required: "Contact Person last name is required",
            pattern: {
              value: /^[A-Za-z0-9 ]+$/,
              message: "Invalid Contact Person last name",
            },
            minLength: {
              value: 3,
              message: "Contact Person last name must be at least 3 characters",
            },
          })}
        />
      </div>

      <div className="flex gap-5">
        <Input
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
          label="Role in organization"
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
      </div>

      <Input
        label="Phone number"
        placeholder="903 123 4567"
        error={errors.mobile?.message}
        leftComponent={
          <div className="flex min-w-max items-center self-stretch border bg-disabledInput px-3">
            {`🇳🇬 +234`}
          </div>
        }
        {...register("mobile", {
          required: "Phone number is required",
          onChange: handlePhoneInputChange,
          pattern: {
            value: /^(\d{3} \d{3} \d{4})$/,
            message: "Invalid phone number",
          },
        })}
      />

      <Divider />

      <PrimaryButton loading={isPending} className="w-full" type="submit">
        Continue
      </PrimaryButton>
      <BorderlessButton className="w-full" onClick={goBack}>
        Go back
      </BorderlessButton>
    </form>
  );
};

export default ContactPersonForm;
