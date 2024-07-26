import { PrimaryButton } from "@components/global/Buttons";
import Card from "@components/global/Card";
import Divider from "@components/global/Divider";
import { H2, H5, P } from "@components/global/Typography";
import { useNavigate } from "react-router-dom";

type TSingleProductProps = {
  title: string;
  price: string;
  interval?: string;
  description: string;
  pros: string[];
  extraInfo?: string;
  action: () => void;
};

const SingleProduct = ({
  title,
  price,
  interval,
  description,
  pros,
  extraInfo,
  action,
}: TSingleProductProps) => {
  return (
    <Card
      className={`flex-1 !rounded-2xl border ${
        interval ? "text-graySubtext" : "text-whit !bg-primaryBlue"
      }`}
    >
      <div className="min-h-[560px]">
        <H5 className={` ${!interval && "text-white"}`}>{title}</H5>
        <Divider height={12} />
        <div>
          <span
            className={`text-3xl text-[28px] font-semibold text-primaryGreen ${!interval && "text-white"}`}
          >
            {price}
          </span>{" "}
          {interval && <span className="">/{interval}</span>}
        </div>
        <Divider height={28} />
        <P small className={`${interval ? "text-graySubtext" : "text-white"}`}>
          {description}
        </P>

        <div className="mt-4 space-y-4 overflow-hidden border-t py-8">
          {pros.map((pro) => (
            <div key={pro} className="flex items-center gap-3">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00033 12.8332C10.2087 12.8332 12.8337 10.2082 12.8337 6.99984C12.8337 3.7915 10.2087 1.1665 7.00033 1.1665C3.79199 1.1665 1.16699 3.7915 1.16699 6.99984C1.16699 10.2082 3.79199 12.8332 7.00033 12.8332Z"
                  fill="#009851"
                  stroke="#011D7B"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.52051 6.99995L6.17134 8.65079L9.47884 5.34912"
                  fill="#009851"
                />
                <path
                  d="M4.52051 6.99995L6.17134 8.65079L9.47884 5.34912"
                  stroke="#011D7B"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <P className={` ${!interval && "text-white"}`}>{pro}</P>
            </div>
          ))}
        </div>
      </div>

      <PrimaryButton onClick={action} className="w-full">
        {interval ? "Subscribe" : "Pay now"}
      </PrimaryButton>

      {extraInfo && (
        <P
          small
          className="mt-3.5 text-center text-xs font-normal !text-graySubtext"
        >
          {extraInfo}
        </P>
      )}
    </Card>
  );
};

const smartphoneInsightPros = [
  "More than 50 data points",
  "360-degree view of consumer",
  "smartphone usage",
  "Prevent fraud",
  "Reduce approval times",
  "Accelerate loan processing",
  // "5% fee per transaction",
];

const PaymentDefaultScore = [
  "Lower cost of risk",
  "Higher predictive power",
  "Detect high-risk applicants",
  "Score every applicant",
  "Accelerate approval times",
  "Unlock new markets",
];

const SelectProduct = () => {
  const navigate = useNavigate();
  function sendEmail(recipient: string) {
    // function sendEmail(recipient:string, subject, body) {
    // // Encode the subject and body to handle special characters and spaces
    // const encodedSubject = encodeURIComponent(subject);
    // const encodedBody = encodeURIComponent(body);

    // Construct the mailto URL
    // const mailtoLink = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;
    const mailtoLink = `mailto:${recipient}`;

    // Open the mailto link
    window.location.href = mailtoLink;
  }

  return (
    <Card className="flex-1 px-6 pb-20">
      <div className="space-y-3">
        <H2>Select a product</H2>
        <P>Complete the following steps to fully get onboarded</P>
      </div>
      <Divider height={24} />

      <div className="flex gap-5">
        <SingleProduct
          title="Smartphone usage insights"
          price={"$20"}
          interval="Month"
          description="Get reliable insights through smartphone usage analysis and get precise data to identify valuable customers."
          pros={smartphoneInsightPros}
          extraInfo=""
          action={() => navigate("/dashboard/settings/save-card")}
        />
        <SingleProduct
          title="Payment default score"
          price={"$20,000 license fee + Pay per use"}
          interval=""
          description="Explore the power of our AI Predictive model and uncover deeper customer insights and probability of customers to default on repayment"
          pros={PaymentDefaultScore}
          extraInfo="This solution requires validation and is not available from day one. 12 months minimum commitment. No hidden fees."
          action={() => sendEmail("mailto:support@fumiwo.io")}
        />
      </div>
    </Card>
  );
};

export default SelectProduct;
