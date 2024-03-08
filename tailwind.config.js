/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "text-color": "var(--primary-text-color)",
        "input-border-color": "var(--input-border-color)",
      },
    },
  },
  plugins: [],
};
