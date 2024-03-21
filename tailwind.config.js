function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '960px',
      },
      colors: {
        khalid: withOpacity("--khalid"),
        primary: "rgba(var(--primary))",
        border: "var(--border)",
        base: {
          DEFAULT: "var(--text-base)",
          1: "var(--text-base)",
        },
        muted: "var(--muted)",
        accent: {
          DEFAULT: "var(--accent)",
          1: "var(--accent)",
          2: "var(--accent2)",
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
};
