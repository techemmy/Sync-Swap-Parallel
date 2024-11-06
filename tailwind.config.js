/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: {
    relative: true,
    files: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./index.html",
    ],
  },
  prefix: "",
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        "wallet-options": "repeat(auto-fill, minmax(195px, 1fr))",
        bridges: "repeat(auto-fill,minmax(290px,1fr))",
      },
      backgroundImage: {
        page: "var(--background)",
        zKTextGradient: "linear-gradient(var(--zKTextGradient))",
        colorOverflow:
          "radial-gradient(19.49% 58.52% at 50% 0,rgba(249,196,60,.3) 0,rgba(231,166,1,0) 100%),radial-gradient(50% 50% at 100% 100%,#520aeb 10.27%,rgba(159,115,255,0) 100%),radial-gradient(77.86% 77.86% at 100% 0,#00a7ff 0,rgba(0,166,254,.12) 100%),radial-gradient(50% 50% at 0 0,#ff8d6c 0,rgba(255,92,0,.6) 100%),radial-gradient(70.24% 70.24% at 0 100%,#e81d72 0,rgba(255,0,0,0) 100%)",
      },
      fontFamily: {
        Public: "Poppins, sans-serif",
      },
      boxShadow: {
        DEFAULT: "var(--box-shadow)",
        light: "rgba(0, 0, 0, 0.1) 0px 0px 48px -50px",
        thin: "var(--box-shadow-thin)",
        hover: "var(--box-shadow-hover)",
        carouselBtn: "var(--box-shadow-carousel-btn)",
      },
      colors: {
        carouselBtn: "rgba(var(--carousel-btn))",
        stakingSponsor: "rgb(240, 58, 68)",
        border: "rgba(var(--border))",
        input: "hsl(var(--input))",
        ring: "rgb(var(--ring))",
        button: "rgba(var(--button-hover))",
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "rgba(var(--primary))",
          foreground: "rgba(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "rgba(var(--secondary))",
          foreground: "rgba(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "rgba(var(--muted))",
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
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "portfolio-gradient": {
          "0%": {
            "background-position": "0 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0 50%",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-in-out": {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        "slide-in-from-right": {
          "0%": {
            transform: "translateX(500px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "portfolio-gradient": "portfolio-gradient 15s ease infinite",
        "fade-in": "fade-in .25s ease-in-out",
        "fade-in-out-10": "fade-in-out 10s linear infinite",
        "fade-in-out-15": "fade-in-out 12s linear infinite",
        "fade-in-out-20": "fade-in-out 14s linear infinite",
        "slide-in-from-right": "slide-in-from-right .25s linear",
        spin: "spin 8s linear infinite",
        typewriter: "typewriter 2s steps(11) forwards",
        caret:
          "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
