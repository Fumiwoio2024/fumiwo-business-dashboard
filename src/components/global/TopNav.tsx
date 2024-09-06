import { H1 } from "./Typography";
import { useState } from "react";
import { navLinks } from "@/utils/data";
import useChangeRoute from "@/hooks/custom/useChangeRoute";
import { NavigateFunction, useNavigate } from "react-router-dom";
import useClickOutside from "@hooks/custom/useClickOutside";

const options = ({ navigate }: { navigate: NavigateFunction }) => [
  {
    title: "Audit Logs",
    action: () => {
      navigate("/dashboard/reports");
    },

    colorClass: "text-header",
  },
  {
    title: "Log out",
    action: () => {
      localStorage.clear();
      sessionStorage.clear();
      navigate("/", { replace: true });
    },

    colorClass: "text-red-500",
  },
];

const TopNav = () => {
  const [pageName, setPageName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useClickOutside(setShowDropdown);
  const user = JSON.parse(localStorage.getItem("fmw_business_user") || "{}");

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  useChangeRoute((pathname) => {
    // check current page and set page name
    const page = navLinks.find((navLink) => pathname.includes(navLink.link));
    setPageName(page?.name || "");
  });

  return (
    <div className="flex h-20 items-center justify-between border-b border-sidebarBorder bg-white py-3.5 pl-8 pr-11">
      <div>
        <H1>{pageName} </H1>
      </div>

      <div className="flex items-center gap-7">
        <p className="rounded-xl bg-white px-5 py-3 text-primaryBlue shadow-username">
          {user?.name || "User"}
        </p>
        <div className="flex items-center gap-2.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E7F0FF]">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1995_7617)">
                <circle cx="76" cy="38.5" r="22" fill="#E7F0FF" />
              </g>
              <path
                d="M14.0011 2.3335C10.9445 2.3335 8.45947 4.8185 8.45947 7.87516C8.45947 10.8735 10.8045 13.3002 13.8611 13.4052C13.9545 13.3935 14.0478 13.3935 14.1178 13.4052C14.1411 13.4052 14.1528 13.4052 14.1761 13.4052C14.1878 13.4052 14.1878 13.4052 14.1995 13.4052C17.1861 13.3002 19.5311 10.8735 19.5428 7.87516C19.5428 4.8185 17.0578 2.3335 14.0011 2.3335Z"
                fill="#A8CAFF"
              />
              <path
                d="M19.9276 16.5079C16.6726 14.3379 11.3643 14.3379 8.08593 16.5079C6.60426 17.4995 5.7876 18.8412 5.7876 20.2762C5.7876 21.7112 6.60426 23.0412 8.07426 24.0212C9.7076 25.1179 11.8543 25.6662 14.0009 25.6662C16.1476 25.6662 18.2943 25.1179 19.9276 24.0212C21.3976 23.0295 22.2143 21.6995 22.2143 20.2529C22.2026 18.8179 21.3976 17.4879 19.9276 16.5079Z"
                fill="#A8CAFF"
              />
            </svg>
          </div>

          <div className="relative">
            <button onClick={toggleDropdown}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9181 9.4502L13.3981 15.9702C12.6281 16.7402 11.3681 16.7402 10.5981 15.9702L4.07812 9.4502"
                  stroke="#18191F"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              ref={dropdownRef}
              className={`border-dark-6 shadow-3xl absolute -right-4 top-10 w-52 rounded-lg border bg-white p-1 ${showDropdown ? "block" : "hidden"}`}
            >
              {options({ navigate }).map((option) => (
                <div
                  key={option.title}
                  className={`cursor-pointer p-3 text-sm font-medium hover:bg-linkGray/10 ${option.colorClass || "text-renaissance-black"}`}
                  onClick={() => {
                    toggleDropdown();
                    option.action();
                  }}
                >
                  {option.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
