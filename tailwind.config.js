/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    safelist:[

      /^bg-/,
      /^to-/,
      /^from-/

    ]

  },
  theme: {
    extend: {},
  },
  plugins: [],
}