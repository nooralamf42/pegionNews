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
        primary: 'red',
        secondry: '#1e40af'
      }
    },
    fontSize,
    screens,
  },
  plugins: [fluid({
    checkSC144: false
}),],
}