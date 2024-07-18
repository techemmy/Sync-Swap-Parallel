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
    extend: {
      backgroundImage: {
        zKTextGradient: "linear-gradient(var(--zKTextGradient))",
        homePage: "linear-gradient(62deg,#c7c1ff,#ddc8ff)",
      },
      keyframes: {
        "portfolio-gradient": {
          // not working yet
          "0%": { "background-position": "0 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0 50%" },
        },
      },
      animation: {
        "portfolio-gradient": "portfolio-gradient 15s ease infinite",
      },
      fontFamily: {
        Public: "Poppins, sans-serif",
      },
      boxShadow: {
        light: "0px 0px 48px -50px",
      },
      colors: {
        navIcon: {
          DEFAULT: "rgba(78, 81, 183, 0.1)",
          foreground: "rgb(81, 85, 166)",
        },
        border: "rgba(var(--border))",
        input: "hsl(var(--input))",
        ring: "rgb(var(--ring))",
        background: "rgb(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "rgba(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
          foreground: "rgb(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
