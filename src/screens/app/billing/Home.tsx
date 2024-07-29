import Banner from "@components/global/Banner";
import { PrimaryButton, SecondaryButton } from "@components/global/Buttons";
import Card from "@components/global/Card";
import Divider from "@components/global/Divider";
import { H4, H6 } from "@components/global/Typography";
import mastercardLogo from "@images/mastercard-logo.png";
import Tables from "@components/global/Tables.jsx";
import { createColumnHelper } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import moment from "moment";

const BillingHome = () => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor((row) => "user", {
      id: "Name of user",
      cell: (info) => {
        const value = info.row.original;
        const name = value?.username;
        const userId = value?.user_id;

        return (
          <Link to={`/dashboard/customers/${userId}/profile`}>
            <div className="text-primary-blue cursor-pointer font-normal capitalize hover:underline">
              <span className="text-sm">{name}</span>
            </div>
          </Link>
        );
      },
    }),

    columnHelper.accessor((row) => row.description, {
      id: "description",
      cell: (info) => (
        <span className="text-renaissance-black text-sm">
          {info.getValue()}
        </span>
      ),
    }),

    columnHelper.accessor((row) => "date", {
      id: "date",
      cell: (info) => {
        const value = info.row.original;

        return (
          <div className="text-renaissance-black capitalize">
            <span className="block text-sm">
              {moment(value?.created_at).format("DD MMM yyyy")}
            </span>
            <span className="text-gray-2 text-[10px]">
              {moment(value?.created_at).format("hh:mm Z")}
            </span>
          </div>
        );
      },
    }),
  ];

  return (
    <div className="w-full p-8">
      <div className="grid grid-cols-10 items-stretch gap-7 text-paraGray">
        <section className="col-span-7 space-y-4">
          <div className="flex h-12 items-center justify-between">
            <H4>Current Product Summary</H4>
            <PrimaryButton small>Upgrade</PrimaryButton>
          </div>

          <Card className="h-4/5 !p-6">
            <div className="grid grid-cols-3 justify-between gap-28">
              <div className="text-xs text-paraGray">
                <H6>PRODUCT NAME</H6>
                <p className="text-lg font-medium text-textHeader">
                  Payment default score
                </p>
              </div>
              <div className="text-xs text-paraGray">
                <H6>BILLING CYCLE</H6>
                <p className="text-lg font-medium text-textHeader">Monthly</p>
              </div>
              <div className="text-xs text-paraGray">
                <H6>COST</H6>
                <p className="text-lg font-medium text-textHeader">$5698</p>
              </div>
            </div>
            <Divider height={24} />
            <div className="space-y-1.5">
              <H6>NEXT PAYMENT</H6>
              <Banner text="Your next bill of $1,530.00 is scheduled for Dec 28, 2023, your default payment method below will be charged." />
            </div>
          </Card>
        </section>

        <section className="col-span-3 space-y-4">
          <div className="flex h-12 items-center">
            <H4>Payment Method</H4>
          </div>

          <Card className="space-y-5 !p-6">
            <div className="flex gap-4">
              <div className="">
                <img
                  src={mastercardLogo}
                  alt="mastercard logo"
                  className="max-w-[32px]"
                />
              </div>
              <div className="space-y-3">
                <h6 className="text-lg font-medium">Mastercard</h6>
                <p>**** **** **** 2343</p>
                <p>Expires on 03/2027 </p>
                <p className="flex items-center gap-1.5">
                  <span>
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.75 15.875H5.25C3 15.875 1.5 14.75 1.5 12.125V6.875C1.5 4.25 3 3.125 5.25 3.125H12.75C15 3.125 16.5 4.25 16.5 6.875V12.125C16.5 14.75 15 15.875 12.75 15.875Z"
                        stroke="#718096"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.75 7.25L10.4025 9.125C9.63 9.74 8.3625 9.74 7.59 9.125L5.25 7.25"
                        stroke="#718096"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span>billing@email.com</span>
                </p>
              </div>
            </div>
            <SecondaryButton small className="ml-auto block w-fit">
              Change
            </SecondaryButton>
          </Card>
        </section>
      </div>

      <div>
        <Tables />
      </div>
    </div>
  );
};

export default BillingHome;
