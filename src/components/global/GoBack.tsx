import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <Link
      to={".."}
      className="flex w-fit items-center gap-3 text-graySubtext transition active:opacity-50"
    >
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.2499 15.4405L6.35988 10.5505C5.78238 9.97305 5.78238 9.02805 6.35988 8.45055L11.2499 3.56055"
          stroke="#718096"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p>Back</p>
    </Link>
  );
};

export default GoBack;
