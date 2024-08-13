import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(
    {
      themes: {
        light: {
          colors: {
            primary: "#24665E",
            onboardBg: "#E5E6EB",
            onboardInputBg: "#F2F2F4",
          },
        },
        dark: {
          colors: {
            primary: "#24665E",
            onboardBg: "#E5E6EB",
            onboardInputBg: "#F2F2F4",
          },
        },
      }
    }
  )],
}
