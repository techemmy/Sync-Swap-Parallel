/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
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
    colors: {
      white: "rgba(var(--white))",
    },
    extend: {
      backgroundImage: {
        page: "var(--background)",
        zKTextGradient: "linear-gradient(var(--zKTextGradient))",
        homePage: "linear-gradient(62deg,#c7c1ff,#ddc8ff)",
      },
      fontFamily: {
        Public: "Poppins, sans-serif",
      },
      boxShadow: {
        DEFAULT: "var(--box-shadow)",
        light: "rgba(0, 0, 0, 0.1) 0px 0px 48px -50px",
        hover: "var(--box-shadow-hover)",
      },
      colors: {
        navIcon: {
          DEFAULT: "rgba(78, 81, 183)",
          foreground: "rgb(81, 85, 166)",
        },
        border: "rgba(var(--border))",
        input: "hsl(var(--input))",
        ring: "rgb(var(--ring))",
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "rgba(var(--primary))",
          foreground: "rgba(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "rgba(var(--accent))",
          foreground: "rgba(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "rgba(var(--card))",
          foreground: "rgba(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "portfolio-gradient": {
          "0%": { "background-position": "0 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0 50%" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "portfolio-gradient": "portfolio-gradient 15s ease infinite",
        "fade-in": "fade-in .25s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
