import { navLinks } from "@/utils/data";
import logo from "@images/fumiwo-logo.png";
import { getUser } from "@utils/constants";
import { Link, NavLink, useLocation } from "react-router-dom";

const bottomNavLinks = [
  {
    name: "Docs",
    Icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 22.5H16C19.5 22.5 21 20.5 21 17.5V7.5C21 4.5 19.5 2.5 16 2.5H8C4.5 2.5 3 4.5 3 7.5V14.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.5 5V7C14.5 8.1 15.4 9 16.5 9H18.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 17.5L2 19.5L4 21.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 17.5L9 19.5L7 21.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    link: "https://docs.fumiwo.io/clients",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const user = getUser();
  return (
    <div className="hidden h-screen min-w-[276px] flex-col border-r border-sidebarBorder bg-white lg:flex">
      <section className="flex min-h-20 items-center border-b border-otpBox pl-12">
        <Link to="/dashboard/overview">
          <img
            src={logo}
            alt="fumiwo logo"
            className="max-h-10 max-w-[124px]"
          />
        </Link>
      </section>

      <section className="flex flex-1 flex-col justify-between pb-14 pl-8 pt-7">
        <nav className="flex w-fit flex-col space-y-2">
          {navLinks
            .filter((link) => !link.hidden)
            .map((link, index) => {
              const isActive = location.pathname.includes(link.link);
              return (
                <NavLink
                  key={index}
                  to={`/dashboard${
                    link.initialRoute?.replace(
                      "profile",
                      user?.userType === "business" ? "business" : "profile",
                    ) || link.link
                  }`}
                  className={() =>
                    `flex cursor-pointer items-center gap-4 rounded-full p-1 px-4 py-3 text-lg duration-300 hover:bg-paraGray/5 active:bg-paraGray/20 ${isActive ? "font-semibold text-primaryBlue" : "font-medium text-unFocusedText"}`
                  }
                >
                  {() => (
                    <>
                      <div>
                        {isActive ? link.ActiveIcon : link.InactiveIcon}
                      </div>
                      <p>{link.name}</p>
                    </>
                  )}
                </NavLink>
              );
            })}
        </nav>

        <nav>
          {bottomNavLinks.map((link, index) => (
            <Link
              to={link.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={`flex items-center gap-4 px-4 py-3 text-lg font-medium text-unFocusedText duration-300`}
            >
              <div> {link.Icon} </div>
              <p>{link.name}</p>
            </Link>
          ))}
        </nav>
      </section>
    </div>
  );
};

export default Sidebar;
