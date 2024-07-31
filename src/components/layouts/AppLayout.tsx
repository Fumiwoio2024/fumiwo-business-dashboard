import api from '@/config/axios'
import Sidebar from '@components/global/Sidebar'
import TopNav from '@components/global/TopNav'
import { H3 } from "@components/global/Typography";
import { useLayoutEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const AppLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // if change auth route, set token if exists, logout if not
  useLayoutEffect(() => {
    const token = localStorage.getItem("fmw_business_auth_token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      api.defaults.headers.common["Authorization"] = "";
      navigate("/login", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <div className="relative hidden h-screen w-screen overflow-hidden bg-appBg md:flex">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <TopNav />
          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-appBg px-5 text-center md:hidden">
        <H3>For optimum results, kindly open this page on a computer.</H3>
      </div>
    </>
  );
};

export default AppLayout