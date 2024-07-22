import { PrimaryButton, SecondaryButton } from "@components/global/Buttons";
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
    <Card className="text-graySubtext flex-1 rounded-2xl border">
      <H5>{title}</H5>
      <Divider height={12} />
      <div>
        <span className="text-3xl text-[28px] font-semibold text-primaryGreen">
          {price}
        </span>{" "}
        {interval && <span className="">/{interval}</span>}
      </div>
      <Divider height={28} />
      <P small className="text-graySubtext">
        {description}
      </P>

      <div className="mt-4 space-y-4 border-t py-8">
        {pros.map((pro) => (
          <div className="flex items-center gap-3">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.900292 6.09574L5.99523 6.09574L5.99523 1.0272C5.99163 0.911635 6.0114 0.796534 6.05336 0.688799C6.09532 0.581064 6.1586 0.482911 6.23942 0.400228C6.41445 0.225195 6.65185 0.126862 6.89939 0.126862C7.14692 0.126862 7.38432 0.225194 7.55935 0.400228C7.6418 0.479603 7.70717 0.574989 7.75143 0.680534C7.79569 0.786078 7.81791 0.899554 7.81674 1.014L7.78374 6.11554H12.9183C13.1335 6.11318 13.3413 6.1935 13.499 6.33993C13.6741 6.51496 13.7724 6.75236 13.7724 6.99989C13.7724 7.24743 13.6741 7.48482 13.499 7.65986C13.4184 7.74746 13.3205 7.81734 13.2114 7.86505C13.1023 7.91277 12.9845 7.93729 12.8655 7.93704L7.80354 7.90405L7.80354 12.9858C7.80537 13.0991 7.78474 13.2117 7.74283 13.3171C7.70092 13.4224 7.63856 13.5184 7.55935 13.5996C7.38432 13.7746 7.14692 13.8729 6.89939 13.8729C6.65185 13.8729 6.41445 13.7746 6.23942 13.5996C6.15697 13.5202 6.09161 13.4248 6.04734 13.3193C6.00308 13.2137 5.98086 13.1002 5.98203 12.9858L6.01503 7.88425L0.880492 7.88425C0.665306 7.88661 0.457422 7.80629 0.299722 7.65986C0.124688 7.48482 0.0263551 7.24743 0.0263551 6.99989C0.0263551 6.75236 0.124688 6.51496 0.299722 6.33993C0.460094 6.18351 0.675903 6.09574 0.900292 6.09574Z"
                fill="#011D7B"
              />
            </svg>

            <P>{pro}</P>
          </div>
        ))}
      </div>

      {interval ? (
        <SecondaryButton onClick={action} className="w-full">
          Subscribe
        </SecondaryButton>
      ) : (
        <PrimaryButton onClick={action} className="w-full">
          Contact sales
        </PrimaryButton>
      )}

      {extraInfo && (
        <P
          small
          className="text-graySubtext mt-3.5 text-center text-xs font-normal"
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
  "5% fee per transaction",
];

const PaymentDefaultScore = [
  "Lower cost of risk",
  "Higher predictive power",
  "Detect high-risk applicants",
  "Score every applicant",
  "Accelerate approval times",
  "Unlock new markets",
  "More reliable metrics",
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
    <Card className="flex-1 pb-20">
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
          price={"Pay per use"}
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
