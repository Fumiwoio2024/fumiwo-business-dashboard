import Card from "@components/global/Card";
import { SessionCardItemName, SessionCardTitle } from "./SessionCardTypography";
import { TClient } from "@type/global.types";
// import { useState } from "react";
const good = (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 18.5C10.1819 18.5 11.3522 18.2672 12.4442 17.8149C13.5361 17.3626 14.5282 16.6997 15.364 15.864C16.1997 15.0282 16.8626 14.0361 17.3149 12.9442C17.7672 11.8522 18 10.6819 18 9.5C18 8.3181 17.7672 7.14778 17.3149 6.05585C16.8626 4.96392 16.1997 3.97177 15.364 3.13604C14.5282 2.30031 13.5361 1.63738 12.4442 1.18508C11.3522 0.732792 10.1819 0.5 9 0.5C6.61305 0.5 4.32387 1.44821 2.63604 3.13604C0.948212 4.82387 0 7.11305 0 9.5C0 11.8869 0.948212 14.1761 2.63604 15.864C4.32387 17.5518 6.61305 18.5 9 18.5ZM8.768 13.14L13.768 7.14L12.232 5.86L7.932 11.019L5.707 8.793L4.293 10.207L7.293 13.207L8.067 13.981L8.768 13.14Z"
      fill="#03DB77"
    />
  </svg>
);

const bad = (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 0.5C4.023 0.5 0 4.523 0 9.5C0 14.477 4.023 18.5 9 18.5C13.977 18.5 18 14.477 18 9.5C18 4.523 13.977 0.5 9 0.5ZM13.5 12.731L12.231 14L9 10.769L5.769 14L4.5 12.731L7.731 9.5L4.5 6.269L5.769 5L9 8.231L12.231 5L13.5 6.269L10.269 9.5L13.5 12.731Z"
      fill="#FF0000"
    />
  </svg>
);

const Permissioninformation = ({
  permissionData,
}: {
  permissionData: TClient["phones"][0]["permissions"] | undefined;
}) => {
  const sliceFigure = permissionData?.length;

  return (
    <Card className="space-y-8 transition">
      <SessionCardTitle
        title="Granted permissions"
        description="Borrower’s consented permissions"
      />
      <div className="space-y-4">
        {permissionData &&
          permissionData.slice(0, sliceFigure).map(({ a, b }) => (
            <div key={a} className="flex justify-between">
              <SessionCardItemName name={a.split(".")[2].replace(/_/g, " ")} />
              {b ? good : bad}
            </div>
          ))}
      </div>
      {/* <button
        onClick={() => setShowAll(!showAll)}
        className="w-full border-t pt-2 text-sm text-paraGray/70"
      >
        {showAll ? "Show less" : "Expand"}
      </button> */}
    </Card>
  );
};

export default Permissioninformation;
