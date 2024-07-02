import type { Config } from "tailwindcss";


const caribbean_current = { DEFAULT: '#006d77', 100: '#001617', 200: '#002b2f', 300: '#004146', 400: '#00565e', 500: '#006d77', 600: '#00b4c4', 700: '#13ebff', 800: '#62f2ff', 900: '#b0f8ff' };
const tiffany_blue = { DEFAULT: '#83c5be', 100: '#152c2a', 200: '#2a5954', 300: '#3f857e', 400: '#56afa6', 500: '#83c5be', 600: '#9bd0cb', 700: '#b4dcd8', 800: '#cde7e5', 900: '#e6f3f2' };
const alice_blue = { DEFAULT: '#edf6f9', 100: '#183d49', 200: '#307991', 300: '#5badc8', 400: '#a3d1e0', 500: '#edf6f9', 600: '#f0f7fa', 700: '#f4f9fb', 800: '#f7fbfc', 900: '#fbfdfe' };
const pale_dogwood = { DEFAULT: '#ffddd2', 100: '#5d1700', 200: '#ba2e00', 300: '#ff5117', 400: '#ff9774', 500: '#ffddd2', 600: '#ffe3da', 700: '#ffeae3', 800: '#fff1ed', 900: '#fff8f6' };
const atomic_tangerine = { DEFAULT: '#e29578', 100: '#39180c', 200: '#723018', 300: '#ac4824', 400: '#d6673f', 500: '#e29578', 600: '#e8aa93', 700: '#eebfae', 800: '#f4d4c9', 900: '#f9eae4' };
const black = { DEFAULT: '#000000', 100: '#000000', 200: '#000000', 300: '#000000', 400: '#000000', 500: '#000000', 600: '#333333', 700: '#666666', 800: '#999999', 900: '#cccccc' };
const white = { DEFAULT: '#ffffff', 100: '#333333', 200: '#666666', 300: '#999999', 400: '#cccccc', 500: '#ffffff', 600: '#ffffff', 700: '#ffffff', 800: '#ffffff', 900: '#ffffff' };
const anti_flash_white = { DEFAULT: '#e9ecef', 100: '#282f37', 200: '#505f6e', 300: '#7c8ea0', 400: '#b3bec8', 500: '#e9ecef', 600: '#eef1f3', 700: '#f3f4f6', 800: '#f7f8f9', 900: '#fbfbfc' };
const penn_red = { DEFAULT: '#9d0208', 100: '#1f0001', 200: '#3e0103', 300: '#5d0104', 400: '#7d0206', 500: '#9d0208', 600: '#e1030b', 700: '#fc2f36', 800: '#fd7479', 900: '#febabc' };
const dartmouth_green = { DEFAULT: '#2d6a4f', 100: '#091510', 200: '#122b20', 300: '#1c4030', 400: '#255640', 500: '#2d6a4f', 600: '#439d75', 700: '#69bf98', 800: '#9bd4ba', 900: '#cdeadd' };


const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: caribbean_current[500],
        brandVariant: caribbean_current[300],
        onBrand: white[500],
        brandLight: tiffany_blue[700],
        brandLightVariant: tiffany_blue[500],
        onBrandLight: caribbean_current[500],
        muted: alice_blue[500],
        background: white[500],
        onBackground: black[500],
        neutral: anti_flash_white[500],
        onNeutral: anti_flash_white[300],
        accent: atomic_tangerine[500],
        accentVariant: atomic_tangerine[700],
        onAccent: black[500],
        accentLight: pale_dogwood[700],
        accentLightVariant: pale_dogwood[500],
        onAccentLight: atomic_tangerine[500],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;