import ProfileSettingForm from "@components/forms/ProfileSettingForm";
import Card from "@components/global/Card";
import { H2 } from "@components/global/Typography";
import { useQProfile } from "@hooks/api/queries/profile.queries";

const Profile = () => {
  const { result } = useQProfile();
console.log(result);

  return (
    <article className="px-6 py-8">
      <Card className="w-1/2 space-y-6">
        <div className="">
          <H2>Profile information</H2>
        </div>

        {result && (
          <ProfileSettingForm key={JSON.stringify(result)} user={result} />
        )}
      </Card>
    </article>
  );
};

export default Profile;
