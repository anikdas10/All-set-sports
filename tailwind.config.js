/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
      "2xl": "1400px",
    },
    extend: {},
    fontFamily: {
      edu: ["Edu AU VIC WA NT Hand", "cursive"],
    },
    container: {
      center: true,
      padding: {
        default: "1rem",
        md: "2rem",
      },
    },
  },
  plugins: [require("daisyui")],
};

