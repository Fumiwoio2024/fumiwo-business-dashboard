import Metrics from "@components/overviewScreen/Metrics";
import RecentSessionsTable from "@components/overviewScreen/RecentSessionsTable";
import SummaryCards from "@components/overviewScreen/SummaryCards";

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
