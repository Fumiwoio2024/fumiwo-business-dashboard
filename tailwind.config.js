/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        authBg: 'url("/src/assets/images/auth-bg.png")',
      },
      spacing: {
        "4.5": "18px"
      },
      fontSize: {
        xxs: '10px',
        semiNormal: '15px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primaryBlack: '#18191F',
        primaryBlue: '#011D7B',
        // primaryBlack: '#12141D',
        header: '#011456',
        primaryGreen: '#0BE781',
        linkGray: '#BAB7B7',
        paraGray: '#404F65',
        buttonGray: '#C4C4C426',
        contactGray: '#011556B2',
        logoGray: '#B9B3B3',
        alternativeGray: '#F4F7FA',
        offWhite: '#FAFAFA',
        buttonTextBlue: '#011556',
        inputLabel: '#061C3D',
        inputBorder: '#E6E8EC',
        bottomFooterBorder: '#8A8A8A',
        otpBox: "#EAECF0",
        sidebarBorder: '#EEF1F6',
        unFocusedText: '#A5B3CD',
        absoluteRed: "#FF0000",
        // appBg: '#FCFCFD',
        appBg: '#F4F7FA',
        onboardingBorder: '#D5DAE1',
        disabledInput: '#D0D5DD40',
        disabledInputText: '#71809673',
        secondaryButton: "#009851",
        graySubtext: '#718096',
        bannerWarning: '#FDB022',
        tableHeader: '#F1F4F9',
        warning: "#FDB100",
        warningBg: '#FCFCFD',
        warningBorder: '#FFEDC3',
        placeholder: '#A9A9A9',
        switchGreen: '#27AE60',
      },
      boxShadow: {
        username: '0px 14px 54px 0px #0000000F'
      }
    },
  },
  plugins: [],
}

