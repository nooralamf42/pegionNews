import fluid, { extract, screens, fontSize } from 'fluid-tailwind'
/** @type {import('tailwindcss').Config} */
export default {
  content: {files: [
    "./src/**/*.{js,ts,jsx,tsx}"],
    extract
  },
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',
      }
    },
    fontSize,
    screens,
  },
  plugins: [fluid({
    checkSC144: false
}),],
}