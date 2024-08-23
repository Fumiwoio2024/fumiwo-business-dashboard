import ApiKeysForm from "@components/forms/ApiKeysForm";
import Card from "@components/global/Card";
const KeysWebhooks = () => {
  return (
    <>
      <article className="px-6 py-8">
        <Card className="w-2/3">
          <ApiKeysForm />
        </Card>
      </article>
    </>
  );
};

export default KeysWebhooks;
