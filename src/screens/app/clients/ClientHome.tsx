import { useQClients } from "@/hooks/api/queries/client.queries";
import { PrimaryButton } from "@components/global/Buttons";
import { SummaryCard } from "@components/global/Card";
import Input from "@components/global/Input";
import NewDropDown from "@components/global/NewDropDown";
import Tables from "@components/global/Tables";
import { useQBusinessStats } from "@hooks/api/queries/analytics.queries";
import { useDebounce } from "@hooks/custom/useDebounce";
import { capitalize } from "@mui/material";
import { createColumnHelper } from "@tanstack/react-table";
import { TClient } from "@type/global.types";
import moment from "moment";
import { ChangeEvent, useState } from "react";

const sortOptions = [
  {
    id: "createdAtAsc",
    title: "Application date (Most recent first)",
    type: -1,
  },
  { id: "createdAt", title: "Application date (Most recent last)", type: 1 },
  { id: "dcsAsc", title: "Current credit score (Highest first)", type: -1 },
  { id: "dcs", title: "Current credit score (Lowest first)", type: 1 },
  {
    id: "phoneDataCountAsc",
    title: "No. of applications (Highest first)",
    type: -1,
  },
  {
    id: "phoneDataCount",
    title: "No. of applications (Lowest first)",
    type: 1,
  },
];


const ClientHome = () => {
  const [searchText, setSearchText] = useState("");
  const [limitPerPage, setLimitPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSortType, setSelectedSortType] = useState<
    (typeof sortOptions)[0]
  >(sortOptions[0]);
  const debouncedSearchText = useDebounce(searchText);

  const columnHelper = createColumnHelper<TClient>();
  const { result, pagination, isLoading } = useQClients({
    page: currentPage,
    limit: limitPerPage,
    externalClientId: debouncedSearchText,
    sort: encodeURIComponent(
      JSON.stringify({
        order: selectedSortType.type,
        item: selectedSortType.id.replace("Asc", ""),
      }),
    ),
  });
  const { result: businessStats, isLoading: isLoadingStats } =
    useQBusinessStats();

  const columns = [
    columnHelper.accessor("externalReferenceId", {
      header: "Client ext ref id",
    }),
    columnHelper.accessor("phones", {
      header: "No. of applications",
      cell: (info) => info.getValue().length ?? "N/A",
    }),
    columnHelper.accessor("lastModifiedAt", {
      header: "Last application date",
      cell: (info) =>
        info.getValue()
          ? moment(new Date(info.getValue())).format("MMM DD, YYYY - hh:mm A")
          : "",
    }),
    columnHelper.accessor("digitalCreditScoreEvolution", {
      header: "Credit score evolution",
      cell: (info) => capitalize(info.getValue().replace("_", " ")) || "N/A",
    }),
    columnHelper.accessor("latestDigitalCreditInfo.creditScore", {
      header: "Latest credit score",
      cell: (info) => info.getValue() || "N/A",
    }),
  ];

  return (
    <div className="w-full space-y-8 p-8">
      <section className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          Icon={
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0001 7.66C17.9401 7.65 17.8701 7.65 17.8101 7.66C16.4301 7.61 15.3301 6.48 15.3301 5.08C15.3301 3.65 16.4801 2.5 17.9101 2.5C19.3401 2.5 20.4901 3.66 20.4901 5.08C20.4801 6.48 19.3801 7.61 18.0001 7.66Z"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.9699 14.9402C18.3399 15.1702 19.8499 14.9302 20.9099 14.2202C22.3199 13.2802 22.3199 11.7402 20.9099 10.8002C19.8399 10.0902 18.3099 9.85016 16.9399 10.0902"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.96998 7.66C6.02998 7.65 6.09998 7.65 6.15998 7.66C7.53998 7.61 8.63998 6.48 8.63998 5.08C8.63998 3.65 7.48998 2.5 6.05998 2.5C4.62998 2.5 3.47998 3.66 3.47998 5.08C3.48998 6.48 4.58998 7.61 5.96998 7.66Z"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.99994 14.9402C5.62994 15.1702 4.11994 14.9302 3.05994 14.2202C1.64994 13.2802 1.64994 11.7402 3.05994 10.8002C4.12994 10.0902 5.65994 9.85016 7.02994 10.0902"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0001 15.1307C11.9401 15.1207 11.8701 15.1207 11.8101 15.1307C10.4301 15.0807 9.33008 13.9507 9.33008 12.5507C9.33008 11.1207 10.4801 9.9707 11.9101 9.9707C13.3401 9.9707 14.4901 11.1307 14.4901 12.5507C14.4801 13.9507 13.3801 15.0907 12.0001 15.1307Z"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.09021 18.2813C7.68021 19.2213 7.68021 20.7613 9.09021 21.7013C10.6902 22.7713 13.3102 22.7713 14.9102 21.7013C16.3202 20.7613 16.3202 19.2213 14.9102 18.2813C13.3202 17.2213 10.6902 17.2213 9.09021 18.2813Z"
                stroke="#011D7B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          isLoading={isLoadingStats}
          title="Total Clients"
          percentage={businessStats?.percentageChange.totalClients.change}
          direction={businessStats?.percentageChange.totalClients.direction}
          value={businessStats?.totalClients ?? "N/A"}
        />
        <SummaryCard
          Icon={
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 7.54V17.46C20 18.98 19.86 20.06 19.5 20.83C19.5 20.84 19.49 20.86 19.48 20.87C19.26 21.15 18.97 21.29 18.63 21.29C18.1 21.29 17.46 20.94 16.77 20.2C15.95 19.32 14.69 19.39 13.97 20.35L12.96 21.69C12.56 22.23 12.03 22.5 11.5 22.5C10.97 22.5 10.44 22.23 10.04 21.69L9.02002 20.34C8.31002 19.39 7.05999 19.32 6.23999 20.19L6.22998 20.2C5.09998 21.41 4.10002 21.59 3.52002 20.87C3.51002 20.86 3.5 20.84 3.5 20.83C3.14 20.06 3 18.98 3 17.46V7.54C3 6.02 3.14 4.94 3.5 4.17C3.5 4.16 3.50002 4.15 3.52002 4.14C4.09002 3.41 5.09998 3.59 6.22998 4.8L6.23999 4.81C7.05999 5.68 8.31002 5.61 9.02002 4.66L10.04 3.31C10.44 2.77 10.97 2.5 11.5 2.5C12.03 2.5 12.56 2.77 12.96 3.31L13.97 4.65C14.69 5.61 15.95 5.68 16.77 4.8C17.46 4.06 18.1 3.71 18.63 3.71C18.97 3.71 19.26 3.86 19.48 4.14C19.5 4.15 19.5 4.16 19.5 4.17C19.86 4.94 20 6.02 20 7.54Z"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 10.75H16"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 14.25H14"
                stroke="#62EAE1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          isLoading={isLoadingStats}
          percentage={businessStats?.percentageChange.totalPhoneData.change}
          direction={businessStats?.percentageChange.totalPhoneData.direction}
          title="Total assesed appl"
          value={businessStats?.totalPhoneData ?? "N/A"}
        />
        <SummaryCard
          Icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.6 20H14.4C18.4 20 20 18.4 20 14.4V9.6C20 5.6 18.4 4 14.4 4H9.6C5.6 4 4 5.6 4 9.6V14.4C4 18.4 5.6 20 9.6 20Z"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 17H13.5C16 17 17 16 17 13.5V10.5C17 8 16 7 13.5 7H10.5C8 7 7 8 7 10.5V13.5C7 16 8 17 10.5 17Z"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00977 4V2"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 4V2"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 4V2"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 8H22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 12H22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 16H22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 20V22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0098 20V22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00977 20V22"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 8H4"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 12H4"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 16H4"
                stroke="#0067FB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          isLoading={isLoadingStats}
          title="Avg credit score"
          value={
            typeof businessStats?.averageCreditScore === "number"
              ? Math.round(businessStats?.averageCreditScore)
              : "N/A"
          }
        />
        <SummaryCard
          Icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.6 20H14.4C18.4 20 20 18.4 20 14.4V9.6C20 5.6 18.4 4 14.4 4H9.6C5.6 4 4 5.6 4 9.6V14.4C4 18.4 5.6 20 9.6 20Z"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 17H13.5C16 17 17 16 17 13.5V10.5C17 8 16 7 13.5 7H10.5C8 7 7 8 7 10.5V13.5C7 16 8 17 10.5 17Z"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00977 4V2"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 4V2"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 4V2"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 8H22"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 12H22"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 16H22"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 20V22"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0098 20V22"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00977 20V22"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 8H4"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 12H4"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 16H4"
                stroke="#FF9066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          isLoading={isLoadingStats}
          title="Highest credit score"
          value={businessStats?.highestCreditScore ?? "N/A"}
        />
      </section>

      <section className="flex items-center justify-between">
        <div className="flex max-w-md items-center gap-4">
          <Input
            isSearch
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchText(e.target.value)
            }
            placeholder="Search by client id"
          />

          <div className="flex items-center gap-1 self-stretch text-paraGray">
            <NewDropDown
              options={sortOptions}
              selectedOption={selectedSortType}
              setSelectedOption={(option) => setSelectedSortType(option)}
            >
              <div className="flex items-center gap-1 px-3">
                <p>Sort</p>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4498 6.09375L8.3748 10.1688C7.89355 10.65 7.10605 10.65 6.6248 10.1688L2.5498 6.09375"
                    stroke="#718096"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </NewDropDown>

            {/* <svg
              width="1"
              viewBox="0 0 1 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499998"
                y2="38"
                stroke="#D4D4D4"
              />
            </svg>

            <NewDropDown
              disabled
              options={sortOptions}
              selectedOption={selectedSortType}
              setSelectedOption={(option) => setSelectedSortType(option)}
            >
              <div className="flex items-center gap-1 px-3">
                <p>Filter</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.3999 2.09961H18.5999C19.6999 2.09961 20.5999 2.99961 20.5999 4.09961V6.29961C20.5999 7.09961 20.0999 8.09961 19.5999 8.59961L15.2999 12.3996C14.6999 12.8996 14.2999 13.8996 14.2999 14.6996V18.9996C14.2999 19.5996 13.8999 20.3996 13.3999 20.6996L11.9999 21.5996C10.6999 22.3996 8.8999 21.4996 8.8999 19.8996V14.5996C8.8999 13.8996 8.4999 12.9996 8.0999 12.4996L4.2999 8.49961C3.7999 7.99961 3.3999 7.09961 3.3999 6.49961V4.19961C3.3999 2.99961 4.2999 2.09961 5.3999 2.09961Z"
                    stroke="#718096"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.93 2.09961L6 9.99961"
                    stroke="#718096"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </NewDropDown> */}
          </div>
        </div>
        <PrimaryButton size="medium" disabled={result?.length === 0}>
          Export CSV
        </PrimaryButton>
      </section>

      <section>
        <div className="">
          <Tables
            isNavigateRow
            columns={columns}
            data={result?.slice(0, 10) || []}
            loading={isLoading}
            isPaginated
            limitPerPage={limitPerPage}
            currentPage={pagination?.currentPage || 1}
            setCurrentPage={(page) => setCurrentPage(page)}
            setLimitPerPage={(limit) => setLimitPerPage(limit)}
            totalPage={pagination?.totalPages || 1}
          />
        </div>
      </section>
    </div>
  );
};

export default ClientHome;
