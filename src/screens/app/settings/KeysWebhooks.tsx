import ApiKeysForm from "@components/forms/ApiKeysForm";
import Card from "@components/global/Card";
import {
  useQBusinessProfile,
  useQProfile,
} from "@hooks/api/queries/profile.queries";
const KeysWebhooks = () => {
  const { result: businessProfile } = useQBusinessProfile();
  const { result: userProfile } = useQProfile();

  return (
    <>
      <article className="px-6 py-8">
        <Card className="w-2/3">
          {(businessProfile || userProfile) && (
            <ApiKeysForm
              key={JSON.stringify({ ...userProfile, ...businessProfile })}
              business={businessProfile}
            />
          )}
        </Card>
      </article>
    </>
  );
};

export default KeysWebhooks;
