import { useMSignIn } from "@/hooks/api/mutations/auth";
import { PrimaryButton } from "@components/global/Buttons";
import Input from "@components/global/Input";
import { P } from "@components/global/Typography";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const defaultValues = {
  email: "",
  password: "",
};

const LoginForm = ({
  setIsSetPassword,
  setTokenState,
}: {
  setIsSetPassword: (state: true) => void;
  setTokenState?: (token: string) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });
  const { mutate, isPending } = useMSignIn();

  const submitForm: SubmitHandler<typeof defaultValues> = async (formData) => {
    const payload = {
      ...formData,
      userType: "business",
    };

    mutate(payload, {
      onSuccess: (data) => {
        reset();
        if (
          data.data?.data.user &&
          "isDefaultPassword" in data.data.data.user &&
          data.data?.data.user.isDefaultPassword === true
        ) {
          setTokenState?.(formData.password);
          setIsSetPassword(true);
        }
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-4 text-left">
      <Input
        label="Email"
        placeholder="Enter your email"
        type="email"
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        error={errors.password?.message}
        {...register("password", {
          required: "Password is required",
        })}
      />
      <Link to="/forgot-password" className="ml-auto block w-fit">
        <P small>Forgot Password?</P>
      </Link>
      <PrimaryButton loading={isPending} className="w-full" type="submit">
        Login
      </PrimaryButton>

      <div className="text-center">
        <P small>
          Don&apos;t have an account?{" "}
          <button type="button" className="text-primaryGreen">
            Contact Admin
          </button>
        </P>
      </div>
    </form>
  );
};

export default LoginForm;
