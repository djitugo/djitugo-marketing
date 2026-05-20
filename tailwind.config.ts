import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          0: "var(--ink-0)",
          1: "var(--ink-1)",
          2: "var(--ink-2)",
          3: "var(--ink-3)",
          4: "var(--ink-4)",
          5: "var(--ink-5)"
        },
        paper: {
          DEFAULT: "var(--paper)",
          2: "var(--paper-2)"
        },
        line: "var(--line)",
        "line-soft": "var(--line-soft)",
        "line-inv": "var(--line-inv)",
        focus: "var(--focus)"
      },
      fontFamily: {
        sans: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"]
      },
      fontSize: {
        "display-xl": ["clamp(3.25rem, 9vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.035em", fontWeight: "600" }],
        "display-l": ["clamp(2.25rem, 5.5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "500" }],
        "heading-1": ["clamp(1.5rem, 2.6vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "heading-2": ["clamp(1.125rem, 1.4vw, 1.5rem)", { lineHeight: "1.2", letterSpacing: "-0.012em", fontWeight: "500" }],
        "body-l": ["1.0625rem", { lineHeight: "1.55", fontWeight: "400" }],
        "body": ["0.9375rem", { lineHeight: "1.65", fontWeight: "400" }],
        "caption": ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.04em", fontWeight: "500" }],
        "mono-label": ["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.06em", fontWeight: "400" }]
      },
      maxWidth: {
        site: "1440px"
      },
      transitionTimingFunction: {
        "out-quint": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)"
      },
      animation: {
        "marquee": "marquee 32s linear infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
