import BusinessSettingForm from "@components/forms/BusinessSettingForm";
import Card from "@components/global/Card";
import { H2 } from "@components/global/Typography";
import { useQBusinessProfile } from "@hooks/api/queries/profile.queries";

const Business = () => {
  const { result } = useQBusinessProfile();

  return (
    <article className="px-6 py-8">
      <Card className="w-1/2 space-y-6">
        <div className="">
          <H2>Business information</H2>
        </div>
        {result && (
          <BusinessSettingForm key={JSON.stringify(result)} user={result} />
        )}
      </Card>
    </article>
  );
};

export default Business;
