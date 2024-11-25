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
        grastart: "var(--grastart)",
        graend: "var(--graend)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderColor: {
        card: "var(--card-border-color)"
      }
    },
  },
  plugins: [],
} satisfies Config;
