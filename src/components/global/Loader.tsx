import { SVGProps } from "react";

const Loader = ({
  size = 24,
  ...props
}: { size?: number } & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={size}
      height={size}
      className="mx-3 h-5 w-5 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || "white"}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export default Loader;




    //          <svg
    //   width={size}
    //   height={size}
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="animate-spin"
    //   {...props}
    // >
    //   <path
    //     fill-rule="evenodd"
    //     clip-rule="evenodd"
    //     d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
    //     fill="url(#paint0_angular_2797_26956)"
    //   />
    //   <path
    //     fill-rule="evenodd"
    //     clip-rule="evenodd"
    //     d="M22.7816 9.60013C23.3294 9.52946 23.8307 9.91621 23.9014 10.464C23.9671 10.9731 24 11.486 24 11.9994C24 12.5517 23.5523 12.9994 23 12.9994C22.4477 12.9994 22 12.5517 22 11.9994C22 11.5716 21.9726 11.1442 21.9178 10.7199C21.8471 10.1721 22.2339 9.6708 22.7816 9.60013Z"
    //     fill="currentColor"
    //   />
    //   <defs>
    //     <radialGradient
    //       id="paint0_angular_2797_26956"
    //       cx="0"
    //       cy="0"
    //       r="1"
    //       gradientUnits="userSpaceOnUse"
    //       gradientTransform="translate(12 12) scale(12)"
    //     >
    //       <stop stop-color="currentColor" stop-opacity="0" />
    //       <stop offset="0.0001" stop-color="currentColor" stop-opacity="0" />
    //       <stop offset="1" stop-color="currentColor" />
    //     </radialGradient>
    //   </defs>
    // </svg>