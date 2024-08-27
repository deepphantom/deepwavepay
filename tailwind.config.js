import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#24665E",
            secondary: "#CDF463",
            onboardBg: "#E5E6EB",
            onboardWhite: "#F2F2F4",
            onboardFaintText: "#6B7280",
            dashboardBg: "#EFF3F4",
            purpleColor: "#CDC4FE",
            blueColor: "#AAC8FE",
            greenColor: "#93E3B8",
          },
        },
        dark: {
          colors: {
            primary: "#24665E",
            secondary: "#CDF463",
            onboardBg: "#E5E6EB",
            onboardWhite: "#F2F2F4",
            onboardFaintText: "#6B7280",
            dashboardBg: "#121212",
            purpleColor: "#CDC4FE",
            blueColor: "#AAC8FE",
            greenColor: "#93E3B8",
          },
        },
      },
    }),
  ],
};
