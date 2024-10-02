import Card from "@components/global/Card";
import { SessionCardTitle } from "./SessionCardTypography";
import Legend from "@components/overviewScreen/Legend";
import { scoreRecommendations } from "@utils/constants";
import { getRecommendedColor } from "@helpers/functions/formatRecommendation";

const maxCreditScore = 850; // Define the maximum credit score

const CircularProgressBar = ({
  score,
  recommendation,
}: {
  score: number;
  recommendation: string;
}) => {
  const progress = Math.round((score / maxCreditScore) * 75); // Calculate progress as a percentage
  const strokeWidth = 24;
  const radius = 72; // Radius of the circle (half of 180px minus stroke width)
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  // Calculate the position of the dot based on the progress
  // const angle = (progress / 75) * 2 * Math.PI - Math.PI / 2; // Convert progress to radians
  // const dotX = 90 + radius * Math.cos(angle); // Calculate x position
  // const dotY = 90 + radius * Math.sin(angle); // Calculate y position

  return (
    <div className="relative h-[180px] w-[180px]">
      <svg
        className="transform"
        width="180"
        height="180"
        viewBox="0 0 180 180"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle
          className="text-gray-300"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="90"
          cy="90"
        />
        {/* Progress Circle */}
        <circle
          className="progress-circle"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="url(#gradient)"
          fill="transparent"
          r={radius}
          cx="90"
          cy="90"
        />
        <defs>
          <linearGradient
            id="gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(5)"
          >
            <stop offset="30%" stopColor="#33933A" />
            <stop offset="40%" stopColor="#7ED957" />
            <stop offset="50%" stopColor="#F6F502" />
            <stop offset="60%" stopColor="#f79408cc" />
            <stop offset="70%" stopColor="#FF0000" />
          </linearGradient>
        </defs>

        {/* Small White Dot at the Tip of the Progress Bar */}
        {/* <circle
          cx={dotX} // X position based on the progress
          cy={dotY} // Y position based on the progress
          r="4" // Radius of the dot
          fill="white" // White color
          className="transition-opacity duration-300" // Optional transition for effects
        /> */}
      </svg>
      <div
        style={{ color: getRecommendedColor(recommendation) }}
        className={`absolute inset-0 flex flex-col items-center justify-center text-3xl font-semibold text-secondaryButton`}
      >
        <p>{score}</p>
        <p className="text-xs">Credit score</p>
      </div>
    </div>
  );
};

const CreditScoreInformation = ({
  creditScoreData,
}: {
  creditScoreData:
    | {
        creditScoreRating: string;
        _id: string;
        creditScore: number;
        recommendation: string;
        lastModifiedAt: string;
      }
    | undefined;
}) => {
  // return <></>;
  // if (!creditScoreData)
  // const pieData = [
  //   {
  //     id: 1,
  //     value: Number(creditScoreData.creditScore),
  //     label: checkRecommendType(
  //       creditScoreData?.recommendation,
  //       "Review",
  //       "Rejected",
  //       "Approved",
  //     ),
  //     color: checkRecommendType(
  //       creditScoreData.recommendation,
  //       "#FCBE2D",
  //       "#FF0000",
  //       "#0BE781",
  //     ),
  //   },
  // ];

  return (
    <Card className="space-y-8">
      <SessionCardTitle
        title="Credit score"
        description="Borrower’s overall credit rating"
      />
      {creditScoreData && (
        <div className="flex items-center justify-center gap-6">
          <CircularProgressBar
            score={creditScoreData.creditScore || 0}
            recommendation={creditScoreData.recommendation}
          />
          <Legend vertical data={scoreRecommendations} />
        </div>
      )}
    </Card>
  );
};

export default CreditScoreInformation;
