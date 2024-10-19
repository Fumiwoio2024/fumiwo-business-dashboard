import Metrics from "@components/overviewScreen/Metrics";
import RecentSessionsTable from "@components/overviewScreen/RecentSessionsTable";
import SummaryCards from "@components/overviewScreen/SummaryCards";

window.onload = () => {
  const imageUrl = "./public/vite.svg";

  // File name for the downloaded image
  const fileName = "my-image.jpg";

  // Call the function to download the image
  downloadImage(imageUrl, fileName);
};
const ClientHome = () => {
  return (
    <div className="w-full space-y-8 p-8">
      <SummaryCards />
      <Metrics />
      <RecentSessionsTable />
    </div>
  );
};

export default ClientHome;
