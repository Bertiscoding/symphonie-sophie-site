/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
    },
  },
  plugins: [],
};
