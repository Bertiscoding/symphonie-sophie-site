/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ss-seashell": "#F8EDEB",
        "ss-champagne": "#F9DCC4",
        "ss-peach": "#FEC89A",
        "ss-green": "#C3E6B7",
        "ss-black": "#181F25",
        "ss-bordeaux": "#92374D",
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, #181F25 30%, #181F25 30%)',
      },
      fontSize: {
        'ss-h1': ['36px', { fontWeight: '500' }],
      },
    },
  },
  plugins: [],
};
