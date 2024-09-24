import { Link, Outlet, useNavigate } from 'react-router-dom'
import logo from '@images/fumiwo-logo.png'
import { useAuthProvider } from '@/store/context/useAuthProvider'
import api from "@config/axios";
import useChangeRoute from '@/hooks/custom/useChangeRoute'

const AuthLayout = () => {
	const { showLogo } = useAuthProvider()
  const navigate = useNavigate();

	// if change auth route, set or remove token if exists
  useChangeRoute(() => {
    const token = localStorage.getItem("fmw_business_auth_token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      api.defaults.headers.common["Authorization"] = "";
      navigate("/login", { replace: true });
    }
  },)


	return (
    <div className="flex h-screen w-screen p-4">
      <section className="hidden w-5/12 flex-col justify-between rounded-xl bg-authBg bg-cover bg-center py-24 text-center lg:flex">
        <div className="text-white">
          <h4 className="text-[40px] font-bold">Welcome to Fumiwo</h4>
          <p className="mt-1 text-[20px]">For better credit decisions</p>
        </div>
        <div className="mt-24 text-white">
          <h4 className="text-[40px] font-bold">AI Driven credit scoring</h4>
          <p className="mx-auto mt-1 max-w-md text-[20px]">
            Get valuable insights of your borrowers delivered in real-time
          </p>
        </div>
      </section>
      <section className="overflow-y-auto px-5 lg:w-7/12">
        <div className="flex h-full flex-col justify-between">
          <div className="mx-auto my-[7%] w-[480px] space-y-8 px-6 text-center">
            {showLogo && (
              <div className="mx-auto w-fit">
                <img
                  src={logo}
                  alt="logo"
                  className="max-w-[238px] cursor-pointer"
                  loading="eager"
                />
              </div>
            )}

            <Outlet />
          </div>

          <div className="hover:text-header mx-auto mb-3.5 flex w-fit space-x-1.5 text-center text-paraGray">
            <Link to="https://fumiwo-website.vercel.app/terms-conditions">
              Terms of Use
            </Link>
            <p>|</p>
            <Link to="https://fumiwo-website.vercel.app/terms-conditions">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AuthLayout