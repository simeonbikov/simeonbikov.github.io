/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark1": "var(--dark1-color)",
        "dark2": "var(--dark2-color)",
        "light1": "var(--light1-color)",
        "light2": "var(--light2-color)",
        "primary1": "var(--primary1-color)",
        "primary2": "var(--primary2-color)",
        "primary3": "var(--primary3-color)",
        "secondary1": "var(--secondary1-color)",
        "secondary2": "var(--secondary2-color)",
      },
    },
  },
  plugins: [],
};

