import Card from "@components/global/Card";
import { H2 } from "@components/global/Typography";
import { useState } from "react";
import ChangeAppPassword from "@components/forms/ChangeAppPassword";
import Switch from "@components/global/Switch";

const Security = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <article className="px-6 py-8">
      <Card className="w-2/3 space-y-8">
        <div className="space-y-6">
          <H2>2 Factor Authentication (2FA)</H2>
          <div className="flex items-center justify-between">
            <p className="text-sm text-paraGray">Enabled</p>
            <Switch enabled={isOn} onChange={setIsOn} />
          </div>
        </div>

        <div className="space-y-6">
          <H2>Change Password</H2>
          <ChangeAppPassword />
        </div>
      </Card>
    </article>
  );
};

export default Security;
