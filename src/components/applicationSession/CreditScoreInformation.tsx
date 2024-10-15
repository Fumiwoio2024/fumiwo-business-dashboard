import Card from "@components/global/Card";
import { SessionCardTitle } from "./SessionCardTypography";
import Legend from "@components/overviewScreen/Legend";
import { scoreRecommendations } from "@utils/constants";
import { pieArcLabelClasses, PieChart } from "@mui/x-charts";

// const maxCreditScore = 850; // Define the maximum credit score

// const CircularProgressBar = ({
//   score,
//   recommendation,
// }: {
//   score: number;
//   recommendation: string;
// }) => {
//   const progress = Math.round((score / maxCreditScore) * 75); // Calculate progress as a percentage
//   const strokeWidth = 24;
//   const radius = 72; // Radius of the circle (half of 180px minus stroke width)
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (progress / 100) * circumference;

//   // Calculate the position of the dot based on the progress
//   // const angle = (progress / 75) * 2 * Math.PI - Math.PI / 2; // Convert progress to radians
//   // const dotX = 90 + radius * Math.cos(angle); // Calculate x position
//   // const dotY = 90 + radius * Math.sin(angle); // Calculate y position

//   return (
//     <div className="relative h-[180px] w-[180px]">
//       <svg
//         className="transform"
//         width="180"
//         height="180"
//         viewBox="0 0 180 180"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* Background Circle */}
//         <circle
//           className="text-gray-300"
//           strokeWidth={strokeWidth}
//           stroke="currentColor"
//           fill="transparent"
//           r={radius}
//           cx="90"
//           cy="90"
//         />
//         {/* Progress Circle */}
//         <circle
//           className="progress-circle"
//           strokeWidth={strokeWidth}
//           strokeDasharray={circumference}
//           strokeDashoffset={offset}
//           strokeLinecap="round"
//           stroke="url(#gradient)"
//           fill="transparent"
//           r={radius}
//           cx="90"
//           cy="90"
//         />
//         <defs>
//           <linearGradient
//             id="gradient"
//             x1="0%"
//             y1="0%"
//             x2="100%"
//             y2="100%"
//             gradientUnits="userSpaceOnUse"
//             gradientTransform="rotate(5)"
//           >
//             <stop offset="30%" stopColor="#33933A" />
//             <stop offset="40%" stopColor="#7ED957" />
//             <stop offset="50%" stopColor="#F6F502" />
//             <stop offset="60%" stopColor="#f79408cc" />
//             <stop offset="70%" stopColor="#FF0000" />
//           </linearGradient>
//         </defs>

//         {/* Small White Dot at the Tip of the Progress Bar */}
//         {/* <circle
//           cx={dotX} // X position based on the progress
//           cy={dotY} // Y position based on the progress
//           r="4" // Radius of the dot
//           fill="white" // White color
//           className="transition-opacity duration-300" // Optional transition for effects
//         /> */}
//       </svg>
//       <div
//         style={{ color: getRecommendedColor(recommendation) }}
//         className={`absolute inset-0 flex flex-col items-center justify-center text-3xl font-semibold text-secondaryButton`}
//       >
//         <p>{score}</p>
//         <p className="text-xs">Credit score</p>
//       </div>
//     </div>
//   );
// };

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
  const pieData = [
    {
      label: "",
      id: "",
      color: "#71809620",
      value: 25,
    },
    ...scoreRecommendations.map((item) => ({
      ...item,
      color:
        creditScoreData && creditScoreData.creditScore >= item.lowerLimit
          ? item.color
          : "#71809620",
      value: 15,
    })),
  ];

  return (
    <Card className="space-y-8">
      <SessionCardTitle
        title="Credit score"
        description="Borrower’s overall credit rating"
      />
      {creditScoreData && (
        <div className="flex items-center justify-center gap-6">
          <div className="relative h-fit w-fit">
            <PieChart
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              height={180}
              width={180}
              tooltip={{ trigger: "none" }}
              slotProps={{
                legend: { hidden: true },
              }}
              series={[
                {
                  data: pieData,
                  innerRadius: 75,
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "Poppins",
                },
              }}
            />
            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-center">
              <div
                style={{
                  color: scoreRecommendations.find(
                    (item) =>
                      item.lowerLimit <= creditScoreData.creditScore &&
                      item.upperLimit >= creditScoreData.creditScore,
                  )?.color,
                }}
                className={`text-3xl font-semibold text-secondaryButton`}
              >
                <p>{creditScoreData.creditScore}</p>
                <p className="text-xs">Credit score</p>
              </div>
            </div>
            {/* {result && result.length > 0 && ()} */}
          </div>
          <Legend useLegendColor vertical data={scoreRecommendations} />
        </div>
      )}
    </Card>
  );
};

export default CreditScoreInformation;
