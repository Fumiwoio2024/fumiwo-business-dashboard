import Card from "@components/global/Card";
import { SessionCardTitle } from "./SessionCardTypography";

const CreditScoreInformation = () => {
  return (
    <Card className="space-y-8">
      <SessionCardTitle
        title="Credit score"
        description="Borrower’s overall credit rating"
      />
    </Card>
  );
};

export default CreditScoreInformation;
