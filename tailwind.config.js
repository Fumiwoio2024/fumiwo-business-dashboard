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

      fontSize: {
        xxs: '10px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primaryBlack: '#18191F',
        // primaryBlack: '#12141D',
        textHeader: '#011456',
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
        otpBox: "#EAECF0"
      }
    },
  },
  plugins: [],
}

