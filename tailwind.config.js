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
        "ss-green-mute": "#AFD0A4",
        "ss-black": "#181F25",
        "ss-bordeaux": "#92374D",
        "ss-error": "#EA526F",
        "ss-success": "#69B578"
      },
      backgroundImage: {
        'ss-gradient-dark': 'linear-gradient(180deg, #181F25 30%, #181F25 30%)',
        'ss-gradient-light': 'linear-gradient(180deg, #F8EDEB 30%, #F8EDEB 30%)',

      },
      fontSize: {
        'ss-h1': ['36px', { fontWeight: '600' }],
        'ss-h2': ['24px', { fontWeight: '600' }],
        'ss-h3': ['24px', { fontWeight: '500' }],
        'ss-p-med': ['16px', { fontWeight: '500' }],
        'ss-p-reg': ['16px', { fontWeight: '400' }],
        'ss-p-smbold': ['16px', { fontWeight: '600' }],
        'ss-p-xs-smbold': ['12px', { fontWeight: '600' }],
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [],
};
