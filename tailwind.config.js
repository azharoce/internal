/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          grey: "#eeeeee",
          bordercolor: "#bdbdbd",
          primarynormal: "#2ebf7d",
          textcolor: "#001d45",
          mutedtext: "#757575",
          infolighthover: "#d9edff",
          infodark: "#0066bf",
          dangerlighthover: "#f8dcdc",
          dangerdark: "#9a1212",
        },
        boxShadow: {
          card: "0px 10px 20px -2px rgba(0, 0, 0, 0.04), 0px 2px 15px -3px rgba(0, 0, 0, 0.07)",
          navbar:
            "0px 2px 4px 0px rgba(0, 0, 0, 0.05), 0px 4px 12px 0px rgba(0, 0, 0, 0.07)",
        },
      },
    },
    plugins: [],
  };