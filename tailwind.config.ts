import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // 深色科技主题色
        dark: {
          DEFAULT: "#0a0a1a",
          100: "#1a1a2e",
          200: "#16213e",
          300: "#0f3460",
        },
        // 霓虹色系
        neon: {
          blue: "#00d4ff",
          purple: "#8b5cf6",
          pink: "#f472b6",
          green: "#10b981",
          orange: "#f97316",
          yellow: "#fbbf24",
          cyan: "#06b6d4",
        },
      },
      animation: {
        "glow": "glow 2s ease-in-out infinite alternate",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "gradient": "gradient 8s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px currentColor, 0 0 10px currentColor" },
          "100%": { boxShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        "neon-blue": "0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 20px #00d4ff",
        "neon-purple": "0 0 5px #8b5cf6, 0 0 10px #8b5cf6, 0 0 20px #8b5cf6",
        "neon-pink": "0 0 5px #f472b6, 0 0 10px #f472b6, 0 0 20px #f472b6",
        "neon-green": "0 0 5px #10b981, 0 0 10px #10b981, 0 0 20px #10b981",
        "neon-orange": "0 0 5px #f97316, 0 0 10px #f97316, 0 0 20px #f97316",
        "glow-sm": "0 0 10px rgba(0, 212, 255, 0.3)",
        "glow-md": "0 0 20px rgba(0, 212, 255, 0.4)",
        "glow-lg": "0 0 30px rgba(0, 212, 255, 0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
