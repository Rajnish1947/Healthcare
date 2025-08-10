const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // Sharper V-shape (middle peak pulled higher)
        '.clip-v-shape': {
          clipPath: 'polygon(0 100%, 50% 0%, 100% 100%)',
        },
      });
    }),
  ],
};
