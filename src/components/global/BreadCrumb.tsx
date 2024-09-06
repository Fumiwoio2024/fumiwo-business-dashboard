import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const locationArray: string[] = location.pathname
    .split("/")
    .filter((x) => x)
    .filter((x) => x !== "dashboard");

  return (
    <div className="flex items-center gap-2 text-sm">
      {locationArray.map((item, index) => (
        <Link
          to={`/dashboard/${locationArray.slice(0, index + 1).join("/")}`}
          className={`flex items-center gap-2 ${index === locationArray.length - 1 ? "text-textBlue" : "text-textGray"}`}
          key={index}
        >
          {index !== 0 && (
            <span className={`mx-1`}>
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.933594 1.43334L4.73693 5.23667C5.18609 5.68584 5.18609 6.42084 4.73693 6.87001L0.933594 10.6733"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
          <div
            className={`flex capitalize ${index === locationArray.length - 1 ? "text-textBlue" : "text-textGray"} `}
          >
            {item}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BreadCrumb;
