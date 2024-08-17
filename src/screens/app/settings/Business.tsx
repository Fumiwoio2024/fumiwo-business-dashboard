import BusinessSettingForm from "@components/forms/BusinessSettingForm";
import Card from "@components/global/Card";
import { H2 } from "@components/global/Typography";

const Business = () => {
  return (
    <article className="px-6 py-8">
      <Card className="w-1/2 space-y-6">
        <div className="">
          <H2>Business information</H2>
        </div>

        <BusinessSettingForm />
      </Card>
    </article>
  );
};

export default Business;
