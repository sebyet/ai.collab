import type { Config } from "tailwindcss";

const oxford_blue = { DEFAULT: '#001d3d', 100: '#00060c', 200: '#000c18', 300: '#001225', 400: '#001831', 500: '#001d3d', 600: '#004997', 700: '#0074f1', 800: '#4ba2ff', 900: '#a5d1ff' }; 
const yale_blue = { DEFAULT: '#003566', 100: '#000b14', 200: '#001529', 300: '#00203d', 400: '#002a52', 500: '#003566', 600: '#005fb8', 700: '#0a89ff', 800: '#5cb0ff', 900: '#add8ff' };
const mikado_yellow = { DEFAULT: '#ffc300', 100: '#332700', 200: '#664e00', 300: '#997500', 400: '#cc9c00', 500: '#ffc300', 600: '#ffcf33', 700: '#ffdb66', 800: '#ffe799', 900: '#fff3cc' };
const gold = { DEFAULT: '#ffd60a', 100: '#352c00', 200: '#6a5800', 300: '#9f8500', 400: '#d4b100', 500: '#ffd60a', 600: '#ffde3b', 700: '#ffe76c', 800: '#ffef9d', 900: '#fff7ce' };
const alice_blue = { DEFAULT: '#edf6f9', 100: '#183d49', 200: '#307991', 300: '#5badc8', 400: '#a3d1e0', 500: '#edf6f9', 600: '#f0f7fa', 700: '#f4f9fb', 800: '#f7fbfc', 900: '#fbfdfe' };
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
        brand: oxford_blue[500],
        brandVariant: oxford_blue[300],
        onBrand: white[500],
        brandLight: yale_blue[700],
        brandLightVariant: yale_blue[500],
        onBrandLight: white[500],
        muted: alice_blue[500],
        background: white[500],
        onBackground: black[500],
        neutral: anti_flash_white[500],
        onNeutral: anti_flash_white[300],
        accent: mikado_yellow[500],
        accentVariant: mikado_yellow[700],
        onAccent: black[500],
        accentLight: gold[700],
        accentLightVariant: gold[500],
        onAccentLight: mikado_yellow[500],
        destructive: penn_red[500],
        success: dartmouth_green[500]
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