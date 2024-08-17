import { useState } from "react";
import ApiKeysForm from "@components/forms/ApiKeysForm";
import Card from "@components/global/Card";
import Switch from "@components/global/Switch";
import { H2 } from "@components/global/Typography";
import WebhookForm from "@components/forms/WebhookForm";

const KeysWebhooks = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <article className="px-6 py-8">
      <Card className="w-2/3 space-y-8">
        <section className="space-y-6">
          <H2>API Keys</H2>
          <ApiKeysForm />
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <H2>Webhook & Callback</H2>
            <div className="flex items-center gap-3 text-sm text-paraGray">
              <Switch enabled={isOn} onChange={setIsOn} />
              <p>Enabled</p>
            </div>
          </div>

          <WebhookForm />
        </section>
      </Card>
    </article>
  );
};

export default KeysWebhooks;
