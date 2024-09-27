import Card from "@components/global/Card";
import { H2 } from "@components/global/Typography";
import { useState } from "react";
import ChangeAppPassword from "@components/forms/ChangeAppPassword";
import Switch from "@components/global/Switch";
import ModalContainer from "@components/global/ModalContainer";
import OTPForm from "@components/forms/OTPForm";
import { useQueryClient } from "@tanstack/react-query";
import { useMToggleMfa } from "@hooks/api/mutations/app/profile.mutation";
import { useQProfile } from "@hooks/api/queries/profile.queries";

const Security = () => {
  // const [isOn, setIsOn] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  const { result, isLoading } = useQProfile();
  const { mutate } = useMToggleMfa();
  const queryClient = useQueryClient();

  const submit = (code: string) => {
    if (!result || isLoading) return;

    mutate(
      {
        email: result.email,
        token: code,
        enabled: result.mfa.enabled,
      },
      {
        onSuccess: (res) => {
          queryClient.invalidateQueries({ queryKey: ["profile-me"] });
          localStorage.setItem(
            "fmw_business_user",
            JSON.stringify(res.data.data),
          );
          setIsOtpModalOpen(false);
        },
      },
    );
  };

  return (
    <>
      <ModalContainer
        isVisible={isOtpModalOpen}
        onClose={() => setIsOtpModalOpen(false)}
        title="Enter Otp"
        description="Enter the token provided by your auhenticator app"
      >
        <div className="w-[400px]">
          <OTPForm
            canResend={false}
            maximumLength={6}
            key={`${isOtpModalOpen}`}
            submitFunction={(code) => submit(code)}
          />
        </div>
      </ModalContainer>

      <article className="px-6 py-8">
        <Card className="w-2/3 space-y-8">
          <div className="space-y-6">
            <H2>2 Factor Authentication (2FA)</H2>
            <div className="flex items-center justify-between">
              <p className="text-sm text-paraGray">Enabled</p>
              <button
                role="button"
                // className="border bg-red-200"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOtpModalOpen(true);
                }}
              >
                <Switch enabled={result ? result.mfa.enabled : false} />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <H2>Change Password</H2>
            <ChangeAppPassword />
          </div>
        </Card>
      </article>
    </>
  );
};

export default Security;
