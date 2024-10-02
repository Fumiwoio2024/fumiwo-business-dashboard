import ApiKeysForm from "@components/forms/ApiKeysForm";
import Card from "@components/global/Card";
import { useQBusinessProfile } from "@hooks/api/queries/profile.queries";
const KeysWebhooks = () => {
  const { result } = useQBusinessProfile();

  return (
    <>
      <article className="px-6 py-8">
        <Card className="w-2/3">
          {result && <ApiKeysForm key={JSON.stringify(result)} user={result} />}
        </Card>
      </article>
    </>
  );
};

export default KeysWebhooks;
