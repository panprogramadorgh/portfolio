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
        "background-heavy": "var(--background-heavy)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "foreground-light": "var(--foreground-light)",
        grastart: "var(--grastart)",
        graend: "var(--graend)",
        glow: "var(--glow)",
      },
      borderColor: {
        card: "var(--card-border-color)"
      }
    },
  },
  plugins: [],
} satisfies Config;
