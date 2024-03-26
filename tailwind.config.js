/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "var(--background-color)",
        "primary-color": "var(--primary-color)",
        "primary-text-color": "var(--primary-text-color)",
        "secondary-text-color": "var(--secondary-text-color)",
        "input-border-color": "var(--input-border-color)",
        "light-blue-color": "var(--light-blue-color)",
        "dark-blue-color": "var(--dark-blue-color)",
      },
    },
  },
  plugins: [],
};
