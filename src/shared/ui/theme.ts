export const theme = {
  colors: {
    primary: "#000",
    secondary: "#fff",
    tertiary: "#edd51c",
    info: "#3b82f6",
    bg: {
      tertiary: "#a19013",
      info: "rgba(59, 130, 246, 0.3)",
    },
    status: {
      completed: "#28a745",
      blocked: "#dc3545",
      inProgress: "#ffc107",
      default: "#6c757d",
      bg: {
        completed: "rgba(40, 167, 69, 0.3)",
        blocked: "rgba(220, 53, 69, 0.3)",
        inProgress: "rgba(255, 193, 7, 0.3)",
        default: "rgba(108, 117, 125, 0.3)",
      },
    },
  },
  typography: {
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      md: "1rem", // 16px
      lg: "1.5rem", // 24px
      xl: "2rem", // 32px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  breakpoints: {
    xs: "320px",
    sm: "768px",
    md: "1024px",
    lg: "1280px",
    xl: "1440px",
  },
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
  },
  radii: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    full: "9999px",
  },
};

export type Theme = typeof theme;
