import { SessionCardTitle } from "@components/applicationSession/SessionCardTypography";
import { OverviewButton } from "@components/global/Buttons";
import Card from "@components/global/Card";

const Map = () => {
  return (
    <Card>
      <div className="mb-8 flex justify-between">
        <SessionCardTitle
          title="Geographical distribution"
          description="Borrowers’ & repayment information based on location"
        />
        <OverviewButton>
          <div className="flex items-center">
            This week
            <span className="ml-2.5 text-paraGray/70">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.96004 4.97461L6.70004 8.23461C6.31504 8.61961 5.68504 8.61961 5.30004 8.23461L2.04004 4.97461"
                  stroke="#718096"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </OverviewButton>
      </div>
      <div>
        <iframe src="http://maps.google.com/maps?q=12.927923,77.627108&z=15&output=embed"></iframe>
      </div>
    </Card>
  );
};

export default Map;
