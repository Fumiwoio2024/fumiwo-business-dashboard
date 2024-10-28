import { PrimaryButton } from "@components/global/Buttons";
import Input from "@components/global/Input";
import ModalContainer from "@components/global/ModalContainer";
import { H2 } from "@components/global/Typography";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import EnterPassword from "./EnterPassword";
import { TBusinessUser } from "@type/global.types";
import { useMRotateKeys } from "@hooks/api/mutations/app/profile.mutation";
import { useMUpdatePreferences } from "@hooks/api/mutations/app/preferences.mutation";
const defaultValues = {
  live_secret: "pub_live_WXh54PoQMlxU23Xeo09jAsDcx3Xe0RMgPZsPZs",
  live_public: "pub_live_WXh54PoQMlxU23Xeo09jAsDcx3Xe0RMgPZsPZs",
  test_secret: "pub_live_WXh54PoQMlxU23Xeo09jAsDcx3Xe0RMgPZsPZs",
  test_public: "pub_live_WXh54PoQMlxU23Xeo09jAsDcx3Xe0RMgPZsPZs",
  testWebhookUrl: "",
};

const ApiKeysForm = ({
  // user,
  business,
}: {
  // user?: TUser;
  business?: TBusinessUser;
}) => {
  // const [isOn, setIsOn] = useState(false);

  const [isEnterPassword, setIsEnterPassword] = useState("");
  const [liveSecretShown, setLiveSecretShown] = useState(false);
  const [testSecretShown, setTestSecretShown] = useState(false);

  const { mutate: rotateKeys, isPending } = useMRotateKeys();
  const { mutate: updatePreferences, isPending: isUpdatePreferencesPending } =
    useMUpdatePreferences();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      live_secret: business?.privateKey || "",
      live_public: business?.publicKey || "",
      test_secret: business?.testPrivateKey || "",
      test_public: business?.testPublicKey || "",
      testWebhookUrl: business?.preferences.testWebhookUrl || "",
    },
  });

  const liveSecret = watch("live_secret");
  const testSecret = watch("test_secret");

  const toggleLiveSecretShown = () => {
    setLiveSecretShown(!liveSecretShown);
  };

  const copySecret = async (text: string) => {
    await window.navigator.clipboard.writeText(text);
    toast.success("Successfully copied api key");
  };

  const submitForm: SubmitHandler<typeof defaultValues> = async (data) => {
    updatePreferences({
      testWebhookUrl: data.testWebhookUrl,
    });
  };

  return (
    <>
      <ModalContainer
        title="Enter your password"
        onClose={() => setIsEnterPassword("")}
        isVisible={!!isEnterPassword}
      >
        <EnterPassword
          onClose={() => setIsEnterPassword("")}
          openKey={() =>
            isEnterPassword === "live-secret"
              ? toggleLiveSecretShown()
              : setTestSecretShown(true)
          }
        />
      </ModalContainer>

      <form onSubmit={handleSubmit(submitForm)} className="space-y-8 text-left">
        <section className="space-y-4">
          <div className="mb-6 flex items-center justify-between">
            <H2 className="">API Keys</H2>

            <button
              disabled={true}
              type="button"
              className={`flex items-center gap-1 font-medium text-switchGreen`}
              onClick={() => rotateKeys()}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${isPending && "animate-spin"}`}
              >
                <path
                  d="M14.6668 7.99967C14.6668 11.6797 11.6802 14.6663 8.00016 14.6663C4.32016 14.6663 2.0735 10.9597 2.0735 10.9597M2.0735 10.9597H5.08683M2.0735 10.9597V14.293M1.3335 7.99967C1.3335 4.31967 4.2935 1.33301 8.00016 1.33301C12.4468 1.33301 14.6668 5.03967 14.6668 5.03967M14.6668 5.03967V1.70634M14.6668 5.03967H11.7068"
                  stroke="#0BB466"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>Generate new keys</p>
            </button>
          </div>
          <div>
            <Input
              disabled
              isSecretInput
              label="Live secret key"
              placeholder="Enter your old password"
              type={liveSecretShown ? "text" : "password"}
              error={errors.live_secret?.message}
              rightComponent={
                <ApiKeyInputActions
                  secretShown={liveSecretShown}
                  copySecret={() => copySecret(liveSecret)}
                  hideSecret={() => setLiveSecretShown(false)}
                  showSecret={() => setIsEnterPassword("live-secret")}
                />
              }
              {...register("live_secret", {
                required: "Old Password is required",
              })}
            />
          </div>
          <Input
            label="Live public key"
            placeholder="Enter your new password"
            type="text"
            error={errors.live_public?.message}
            disabled
            isSecretInput
            noMessage
            {...register("live_public", {
              required: "New Password is required",
            })}
          />

          <div>
            <Input
              label="Sandbox secret key"
              placeholder=""
              type={testSecretShown ? "text" : "password"}
              error={errors.test_secret?.message}
              disabled
              isSecretInput
              rightComponent={
                <ApiKeyInputActions
                  secretShown={testSecretShown}
                  copySecret={() => copySecret(testSecret)}
                  hideSecret={() => setTestSecretShown(false)}
                  showSecret={() => setIsEnterPassword("test-secret")}
                />
              }
              {...register("test_secret")}
            />
          </div>

          <Input
            label="Sandbox public key"
            placeholder=""
            type="text"
            error={errors.test_public?.message}
            disabled
            isSecretInput
            {...register("test_public")}
          />
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <H2>Webhook</H2>
            {/* <div className="flex items-center gap-3 text-sm text-paraGray">
              <Switch enabled={isOn} onChange={setIsOn} />
              <p>Enabled</p>
            </div> */}
          </div>

          <Input
            label="Webhook URL"
            placeholder="https://www.example.io"
            // type="url"
            error={errors.testWebhookUrl?.message}
            // disabled
            isSecretInput
            {...register("testWebhookUrl", {
              pattern: {
                value:
                  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/,
                message: "Invalid Webhook url",
              },
            })}
          />
        </section>

        <PrimaryButton
          loading={isUpdatePreferencesPending}
          size="medium"
          className="w-full"
          type="submit"
        >
          Save changes
        </PrimaryButton>
      </form>
    </>
  );
};

export default ApiKeysForm;

const ApiKeyInputActions = ({
  secretShown,
  showSecret,
  hideSecret,
  copySecret,
}: {
  secretShown: boolean;
  showSecret: () => void;
  hideSecret: () => void;
  copySecret: () => void;
}) => (
  <div className="flex items-center gap-3 pr-5">
    {secretShown ? (
      <div
        role="button"
        className="flex items-center gap-1 text-sm text-header/50"
        onClick={hideSecret}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.55">
            <path
              d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z"
              fill="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z"
              fill="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        <p className="inline">Hide</p>
      </div>
    ) : (
      <div
        role="button"
        className="flex items-center gap-1 text-sm text-header/50"
        onClick={showSecret}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.55" clip-path="url(#clip0_2047_16543)">
            <path
              d="M3.76663 4.9453L1.1608 2.3403L2.33996 1.16113L18.8391 17.6611L17.66 18.8395L14.9016 16.0811C13.436 17.0108 11.7356 17.5031 9.99996 17.5003C5.50663 17.5003 1.7683 14.267 0.984131 10.0003C1.34249 8.05923 2.31882 6.28605 3.76746 4.9453H3.76663ZM12.2975 13.477L11.0775 12.257C10.6108 12.4802 10.0864 12.5532 9.57657 12.466C9.0667 12.3787 8.59647 12.1354 8.23069 11.7696C7.86491 11.4038 7.62161 10.9336 7.53431 10.4237C7.44702 9.91382 7.52003 9.38943 7.7433 8.9228L6.5233 7.7028C5.99306 8.50404 5.75602 9.46391 5.85232 10.4199C5.94862 11.3758 6.37234 12.2691 7.05173 12.9485C7.73112 13.6279 8.62443 14.0516 9.58039 14.1479C10.5364 14.2442 11.4962 14.0072 12.2975 13.477ZM6.64496 3.13363C7.68413 2.7253 8.81663 2.5003 9.99996 2.5003C14.4933 2.5003 18.2316 5.73363 19.0158 10.0003C18.7605 11.3884 18.1865 12.6983 17.3391 13.827L14.1225 10.6103C14.218 9.96664 14.1615 9.30956 13.9574 8.69168C13.7533 8.0738 13.4074 7.51231 12.9472 7.05219C12.4871 6.59207 11.9256 6.24611 11.3078 6.04203C10.6899 5.83795 10.0328 5.78142 9.38913 5.87697L6.64496 3.13447V3.13363Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_2047_16543">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className="inline">Show</p>
      </div>
    )}

    <div
      role="button"
      className="flex items-center gap-1 text-sm text-header/50"
      onClick={copySecret}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.55" clip-path="url(#clip0_2047_16538)">
          <path
            d="M5.83333 5.00033V2.50033C5.83333 2.27931 5.92113 2.06735 6.07741 1.91107C6.23369 1.75479 6.44565 1.66699 6.66667 1.66699H16.6667C16.8877 1.66699 17.0996 1.75479 17.2559 1.91107C17.4122 2.06735 17.5 2.27931 17.5 2.50033V14.167C17.5 14.388 17.4122 14.6 17.2559 14.7562C17.0996 14.9125 16.8877 15.0003 16.6667 15.0003H14.1667V17.5003C14.1667 17.9603 13.7917 18.3337 13.3275 18.3337H3.33917C3.22927 18.3343 3.12033 18.3133 3.0186 18.2717C2.91687 18.2301 2.82436 18.1688 2.74638 18.0914C2.6684 18.014 2.60649 17.9219 2.56421 17.8205C2.52193 17.719 2.50011 17.6102 2.5 17.5003L2.5025 5.83366C2.5025 5.37366 2.8775 5.00033 3.34167 5.00033H5.83333ZM7.5 5.00033H14.1667V13.3337H15.8333V3.33366H7.5V5.00033Z"
            fill="#718096"
          />
        </g>
        <defs>
          <clipPath id="clip0_2047_16538">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <p className="inline">Copy</p>
    </div>
  </div>
);