/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        'black0.5' : "rgba(0,0,0,0.5)",
        "mainPink" : '#E7B3C0',
      }

    },
  },
  plugins: [],
}

