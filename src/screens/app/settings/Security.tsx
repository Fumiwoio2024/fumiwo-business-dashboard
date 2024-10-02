import Card from "@components/global/Card";
import { H2, P } from "@components/global/Typography";
import { useState } from "react";
import ChangeAppPassword from "@components/forms/ChangeAppPassword";
import Switch from "@components/global/Switch";
import ModalContainer from "@components/global/ModalContainer";
import OTPForm from "@components/forms/OTPForm";
import { useQueryClient } from "@tanstack/react-query";
import { useMToggleMfa } from "@hooks/api/mutations/app/profile.mutation";
import {
  useQBusinessProfile,
  useQMFASecret,
} from "@hooks/api/queries/profile.queries";
import { PrimaryButton } from "@components/global/Buttons";

const QRCode = ({ nextStep }: { nextStep: () => void }) => {
  const { result } = useQMFASecret();
  return result?.qrCode ? (
    <div className="w-[450px] text-center">
      <img
        src={result?.qrCode}
        alt="multi factor authentication qr code"
        className="inline h-96 w-96"
      />

      <P className="mt-3">
        Please scan the QR code below using any authenticator app. Once you have
        the one-time password, you may hit proceed.
      </P>
      <PrimaryButton size="medium" className="mt-5 px-12" onClick={nextStep}>
        Proceed
      </PrimaryButton>
    </div>
  ) : (
    <div className="h-52 w-96">
      An error occured, pls refresh browser and try again{" "}
    </div>
  );
};

const Security = () => {
  const [step, setStep] = useState<"qr" | "otp" | null>();
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  const { result, isLoading } = useQBusinessProfile();
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
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["profile-me"] });
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
        {step === "qr" && <QRCode nextStep={() => setStep("otp")} />}
        {step === "otp" && (
          <div className="w-[400px]">
            <OTPForm
              canResend={false}
              maximumLength={6}
              key={`${isOtpModalOpen}`}
              submitFunction={(code) => submit(code)}
            />
          </div>
        )}
      </ModalContainer>

      <article className="px-6 py-8">
        <Card className="w-2/3 space-y-8">
          <div className="space-y-6">
            <H2>2 Factor Authentication (2FA)</H2>
            <div className="flex items-center justify-between">
              <p className="text-sm text-paraGray">Enabled</p>
              {result && (
                <button
                  role="button"
                  // className="border bg-red-200"
                  onClick={() => {
                    setIsOtpModalOpen(true);
                    if (result.mfa.enabled) {
                      setStep("otp");
                    } else {
                      setStep("qr");
                    }
                  }}
                >
                  <Switch enabled={result.mfa.enabled} />
                </button>
              )}
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
