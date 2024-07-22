import useChangeRoute from "@/hooks/custom/useChangeRoute";
import Card from "@components/global/Card";
import { H1, P } from "@components/global/Typography";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const statusIcons = {
  success: (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1988_2843)">
        <g clip-path="url(#clip0_1988_2843)">
          <circle cx="13" cy="12" r="10" fill="#22C55E" />
          <circle
            cx="13"
            cy="12"
            r="9.375"
            stroke="#16A34A"
            stroke-opacity="0.25"
            stroke-width="1.25"
          />
        </g>
      </g>
      <path
        d="M18.5917 8.00822C18.5142 7.93011 18.4221 7.86811 18.3205 7.82581C18.219 7.7835 18.11 7.76172 18 7.76172C17.89 7.76172 17.7811 7.7835 17.6796 7.82581C17.578 7.86811 17.4858 7.93011 17.4084 8.00822L11.2 14.2249L8.59171 11.6082C8.51127 11.5305 8.41632 11.4694 8.31227 11.4284C8.20823 11.3874 8.09713 11.3673 7.98531 11.3692C7.87349 11.3712 7.76315 11.3951 7.66058 11.4397C7.55802 11.4843 7.46524 11.5486 7.38754 11.6291C7.30984 11.7095 7.24875 11.8044 7.20774 11.9085C7.16674 12.0125 7.14663 12.1236 7.14856 12.2354C7.1505 12.3473 7.17444 12.4576 7.21902 12.5602C7.2636 12.6627 7.32794 12.7555 7.40837 12.8332L10.6084 16.0332C10.6858 16.1113 10.778 16.1733 10.8796 16.2156C10.9811 16.2579 11.09 16.2797 11.2 16.2797C11.31 16.2797 11.419 16.2579 11.5205 16.2156C11.6221 16.1733 11.7142 16.1113 11.7917 16.0332L18.5917 9.23322C18.6763 9.15518 18.7438 9.06047 18.79 8.95506C18.8361 8.84964 18.86 8.7358 18.86 8.62072C18.86 8.50563 18.8361 8.3918 18.79 8.28638C18.7438 8.18096 18.6763 8.08625 18.5917 8.00822V8.00822Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_1988_2843"
          x="0.5"
          y="0.75"
          width="25"
          height="25"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.25" />
          <feGaussianBlur stdDeviation="1.25" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1988_2843"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1988_2843"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_1988_2843">
          <rect x="3" y="2" width="20" height="20" rx="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  inProgress: (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1988_2631)">
        <g clip-path="url(#clip0_1988_2631)">
          <rect x="3" y="2" width="20" height="20" rx="10" fill="white" />
        </g>
        <rect
          x="4"
          y="3"
          width="18"
          height="18"
          rx="9"
          stroke="#0BE781"
          stroke-width="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1988_2631"
          x="0.5"
          y="0.75"
          width="25"
          height="25"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.25" />
          <feGaussianBlur stdDeviation="1.25" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1988_2631"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1988_2631"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_1988_2631">
          <rect x="3" y="2" width="20" height="20" rx="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  inComplete: (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1988_2637)">
        <g clip-path="url(#clip0_1988_2637)">
          <rect x="3" y="2" width="20" height="20" rx="10" fill="white" />
        </g>
        <rect
          x="3.625"
          y="2.625"
          width="18.75"
          height="18.75"
          rx="9.375"
          stroke="#D5DAE1"
          stroke-width="1.25"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1988_2637"
          x="0.5"
          y="0.75"
          width="25"
          height="25"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.25" />
          <feGaussianBlur stdDeviation="1.25" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1988_2637"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1988_2637"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_1988_2637">
          <rect x="3" y="2" width="20" height="20" rx="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
};

const StatusItem = ({
  className,
  title,
  index,
  link,
}: {
  index: number;
  link: string;
  storageId: string;
  className?: string;
  title?: string;
}) => {
  const [status, setStatus] = useState<keyof typeof statusIcons>("inComplete");
  // type TStatus = keyof typeof statusIcons
  // const storageItem = sessionStorage.getItem(storageId)
  // const status: { status: TStatus } = !storageItem ? { status: 'inComplete' } : JSON.parse(storageItem)

  useChangeRoute((pathname) => {
    // const isActiveIndex = pathname.includes(link) ? index : false;
    if (pathname.includes(link)) {
      setStatus("inProgress");
    } else if (index === 0) {
      setStatus("success");
    } else {
      setStatus("inComplete");
    }
  });

  return (
    <div className="flex items-center border-b border-onboardingBorder/60 pb-4 last:border-none">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full ${className}`}
      >
        {statusIcons[status]}
      </div>
      <P className="!text-base !font-normal">{title}</P>
    </div>
  );
};

const onboardingSteps = [
  {
    title: "Enter your business details",
    storageId: "fmw_onbd_business_form_dt",
    link: "business-details",
  },
  {
    title: "Enter contact person details",
    storageId: "fmw_onbd_contact_form_dt",
    link: "contact-details",
  },
  {
    title: "Select product",
    storageId: "fmw_onbd_product_dt",
    link: "select-product",
  },
];

const OnboardingLayout = () => {
  return (
    <div className="space-y-10 px-9 py-12">
      <div className="space-y-3">
        <H1>Welcome to Fumiwo,</H1>
        <P>Complete the following steps to fully get onboarded</P>
      </div>

      <div className="flex gap-8">
        <Card className="h-fit w-[321px] space-y-5 px-5 pb-3 pt-8">
          {onboardingSteps.map((step, index) => (
            <StatusItem
              key={index}
              index={index}
              link={step.link}
              storageId={step.storageId}
              title={step.title}
            />
          ))}
        </Card>

        <Outlet />
      </div>
    </div>
  );
};

export default OnboardingLayout;
