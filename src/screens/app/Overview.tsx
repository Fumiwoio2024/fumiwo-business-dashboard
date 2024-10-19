import Metrics from "@components/overviewScreen/Metrics";
import RecentSessionsTable from "@components/overviewScreen/RecentSessionsTable";
import SummaryCards from "@components/overviewScreen/SummaryCards";
import { useEffect } from "react";
function downloadImage(imageUrl: string, fileName: string) {
  // Create a new anchor element
  const a = document.createElement("a");

  // Set the href attribute to the image URL
  a.href = imageUrl;

  // Set the download attribute to suggest a file name for the download
  a.download = fileName;

  // Append the anchor to the body (not required visually)
  document.body.appendChild(a);

  // Trigger a click event on the anchor
  a.click();

  // Remove the anchor after downloading
  document.body.removeChild(a);
}
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
