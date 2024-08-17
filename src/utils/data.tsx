// import { TUser } from "@type/global.types";

type TNavLinks = {
  name: string;
  InactiveIcon: JSX.Element;
  ActiveIcon: JSX.Element;
  link: string;
  initialRoute?: string;
};

export const navLinks: TNavLinks[] = [
  {
    name: "Overview",
    InactiveIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.77 11.25H15.73C13.72 11.25 12.75 10.36 12.75 8.52V3.98C12.75 2.14 13.73 1.25 15.73 1.25H19.77C21.78 1.25 22.75 2.14 22.75 3.98V8.51C22.75 10.36 21.77 11.25 19.77 11.25ZM15.73 2.75C14.39 2.75 14.25 3.13 14.25 3.98V8.51C14.25 9.37 14.39 9.74 15.73 9.74H19.77C21.11 9.74 21.25 9.36 21.25 8.51V3.98C21.25 3.12 21.11 2.75 19.77 2.75H15.73Z"
          fill="#A5B3CD"
        />
        <path
          d="M19.77 22.75H15.73C13.72 22.75 12.75 21.77 12.75 19.77V15.73C12.75 13.72 13.73 12.75 15.73 12.75H19.77C21.78 12.75 22.75 13.73 22.75 15.73V19.77C22.75 21.77 21.77 22.75 19.77 22.75ZM15.73 14.25C14.55 14.25 14.25 14.55 14.25 15.73V19.77C14.25 20.95 14.55 21.25 15.73 21.25H19.77C20.95 21.25 21.25 20.95 21.25 19.77V15.73C21.25 14.55 20.95 14.25 19.77 14.25H15.73Z"
          fill="#A5B3CD"
        />
        <path
          d="M8.27 11.25H4.23C2.22 11.25 1.25 10.36 1.25 8.52V3.98C1.25 2.14 2.23 1.25 4.23 1.25H8.27C10.28 1.25 11.25 2.14 11.25 3.98V8.51C11.25 10.36 10.27 11.25 8.27 11.25ZM4.23 2.75C2.89 2.75 2.75 3.13 2.75 3.98V8.51C2.75 9.37 2.89 9.74 4.23 9.74H8.27C9.61 9.74 9.75 9.36 9.75 8.51V3.98C9.75 3.12 9.61 2.75 8.27 2.75H4.23Z"
          fill="#A5B3CD"
        />
        <path
          d="M8.27 22.75H4.23C2.22 22.75 1.25 21.77 1.25 19.77V15.73C1.25 13.72 2.23 12.75 4.23 12.75H8.27C10.28 12.75 11.25 13.73 11.25 15.73V19.77C11.25 21.77 10.27 22.75 8.27 22.75ZM4.23 14.25C3.05 14.25 2.75 14.55 2.75 15.73V19.77C2.75 20.95 3.05 21.25 4.23 21.25H8.27C9.45 21.25 9.75 20.95 9.75 19.77V15.73C9.75 14.55 9.45 14.25 8.27 14.25H4.23Z"
          fill="#A5B3CD"
        />
      </svg>
    ),
    ActiveIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z"
          fill="#011D7B"
        />
        <path
          opacity="0.6"
          d="M18.6675 2H16.7675C14.5875 2 13.4375 3.15 13.4375 5.33V7.23C13.4375 9.41 14.5875 10.56 16.7675 10.56H18.6675C20.8475 10.56 21.9975 9.41 21.9975 7.23V5.33C21.9975 3.15 20.8475 2 18.6675 2Z"
          fill="#011D7B"
        />
        <path
          d="M18.6675 13.4297H16.7675C14.5875 13.4297 13.4375 14.5797 13.4375 16.7597V18.6597C13.4375 20.8397 14.5875 21.9897 16.7675 21.9897H18.6675C20.8475 21.9897 21.9975 20.8397 21.9975 18.6597V16.7597C21.9975 14.5797 20.8475 13.4297 18.6675 13.4297Z"
          fill="#011D7B"
        />
        <path
          opacity="0.6"
          d="M7.24 13.4297H5.34C3.15 13.4297 2 14.5797 2 16.7597V18.6597C2 20.8497 3.15 21.9997 5.33 21.9997H7.23C9.41 21.9997 10.56 20.8497 10.56 18.6697V16.7697C10.57 14.5797 9.42 13.4297 7.24 13.4297Z"
          fill="#011D7B"
        />
      </svg>
    ),
    link: "/overview",
  },
  {
    name: "Clients",
    InactiveIcon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.16006 11.37C9.06006 11.36 8.94006 11.36 8.83006 11.37C6.45006 11.29 4.56006 9.34 4.56006 6.94C4.56006 4.49 6.54006 2.5 9.00006 2.5C11.4501 2.5 13.4401 4.49 13.4401 6.94C13.4301 9.34 11.5401 11.29 9.16006 11.37Z"
          stroke="#A5B3CD"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.41 4.5C18.35 4.5 19.91 6.07 19.91 8C19.91 9.89 18.41 11.43 16.54 11.5C16.46 11.49 16.37 11.49 16.28 11.5"
          stroke="#A5B3CD"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.15997 15.06C1.73997 16.68 1.73997 19.32 4.15997 20.93C6.90997 22.77 11.42 22.77 14.17 20.93C16.59 19.31 16.59 16.67 14.17 15.06C11.43 13.23 6.91997 13.23 4.15997 15.06Z"
          stroke="#A5B3CD"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.34 20.5C19.06 20.35 19.74 20.06 20.3 19.63C21.86 18.46 21.86 16.53 20.3 15.36C19.75 14.94 19.08 14.66 18.37 14.5"
          stroke="#A5B3CD"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    ActiveIcon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M9 2.5C6.38 2.5 4.25 4.63 4.25 7.25C4.25 9.82 6.26 11.9 8.88 11.99C8.96 11.98 9.04 11.98 9.1 11.99C9.12 11.99 9.13 11.99 9.15 11.99C9.16 11.99 9.16 11.99 9.17 11.99C11.73 11.9 13.74 9.82 13.75 7.25C13.75 4.63 11.62 2.5 9 2.5Z"
          fill="#011D7B"
        />
        <path
          d="M14.08 14.6509C11.29 12.7909 6.73996 12.7909 3.92996 14.6509C2.65996 15.5009 1.95996 16.6509 1.95996 17.8809C1.95996 19.1109 2.65996 20.2509 3.91996 21.0909C5.31996 22.0309 7.15996 22.5009 8.99996 22.5009C10.84 22.5009 12.68 22.0309 14.08 21.0909C15.34 20.2409 16.04 19.1009 16.04 17.8609C16.03 16.6309 15.34 15.4909 14.08 14.6509Z"
          fill="#011D7B"
        />
        <path
          opacity="0.4"
          d="M19.9899 7.8401C20.1499 9.7801 18.7699 11.4801 16.8599 11.7101C16.8499 11.7101 16.8499 11.7101 16.8399 11.7101H16.8099C16.7499 11.7101 16.6899 11.7101 16.6399 11.7301C15.6699 11.7801 14.7799 11.4701 14.1099 10.9001C15.1399 9.9801 15.7299 8.6001 15.6099 7.1001C15.5399 6.2901 15.2599 5.5501 14.8399 4.9201C15.2199 4.7301 15.6599 4.6101 16.1099 4.5701C18.0699 4.4001 19.8199 5.8601 19.9899 7.8401Z"
          fill="#011D7B"
        />
        <path
          d="M21.9902 17.0904C21.9102 18.0604 21.2902 18.9004 20.2502 19.4704C19.2502 20.0204 17.9902 20.2804 16.7402 20.2504C17.4602 19.6004 17.8802 18.7904 17.9602 17.9304C18.0602 16.6904 17.4702 15.5004 16.2902 14.5504C15.6202 14.0204 14.8402 13.6004 13.9902 13.2904C16.2002 12.6504 18.9802 13.0804 20.6902 14.4604C21.6102 15.2004 22.0802 16.1304 21.9902 17.0904Z"
          fill="#011D7B"
        />
      </svg>
    ),
    link: "/clients",
  },
  // {
  // 	name: 'Reports',
  // 	InactiveIcon: <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  // 		<path d="M12.37 9.37988H17.62" stroke="#A5B3CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  // 		<path d="M6.38 9.37988L7.13 10.1299L9.38 7.87988" stroke="#A5B3CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  // 		<path d="M12.37 16.3799H17.62" stroke="#A5B3CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  // 		<path d="M6.38 16.3799L7.13 17.1299L9.38 14.8799" stroke="#A5B3CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  // 		<path d="M9 22.5H15C20 22.5 22 20.5 22 15.5V9.5C22 4.5 20 2.5 15 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 20.5 4 22.5 9 22.5Z" stroke="#A5B3CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  // 	</svg>,
  // 	ActiveIcon: '',	// add icon
  // 	link: '/reports',
  // },
  {
    name: "Billing",
    InactiveIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.92969 15.8797L15.8797 3.92969"
          stroke="#A5B3CD"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.1013 18.2791L12.3013 17.0791"
          stroke="#A5B3CD"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.793 15.5892L16.183 13.1992"
          stroke="#A5B3CD"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.60127 10.2395L10.2413 3.59949C12.3613 1.47949 13.4213 1.46949 15.5213 3.56949L20.4313 8.47949C22.5313 10.5795 22.5213 11.6395 20.4013 13.7595L13.7613 20.3995C11.6413 22.5195 10.5813 22.5295 8.48127 20.4295L3.57127 15.5195C1.47127 13.4195 1.47127 12.3695 3.60127 10.2395Z"
          stroke="#A5B3CD"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 21.998H22"
          stroke="#A5B3CD"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    ActiveIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.25 22H2.75C2.34 22 2 21.66 2 21.25C2 20.84 2.34 20.5 2.75 20.5H21.25C21.66 20.5 22 20.84 22 21.25C22 21.66 21.66 22 21.25 22Z"
          fill="#011D7B"
        />
        <path
          opacity="0.4"
          d="M20.5899 13.7007L13.3599 20.9307C11.9399 22.3507 9.64988 22.3507 8.23988 20.9407L3.62988 16.3307L15.9899 3.9707L20.5999 8.5807C22.0099 9.9907 22.0099 12.2807 20.5899 13.7007Z"
          fill="#011D7B"
        />
        <path
          d="M15.9901 3.97016L3.62006 16.3302L2.71006 15.4202C1.30006 14.0102 1.30006 11.7202 2.72006 10.3002L9.95006 3.07016C11.3701 1.65016 13.6601 1.65016 15.0701 3.06016L15.9901 3.97016Z"
          fill="#011D7B"
        />
        <path
          d="M12.8898 17.6009L11.5398 18.9509C11.2598 19.2309 10.8098 19.2309 10.5298 18.9509C10.2498 18.6709 10.2498 18.2209 10.5298 17.9409L11.8798 16.5909C12.1598 16.3109 12.6098 16.3109 12.8898 16.5909C13.1698 16.8709 13.1698 17.3209 12.8898 17.6009Z"
          fill="#011D7B"
        />
        <path
          d="M17.2699 13.22L14.5799 15.91C14.2999 16.19 13.8499 16.19 13.5699 15.91C13.2899 15.63 13.2899 15.18 13.5699 14.9L16.2599 12.21C16.5399 11.93 16.9899 11.93 17.2699 12.21C17.5399 12.49 17.5399 12.94 17.2699 13.22Z"
          fill="#011D7B"
        />
      </svg>
    ),
    link: "/billing",
  },
  {
    name: "Teams",
    InactiveIcon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99995 22.5H15.9999C20.0199 22.5 20.7399 20.89 20.9499 18.93L21.6999 10.93C21.9699 8.49 21.2699 6.5 16.9999 6.5H6.99995C2.72995 6.5 2.02995 8.49 2.29995 10.93L3.04995 18.93C3.25995 20.89 3.97995 22.5 7.99995 22.5Z"
          stroke="#A5B3CD"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 6.5V5.7C8 3.93 8 2.5 11.2 2.5H12.8C16 2.5 16 3.93 16 5.7V6.5"
          stroke="#A5B3CD"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 13.5V14.5C14 14.51 14 14.51 14 14.52C14 15.61 13.99 16.5 12 16.5C10.02 16.5 10 15.62 10 14.53V13.5C10 12.5 10 12.5 11 12.5H13C14 12.5 14 12.5 14 13.5Z"
          stroke="#A5B3CD"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.65 11.5C19.34 13.18 16.7 14.18 14 14.52"
          stroke="#A5B3CD"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.62 11.7695C4.87 13.3095 7.41 14.2395 10 14.5295"
          stroke="#A5B3CD"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    ActiveIcon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.09 7.47953C20.24 6.53953 18.82 6.06953 16.76 6.06953H16.52V6.02953C16.52 4.34953 16.52 2.26953 12.76 2.26953H11.24C7.48004 2.26953 7.48004 4.35953 7.48004 6.02953V6.07953H7.24004C5.17004 6.07953 3.76004 6.54953 2.91004 7.48953C1.92004 8.58953 1.95004 10.0695 2.05004 11.0795L2.06004 11.1495L2.16004 12.1995C2.17004 12.2095 2.19004 12.2295 2.21004 12.2395C2.54004 12.4595 2.88004 12.6795 3.24004 12.8795C3.38004 12.9695 3.53004 13.0495 3.68004 13.1295C5.39004 14.0695 7.27004 14.6995 9.18004 15.0095C9.27004 15.9495 9.68004 17.0495 11.87 17.0495C14.06 17.0495 14.49 15.9595 14.56 14.9895C16.6 14.6595 18.57 13.9495 20.35 12.9095C20.41 12.8795 20.45 12.8495 20.5 12.8195C20.96 12.5595 21.39 12.2795 21.81 11.9695C21.83 11.9595 21.85 11.9395 21.86 11.9195L21.9 11.5595L21.95 11.0895C21.96 11.0295 21.96 10.9795 21.97 10.9095C22.05 9.89953 22.03 8.51953 21.09 7.47953ZM13.09 14.3295C13.09 15.3895 13.09 15.5495 11.86 15.5495C10.63 15.5495 10.63 15.3595 10.63 14.3395V13.0795H13.09V14.3295ZM8.91004 6.06953V6.02953C8.91004 4.32953 8.91004 3.69953 11.24 3.69953H12.76C15.09 3.69953 15.09 4.33953 15.09 6.02953V6.07953H8.91004V6.06953Z"
          fill="#011D7B"
        />
        <path
          opacity="0.4"
          d="M20.5002 12.8004C20.4502 12.8304 20.4002 12.8604 20.3502 12.8904C18.5702 13.9304 16.6002 14.6304 14.5602 14.9704C14.4802 15.9304 14.0602 17.0304 11.8702 17.0304C9.68016 17.0304 9.26016 15.9404 9.18016 14.9904C7.27016 14.6904 5.39016 14.0604 3.68016 13.1104C3.53016 13.0304 3.38016 12.9504 3.24016 12.8604C2.88016 12.6604 2.54016 12.4404 2.21016 12.2204C2.19016 12.2104 2.17016 12.1904 2.16016 12.1804L2.77016 18.6904C2.98016 20.6804 3.80016 22.7304 8.20016 22.7304H15.8202C20.2202 22.7304 21.0402 20.6804 21.2502 18.6804L21.8802 11.9004C21.8702 11.9204 21.8502 11.9404 21.8302 11.9504C21.4002 12.2604 20.9602 12.5504 20.5002 12.8004Z"
          fill="#011D7B"
        />
      </svg>
    ),
    link: "/teams",
  },
  {
    name: "Settings",
    InactiveIcon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 16.25C9.93 16.25 8.25 14.57 8.25 12.5C8.25 10.43 9.93 8.75 12 8.75C14.07 8.75 15.75 10.43 15.75 12.5C15.75 14.57 14.07 16.25 12 16.25ZM12 10.25C10.76 10.25 9.75 11.26 9.75 12.5C9.75 13.74 10.76 14.75 12 14.75C13.24 14.75 14.25 13.74 14.25 12.5C14.25 11.26 13.24 10.25 12 10.25Z"
          fill="#A5B3CD"
        />
        <path
          d="M15.21 22.6903C15 22.6903 14.79 22.6603 14.58 22.6103C13.96 22.4403 13.44 22.0503 13.11 21.5003L12.99 21.3003C12.4 20.2803 11.59 20.2803 11 21.3003L10.89 21.4903C10.56 22.0503 10.04 22.4503 9.42 22.6103C8.79 22.7803 8.14 22.6903 7.59 22.3603L5.87 21.3703C5.56778 21.1971 5.30266 20.9661 5.08981 20.6904C4.87695 20.4146 4.72055 20.0997 4.62953 19.7635C4.53851 19.4272 4.51466 19.0764 4.55936 18.7309C4.60405 18.3855 4.71641 18.0523 4.89 17.7503C5.18 17.2403 5.26 16.7803 5.09 16.4903C4.92 16.2003 4.49 16.0303 3.9 16.0303C2.44 16.0303 1.25 14.8403 1.25 13.3803V11.6203C1.25 10.1603 2.44 8.97029 3.9 8.97029C4.49 8.97029 4.92 8.80029 5.09 8.51029C5.26 8.22029 5.19 7.76029 4.89 7.25029C4.54 6.64029 4.45 5.92029 4.63 5.24029C4.81 4.55029 5.25 3.98029 5.87 3.63029L7.6 2.64029C8.73 1.97029 10.22 2.36029 10.9 3.51029L11.02 3.71029C11.61 4.73029 12.42 4.73029 13.01 3.71029L13.12 3.52029C13.8 2.36029 15.29 1.97029 16.43 2.65029L18.15 3.64029C18.4522 3.81345 18.7173 4.0445 18.9302 4.32022C19.143 4.59593 19.2995 4.9109 19.3905 5.24712C19.4815 5.58333 19.5053 5.93419 19.4606 6.27963C19.4159 6.62507 19.3036 6.95831 19.13 7.26029C18.84 7.77029 18.76 8.23029 18.93 8.52029C19.1 8.81029 19.53 8.98029 20.12 8.98029C21.58 8.98029 22.77 10.1703 22.77 11.6303V13.3903C22.77 14.8503 21.58 16.0403 20.12 16.0403C19.53 16.0403 19.1 16.2103 18.93 16.5003C18.76 16.7903 18.83 17.2503 19.13 17.7603C19.48 18.3703 19.58 19.0903 19.39 19.7703C19.3031 20.1086 19.1483 20.4258 18.9352 20.7025C18.722 20.9793 18.4549 21.2098 18.15 21.3803L16.42 22.3703C16.04 22.5803 15.63 22.6903 15.21 22.6903ZM12 18.9903C12.89 18.9903 13.72 19.5503 14.29 20.5403L14.4 20.7303C14.52 20.9403 14.72 21.0903 14.96 21.1503C15.2 21.2103 15.44 21.1803 15.64 21.0603L17.37 20.0603C17.634 19.908 17.8273 19.6577 17.9078 19.3637C17.9883 19.0697 17.9496 18.7559 17.8 18.4903C17.23 17.5103 17.16 16.5003 17.6 15.7303C18.04 14.9603 18.95 14.5203 20.09 14.5203C20.73 14.5203 21.24 14.0103 21.24 13.3703V11.6103C21.24 10.9803 20.73 10.4603 20.09 10.4603C18.95 10.4603 18.04 10.0203 17.6 9.25029C17.16 8.48029 17.23 7.47029 17.8 6.49029C17.95 6.23029 17.99 5.92029 17.91 5.62029C17.83 5.32029 17.64 5.08029 17.38 4.92029L15.65 3.93029C15.5456 3.86909 15.4302 3.82908 15.3104 3.81254C15.1905 3.79601 15.0686 3.80328 14.9515 3.83393C14.8345 3.86458 14.7247 3.91802 14.6283 3.99118C14.532 4.06434 14.451 4.15579 14.39 4.26029L14.28 4.45029C13.71 5.44029 12.88 6.00029 11.99 6.00029C11.1 6.00029 10.27 5.44029 9.7 4.45029L9.59 4.25029C9.46573 4.04592 9.26661 3.89812 9.03501 3.83836C8.80342 3.77859 8.55764 3.81157 8.35 3.93029L6.62 4.93029C6.35598 5.08258 6.16272 5.33291 6.0822 5.62688C6.00169 5.92085 6.04043 6.23471 6.19 6.50029C6.76 7.48029 6.83 8.49029 6.39 9.26029C5.95 10.0303 5.04 10.4703 3.9 10.4703C3.26 10.4703 2.75 10.9803 2.75 11.6203V13.3803C2.75 14.0103 3.26 14.5303 3.9 14.5303C5.04 14.5303 5.95 14.9703 6.39 15.7403C6.83 16.5103 6.76 17.5203 6.19 18.5003C6.04 18.7603 6 19.0703 6.08 19.3703C6.16 19.6703 6.35 19.9103 6.61 20.0703L8.34 21.0603C8.55 21.1903 8.8 21.2203 9.03 21.1603C9.27 21.1003 9.47 20.9403 9.6 20.7303L9.71 20.5403C10.28 19.5603 11.11 18.9903 12 18.9903Z"
          fill="#A5B3CD"
        />
      </svg>
    ),
    ActiveIcon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M2 13.3804V11.6204C2 10.5804 2.85 9.72043 3.9 9.72043C5.71 9.72043 6.45 8.44042 5.54 6.87042C5.02 5.97042 5.33 4.80042 6.24 4.28042L7.97 3.29042C8.76 2.82042 9.78 3.10042 10.25 3.89042L10.36 4.08042C11.26 5.65042 12.74 5.65042 13.65 4.08042L13.76 3.89042C14.23 3.10042 15.25 2.82042 16.04 3.29042L17.77 4.28042C18.68 4.80042 18.99 5.97042 18.47 6.87042C17.56 8.44042 18.3 9.72043 20.11 9.72043C21.15 9.72043 22.01 10.5704 22.01 11.6204V13.3804C22.01 14.4204 21.16 15.2804 20.11 15.2804C18.3 15.2804 17.56 16.5604 18.47 18.1304C18.99 19.0404 18.68 20.2004 17.77 20.7204L16.04 21.7104C15.25 22.1804 14.23 21.9004 13.76 21.1104L13.65 20.9204C12.75 19.3504 11.27 19.3504 10.36 20.9204L10.25 21.1104C9.78 21.9004 8.76 22.1804 7.97 21.7104L6.24 20.7204C5.33 20.2004 5.02 19.0304 5.54 18.1304C6.45 16.5604 5.71 15.2804 3.9 15.2804C2.85 15.2804 2 14.4204 2 13.3804Z"
          fill="#011D7B"
        />
        <path
          d="M12 15.75C13.7949 15.75 15.25 14.2949 15.25 12.5C15.25 10.7051 13.7949 9.25 12 9.25C10.2051 9.25 8.75 10.7051 8.75 12.5C8.75 14.2949 10.2051 15.75 12 15.75Z"
          fill="#011D7B"
        />
      </svg>
    ),
    link: "/settings",
    initialRoute: "/settings/profile",
  },
];

export const dummyInvoice = [
  {
    cardCharged: "66970d98511a72ec5d6ecb9a",
    transactionId: "669ec0960da8d507e5075cca",
    amountPaid: 40000,
    status: "paid",
    dateDue: "2024-08-22T21:14:04.000Z",
    datePaid: "2024-07-22T21:14:04.283Z",
    paymentLink:
      "https://dashboard.dev.fumiwo.io/invoice-payment?invoiceId=669ecb9ca661a53632e61a4b&planId=6692fc8400bd509b9658056d",
    pdfDownloadLink:
      "http://res.cloudinary.com/brynokings/image/upload/v1721682850/proppal-pdf/ctntqbzapkq83oriht7m.pdf",
    discount: 0,
    discountReason: null,
    additionalCost: 0,
    additionalCostReason: null,
    business: "667d38938450ddf0f7ea2468",
    plan: "6692fc8400bd509b9658056d",
    productsBilled: [
      {
        fixedFee: 40000,
        _id: "6692fc8400bd509b9658056e",
        apiCallsMade: 0,
        type: "digital-scoring",
        apiCallsAllowed: 500000,
        feeType: "fixed",
        currency: "NGN",
        variableFees: [],
      },
    ],
    currency: "NGN",
    amountDue: 40000,
    type: "plan_purchase",
    createdAt: "2024-07-22T21:14:11.133Z",
    lastModifiedAt: "2024-07-22T21:14:11.133Z",
    _createdAt: "2024-07-22T22:14:1111+01:00",
    _lastModifiedAt: "2024-07-22T22:14:1111+01:00",
    id: "669ecb9ca661a53632e61a4b",
  },
  {
    cardCharged: "66970d98511a72ec5d6ecb9a",
    transactionId: "669ec15f7465950d5a394281",
    amountPaid: 40000,
    status: "paid",
    dateDue: "2024-08-22T21:03:47.000Z",
    datePaid: "2024-07-22T21:03:47.894Z",
    paymentLink:
      "https://dashboard.dev.fumiwo.io/invoice-payment?invoiceId=669ec933576bdb310ca4c589&planId=6692fc8400bd509b9658056d",
    pdfDownloadLink:
      "http://res.cloudinary.com/brynokings/image/upload/v1721682234/proppal-pdf/yveewad4gujs48utb9n8.pdf",
    discount: 0,
    discountReason: null,
    additionalCost: 0,
    additionalCostReason: null,
    business: "667d38938450ddf0f7ea2468",
    plan: "6692fc8400bd509b9658056d",
    productsBilled: [
      {
        fixedFee: 40000,
        _id: "6692fc8400bd509b9658056e",
        apiCallsMade: 0,
        type: "digital-scoring",
        apiCallsAllowed: 500000,
        feeType: "fixed",
        currency: "NGN",
        variableFees: [],
      },
    ],
    currency: "NGN",
    amountDue: 40000,
    type: "plan_purchase",
    createdAt: "2024-07-22T21:03:54.254Z",
    lastModifiedAt: "2024-07-22T21:03:54.254Z",
    _createdAt: "2024-07-22T22:03:5454+01:00",
    _lastModifiedAt: "2024-07-22T22:03:5454+01:00",
    id: "669ec933576bdb310ca4c589",
  },
  {
    cardCharged: "66970d98511a72ec5d6ecb9a",
    transactionId: "669ec2c7f857be23dc9551f4",
    amountPaid: 40000,
    status: "paid",
    dateDue: "2024-08-22T21:00:04.000Z",
    datePaid: "2024-07-22T21:00:04.493Z",
    paymentLink:
      "https://dashboard.dev.fumiwo.io/invoice-payment?invoiceId=669ec854f2b8282f27217263&planId=6692fc8400bd509b9658056d",
    pdfDownloadLink:
      "http://res.cloudinary.com/brynokings/image/upload/v1721682011/proppal-pdf/khidwhosbw9txsabjang.pdf",
    discount: 0,
    discountReason: null,
    additionalCost: 0,
    additionalCostReason: null,
    business: "667d38938450ddf0f7ea2468",
    plan: "6692fc8400bd509b9658056d",
    productsBilled: [
      {
        fixedFee: 40000,
        _id: "6692fc8400bd509b9658056e",
        apiCallsMade: 0,
        type: "digital-scoring",
        apiCallsAllowed: 500000,
        feeType: "fixed",
        currency: "NGN",
        variableFees: [],
      },
    ],
    currency: "NGN",
    amountDue: 40000,
    type: "plan_purchase",
    createdAt: "2024-07-22T21:00:11.426Z",
    lastModifiedAt: "2024-07-22T21:00:11.426Z",
    _createdAt: "2024-07-22T22:00:1111+01:00",
    _lastModifiedAt: "2024-07-22T22:00:1111+01:00",
    id: "669ec854f2b8282f27217263",
  },
];

export const dummyRules = [
  {
    mfa: {
      enabled: false,
      isMandated: false,
      hasAuthenticatedWithPassword: false,
      secret: null,
    },
    passwordHistory: [
      "$2b$12$aq2bN9kx/3NZtNzwKKzO7uumxXQ4U9vu/PQgmW0cLr.VGG7nZxTP2",
    ],
    passwordChangedAt: null,
    resetPasswordToken: null,
    hasAcceptedInvite: true,
    status: "active",
    loginTimes: [],
    loginAttempts: 0,
    email: "prosper.eravwuvieke1@fumiwo.io",
    role: {
      isCustom: false,
      permissions: [
        "onboard-users",
        "view-users",
        "delete-users",
        "manage-roles",
        "update-preferences",
      ],
      _id: "667d38938450ddf0f7ea246d",
      isAdminRole: false,
      businessId: "667d38938450ddf0f7ea246d",
      description: "Business default role",
      name: "Super Admin",
      slug: "super-admin",
      _createdAt: "2024-07-20T14:13:1212+01:00",
      _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
      id: "667d38938450ddf0f7ea246d",
    },
    inviteCode: "578658",
    business: {
      _id: "667d38938450ddf0f7ea2468",
      email: "hello@fumiwo.io",
      name: "Fumiwo Loan Co",
      type: "lender",
      addressInfo: {
        _id: "667d38938450ddf0f7ea2469",
        address: "45 Olu street",
        city: "lekki",
        state: "Lagos",
        country: "NG",
        dateAdded: "2024-06-27T10:01:55.682Z",
        lastModifiedAt: "2024-06-27T10:01:55.682Z",
      },
      contactPersonInfo: {
        phone: {
          countryCode: "234",
          mobile: "08123232323",
        },
        _id: "667d38938450ddf0f7ea246a",
        firstName: "Prosper",
        lastName: "Eravwuvieke",
        email: "prosper.eravwuvieke@fumiwo.io",
        role: "Software Engineer",
        dateAdded: "2024-06-27T10:01:55.682Z",
        lastModifiedAt: "2024-06-27T10:01:55.682Z",
      },
      role: {
        isCustom: false,
        isAdminRole: false,
        permissions: [
          "onboard-users",
          "view-users",
          "delete-users",
          "manage-roles",
          "update-preferences",
        ],
        _id: "667d38938450ddf0f7ea246d",
        description: "Business default role",
        name: "Super Admin",
        slug: "super-admin",
        businessId: "667d38938450ddf0f7ea2468",
        _createdAt: "2024-07-20T14:13:1212+01:00",
        _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
        id: "667d38938450ddf0f7ea246d",
      },
      _createdAt: "2024-07-20T14:13:1212+01:00",
      _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
      businessId: "667d38938450ddf0f7ea2468",
      userType: "business",
      id: "667d38938450ddf0f7ea2468",
    },
    createdAt: "2024-07-20T12:45:44.002Z",
    lastModifiedAt: "2024-07-20T12:46:16.823Z",
    firstName: "Prosper",
    lastName: "Eravwuvieke",
    _createdAt: "2024-07-20T13:45:4444+01:00",
    _lastModifiedAt: "2024-07-20T13:46:1616+01:00",
    businessId: "667d38938450ddf0f7ea2468",
    userType: "user",
    id: "669bb177a22dff51e89ce109",
    rule: "Test rule",
  },
  {
    mfa: {
      enabled: false,
      isMandated: false,
      hasAuthenticatedWithPassword: false,
      secret: null,
    },
    passwordHistory: [
      "$2b$12$r/U/.JSSVAEpAcLTgzfsL.9n5W2Am906s0MYvVlwuAEFSykmCwTFa",
    ],
    passwordChangedAt: null,
    resetPasswordToken: null,
    hasAcceptedInvite: true,
    status: "active",
    loginTimes: ["2024-07-19T07:24:43.000Z"],
    loginAttempts: 0,
    email: "prosper.eravwuvieke@fumiwo.io",
    role: {
      isCustom: false,
      permissions: [
        "onboard-users",
        "view-users",
        "delete-users",
        "manage-roles",
        "update-preferences",
      ],
      _id: "667d38938450ddf0f7ea246d",
      description: "Business default role",
      name: "Super Admin",
      slug: "super-admin",
      _createdAt: "2024-07-20T14:13:1212+01:00",
      _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
      id: "667d38938450ddf0f7ea246d",
    },
    inviteCode: "344647",
    business: {
      _id: "667d38938450ddf0f7ea2468",
      email: "hello@fumiwo.io",
      name: "Fumiwo Loan Co",
      type: "lender",
      addressInfo: {
        _id: "667d38938450ddf0f7ea2469",
        address: "45 Olu street",
        city: "lekki",
        state: "Lagos",
        country: "NG",
        dateAdded: "2024-06-27T10:01:55.682Z",
        lastModifiedAt: "2024-06-27T10:01:55.682Z",
      },
      contactPersonInfo: {
        phone: {
          countryCode: "234",
          mobile: "08123232323",
        },
        _id: "667d38938450ddf0f7ea246a",
        firstName: "Prosper",
        lastName: "Eravwuvieke",
        email: "prosper.eravwuvieke@fumiwo.io",
        role: "Software Engineer",
        dateAdded: "2024-06-27T10:01:55.682Z",
        lastModifiedAt: "2024-06-27T10:01:55.682Z",
      },
      role: {
        isCustom: false,
        isAdminRole: false,
        permissions: [
          "onboard-users",
          "view-users",
          "delete-users",
          "manage-roles",
          "update-preferences",
        ],
        _id: "667d38938450ddf0f7ea246d",
        description: "Business default role",
        name: "Super Admin",
        slug: "super-admin",
        businessId: "667d38938450ddf0f7ea2468",
        _createdAt: "2024-07-20T14:13:1212+01:00",
        _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
        id: "667d38938450ddf0f7ea246d",
      },
      _createdAt: "2024-07-20T14:13:1212+01:00",
      _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
      businessId: "667d38938450ddf0f7ea2468",
      userType: "business",
      id: "667d38938450ddf0f7ea2468",
    },
    createdAt: "2024-07-19T07:22:32.602Z",
    lastModifiedAt: "2024-07-19T07:24:43.062Z",
    firstName: "Prosper",
    lastName: "Eravwuvieke",
    _createdAt: "2024-07-19T08:22:3232+01:00",
    _lastModifiedAt: "2024-07-19T08:24:4343+01:00",
    businessId: "667d38938450ddf0f7ea2468",
    userType: "user",
    id: "669a1438a22dffc7489ce0fe",
    rule: "Test rule",
  },
  {
    mfa: {
      enabled: false,
      isMandated: false,
      hasAuthenticatedWithPassword: false,
      secret: null,
    },
    passwordHistory: [],
    passwordChangedAt: null,
    resetPasswordToken: null,
    hasAcceptedInvite: false,
    status: "inactive",
    loginTimes: [],
    loginAttempts: 0,
    email: "kainy.chike-onyechi@fumiwo.io",
    role: {
      isCustom: false,
      permissions: [
        "onboard-users",
        "view-users",
        "delete-users",
        "manage-roles",
        "update-preferences",
      ],
      _id: "667d38938450ddf0f7ea246d",
      description: "Business default role",
      name: "Super Admin",
      slug: "super-admin",
      _createdAt: "2024-07-20T14:13:1212+01:00",
      _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
      id: "667d38938450ddf0f7ea246d",
    },
    inviteCode: "957432",
    business: {
      _id: "667d38938450ddf0f7ea2468",
      email: "hello@fumiwo.io",
      name: "Fumiwo Loan Co",
      type: "lender",
      addressInfo: {
        _id: "667d38938450ddf0f7ea2469",
        address: "45 Olu street",
        city: "lekki",
        state: "Lagos",
        country: "NG",
        dateAdded: "2024-06-27T10:01:55.682Z",
        lastModifiedAt: "2024-06-27T10:01:55.682Z",
      },
      contactPersonInfo: {
        phone: {
          countryCode: "234",
          mobile: "08123232323",
        },
        _id: "667d38938450ddf0f7ea246a",
        firstName: "Prosper",
        lastName: "Eravwuvieke",
        email: "prosper.eravwuvieke@fumiwo.io",
        role: "Software Engineer",
        dateAdded: "2024-06-27T10:01:55.682Z",
        lastModifiedAt: "2024-06-27T10:01:55.682Z",
      },
      role: {
        isCustom: false,
        isAdminRole: false,
        permissions: [
          "onboard-users",
          "view-users",
          "delete-users",
          "manage-roles",
          "update-preferences",
        ],
        _id: "667d38938450ddf0f7ea246d",
        description: "Business default role",
        name: "Super Admin",
        slug: "super-admin",
        businessId: "667d38938450ddf0f7ea2468",
        _createdAt: "2024-07-20T14:13:1212+01:00",
        _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
        id: "667d38938450ddf0f7ea246d",
      },
      _createdAt: "2024-07-20T14:13:1212+01:00",
      _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
      businessId: "667d38938450ddf0f7ea2468",
      userType: "business",
      id: "667d38938450ddf0f7ea2468",
    },
    createdAt: "2024-07-12T11:17:02.720Z",
    lastModifiedAt: "2024-07-12T11:17:02.720Z",
    _createdAt: "2024-07-12T12:17:022+01:00",
    _lastModifiedAt: "2024-07-12T12:17:022+01:00",
    businessId: "667d38938450ddf0f7ea2468",
    userType: "user",
    id: "669110aea22dfff1f99cdfc5",

    rule: "Test rule",
  },
];
export const dummyTeamMembers = [
  {
    mfa: {
      enabled: false,
      isMandated: false,
      hasAuthenticatedWithPassword: false,
      secret: null,
    },
    passwordHistory: [
      "$2b$12$aq2bN9kx/3NZtNzwKKzO7uumxXQ4U9vu/PQgmW0cLr.VGG7nZxTP2",
    ],
    passwordChangedAt: null,
    resetPasswordToken: null,
    hasAcceptedInvite: true,
    status: "active",
    loginTimes: [],
    loginAttempts: 0,
    email: "prosper.eravwuvieke1@fumiwo.io",
    role: {
      isCustom: false,
      permissions: [
        "onboard-users",
        "view-users",
        "delete-users",
        "manage-roles",
        "update-preferences",
      ],
      _id: "667d38938450ddf0f7ea246d",
      isAdminRole: false,
      businessId: "667d38938450ddf0f7ea246d",
      description: "Business default role",
      name: "Super Admin",
      slug: "super-admin",
      _createdAt: "2024-07-20T14:13:1212+01:00",
      _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
      id: "667d38938450ddf0f7ea246d",
    },
    inviteCode: "578658",
    business: {
      _id: "667d38938450ddf0f7ea2468",
      email: "hello@fumiwo.io",
      name: "Fumiwo Loan Co",
      type: "lender",
      addressInfo: {
        _id: "667d38938450ddf0f7ea2469",
        address: "45 Olu street",
        city: "lekki",
        state: "Lagos",
        country: "NG",
        dateAdded: "2024-06-27T10:01:55.682Z",
        lastModifiedAt: "2024-06-27T10:01:55.682Z",
      },
      contactPersonInfo: {
        phone: {
          countryCode: "234",
          mobile: "08123232323",
        },
        _id: "667d38938450ddf0f7ea246a",
        firstName: "Prosper",
        lastName: "Eravwuvieke",
        email: "prosper.eravwuvieke@fumiwo.io",
        role: "Software Engineer",
        dateAdded: "2024-06-27T10:01:55.682Z",
        lastModifiedAt: "2024-06-27T10:01:55.682Z",
      },
      role: {
        isCustom: false,
        isAdminRole: false,
        permissions: [
          "onboard-users",
          "view-users",
          "delete-users",
          "manage-roles",
          "update-preferences",
        ],
        _id: "667d38938450ddf0f7ea246d",
        description: "Business default role",
        name: "Super Admin",
        slug: "super-admin",
        businessId: "667d38938450ddf0f7ea2468",
        _createdAt: "2024-07-20T14:13:1212+01:00",
        _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
        id: "667d38938450ddf0f7ea246d",
      },
      _createdAt: "2024-07-20T14:13:1212+01:00",
      _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
      businessId: "667d38938450ddf0f7ea2468",
      userType: "business",
      id: "667d38938450ddf0f7ea2468",
    },
    createdAt: "2024-07-20T12:45:44.002Z",
    lastModifiedAt: "2024-07-20T12:46:16.823Z",
    firstName: "Prosper",
    lastName: "Eravwuvieke",
    _createdAt: "2024-07-20T13:45:4444+01:00",
    _lastModifiedAt: "2024-07-20T13:46:1616+01:00",
    businessId: "667d38938450ddf0f7ea2468",
    userType: "user",
    id: "669bb177a22dff51e89ce109",
  },
  {
    mfa: {
      enabled: false,
      isMandated: false,
      hasAuthenticatedWithPassword: false,
      secret: null,
    },
    passwordHistory: [
      "$2b$12$r/U/.JSSVAEpAcLTgzfsL.9n5W2Am906s0MYvVlwuAEFSykmCwTFa",
    ],
    passwordChangedAt: null,
    resetPasswordToken: null,
    hasAcceptedInvite: true,
    status: "active",
    loginTimes: ["2024-07-19T07:24:43.000Z"],
    loginAttempts: 0,
    email: "prosper.eravwuvieke@fumiwo.io",
    role: {
      isCustom: false,
      permissions: [
        "onboard-users",
        "view-users",
        "delete-users",
        "manage-roles",
        "update-preferences",
      ],
      _id: "667d38938450ddf0f7ea246d",
      description: "Business default role",
      name: "Super Admin",
      slug: "super-admin",
      _createdAt: "2024-07-20T14:13:1212+01:00",
      _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
      id: "667d38938450ddf0f7ea246d",
    },
    inviteCode: "344647",
    business: {
      _id: "667d38938450ddf0f7ea2468",
      email: "hello@fumiwo.io",
      name: "Fumiwo Loan Co",
      type: "lender",
      addressInfo: {
        _id: "667d38938450ddf0f7ea2469",
        address: "45 Olu street",
        city: "lekki",
        state: "Lagos",
        country: "NG",
        dateAdded: "2024-06-27T10:01:55.682Z",
        lastModifiedAt: "2024-06-27T10:01:55.682Z",
      },
      contactPersonInfo: {
        phone: {
          countryCode: "234",
          mobile: "08123232323",
        },
        _id: "667d38938450ddf0f7ea246a",
        firstName: "Prosper",
        lastName: "Eravwuvieke",
        email: "prosper.eravwuvieke@fumiwo.io",
        role: "Software Engineer",
        dateAdded: "2024-06-27T10:01:55.682Z",
        lastModifiedAt: "2024-06-27T10:01:55.682Z",
      },
      role: {
        isCustom: false,
        isAdminRole: false,
        permissions: [
          "onboard-users",
          "view-users",
          "delete-users",
          "manage-roles",
          "update-preferences",
        ],
        _id: "667d38938450ddf0f7ea246d",
        description: "Business default role",
        name: "Super Admin",
        slug: "super-admin",
        businessId: "667d38938450ddf0f7ea2468",
        _createdAt: "2024-07-20T14:13:1212+01:00",
        _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
        id: "667d38938450ddf0f7ea246d",
      },
      _createdAt: "2024-07-20T14:13:1212+01:00",
      _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
      businessId: "667d38938450ddf0f7ea2468",
      userType: "business",
      id: "667d38938450ddf0f7ea2468",
    },
    createdAt: "2024-07-19T07:22:32.602Z",
    lastModifiedAt: "2024-07-19T07:24:43.062Z",
    firstName: "Prosper",
    lastName: "Eravwuvieke",
    _createdAt: "2024-07-19T08:22:3232+01:00",
    _lastModifiedAt: "2024-07-19T08:24:4343+01:00",
    businessId: "667d38938450ddf0f7ea2468",
    userType: "user",
    id: "669a1438a22dffc7489ce0fe",
  },
  {
    mfa: {
      enabled: false,
      isMandated: false,
      hasAuthenticatedWithPassword: false,
      secret: null,
    },
    passwordHistory: [],
    passwordChangedAt: null,
    resetPasswordToken: null,
    hasAcceptedInvite: false,
    status: "inactive",
    loginTimes: [],
    loginAttempts: 0,
    email: "kainy.chike-onyechi@fumiwo.io",
    role: {
      isCustom: false,
      permissions: [
        "onboard-users",
        "view-users",
        "delete-users",
        "manage-roles",
        "update-preferences",
      ],
      _id: "667d38938450ddf0f7ea246d",
      description: "Business default role",
      name: "Super Admin",
      slug: "super-admin",
      _createdAt: "2024-07-20T14:13:1212+01:00",
      _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
      id: "667d38938450ddf0f7ea246d",
    },
    inviteCode: "957432",
    business: {
      _id: "667d38938450ddf0f7ea2468",
      email: "hello@fumiwo.io",
      name: "Fumiwo Loan Co",
      type: "lender",
      addressInfo: {
        _id: "667d38938450ddf0f7ea2469",
        address: "45 Olu street",
        city: "lekki",
        state: "Lagos",
        country: "NG",
        dateAdded: "2024-06-27T10:01:55.682Z",
        lastModifiedAt: "2024-06-27T10:01:55.682Z",
      },
      contactPersonInfo: {
        phone: {
          countryCode: "234",
          mobile: "08123232323",
        },
        _id: "667d38938450ddf0f7ea246a",
        firstName: "Prosper",
        lastName: "Eravwuvieke",
        email: "prosper.eravwuvieke@fumiwo.io",
        role: "Software Engineer",
        dateAdded: "2024-06-27T10:01:55.682Z",
        lastModifiedAt: "2024-06-27T10:01:55.682Z",
      },
      role: {
        isCustom: false,
        isAdminRole: false,
        permissions: [
          "onboard-users",
          "view-users",
          "delete-users",
          "manage-roles",
          "update-preferences",
        ],
        _id: "667d38938450ddf0f7ea246d",
        description: "Business default role",
        name: "Super Admin",
        slug: "super-admin",
        businessId: "667d38938450ddf0f7ea2468",
        _createdAt: "2024-07-20T14:13:1212+01:00",
        _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
        id: "667d38938450ddf0f7ea246d",
      },
      _createdAt: "2024-07-20T14:13:1212+01:00",
      _lastModifiedAt: "2024-07-20T14:13:1212+01:00",
      businessId: "667d38938450ddf0f7ea2468",
      userType: "business",
      id: "667d38938450ddf0f7ea2468",
    },
    createdAt: "2024-07-12T11:17:02.720Z",
    lastModifiedAt: "2024-07-12T11:17:02.720Z",
    _createdAt: "2024-07-12T12:17:022+01:00",
    _lastModifiedAt: "2024-07-12T12:17:022+01:00",
    businessId: "667d38938450ddf0f7ea2468",
    userType: "user",
    id: "669110aea22dfff1f99cdfc5",
  },
];

export const dummyRoles = [
  {
    name: "Super Admin",
    value: "super-admin",
  },
  {
    name: "Manager",
    value: "manager",
  },
  {
    name: "Developer",
    value: "developer",
  },
  {
    name: "Admin",
    value: "admin",
  },
  {
    name: "Analyst",
    value: "analyst",
  },
  {
    name: "Reviewer",
    value: "reviewer",
  },
  {
    name: "Support",
    value: "support",
  },
  {
    name: "Compliance officer",
    value: "compliance-officer",
  },
];
