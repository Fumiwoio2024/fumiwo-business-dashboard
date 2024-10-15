import { getUser } from "@utils/constants";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const settingsLinks = [
  { name: "Profile", path: "/profile" },
  { name: "Business", path: "/business" },
  { name: "Security", path: "/security" },
  { name: "Rules", path: "/rules" },
  { name: "API Keys & Webhooks", path: "/keys-webhooks" },
];

const SettingsLayout = () => {
  const location = useLocation();
  const [showSettingsNav, setShowSettingsNav] = useState(true);
  const user = getUser();
  useEffect(() => {
    location.pathname.includes("onboarding")
      ? setShowSettingsNav(false)
      : setShowSettingsNav(true);
  }, [location.pathname]);
  if (!user) return null;


  const filterFunc = (link: { name: string; path: string }) =>
    !(
      (link.name === "Profile" && user.userType === "business") ||
      (link.name === "Business" && user.userType === "user") ||
      (link.name === "API Keys & Webhooks" && user.userType === "user") ||
      (link.name === "Rules" && user.userType === "user") ||
      (link.name === "Security" && user.userType === "user")
    );

  return (
    <div className="">
      {showSettingsNav && (
        <div className="mt-4 border-b px-6">
          <div className="flex gap-8">
            {settingsLinks.filter(filterFunc).map((link) => (
              <Link
                key={link.path}
                to={`/dashboard/settings${link.path}`}
                className={`block border-b-2 p-2.5 transition-colors duration-300 ${[
                  location.pathname.includes(link.path)
                    ? "border-primaryGreen font-medium text-header"
                    : "border-transparent text-paraGray",
                ].join(" ")}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default SettingsLayout;
