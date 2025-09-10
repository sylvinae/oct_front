import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#2E7D9A",
      light: "#5BA4C2",
      dark: "#1F5A73",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#4CAF50",
      light: "#81C784",
      dark: "#388E3C",
      contrastText: "#FFFFFF",
    },

    error: {
      main: "#F44336",
      light: "#EF5350",
      dark: "#C62828",
      contrastText: "#FFFFFF",
    },

    warning: {
      main: "#FF9800",
      light: "#FFB74D",
      dark: "#F57C00",
      contrastText: "#000000",
    },

    info: {
      main: "#2196F3",
      light: "#64B5F6",
      dark: "#1976D2",
      contrastText: "#FFFFFF",
    },

    success: {
      main: "#4CAF50",
      light: "#81C784",
      dark: "#388E3C",
      contrastText: "#FFFFFF",
    },

    background: {
      default: "#F8FAFB",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#1A202C",
      secondary: "#718096",
      disabled: "#A0AEC0",
    },

    divider: "#E2E8F0",

    action: {
      active: "#2E7D9A",
      hover: "rgba(46, 125, 154, 0.04)",
      selected: "rgba(46, 125, 154, 0.08)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      focus: "rgba(46, 125, 154, 0.12)",
    },
  },

  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

    h1: { fontSize: "2.125rem", fontWeight: 500, color: "#1A202C" },
    h2: { fontSize: "1.875rem", fontWeight: 500, color: "#1A202C" },
    h3: { fontSize: "1.5rem", fontWeight: 500, color: "#1A202C" },
    h4: { fontSize: "1.25rem", fontWeight: 500, color: "#1A202C" },
    h5: { fontSize: "1.125rem", fontWeight: 500, color: "#1A202C" },
    h6: { fontSize: "1rem", fontWeight: 500, color: "#1A202C" },

    body1: { fontSize: "1rem", color: "#1A202C" },
    body2: { fontSize: "0.875rem", color: "#718096" },

    button: { fontSize: "0.875rem", fontWeight: 500, textTransform: "none" },
    caption: { fontSize: "0.75rem", color: "#718096" },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 500,
      textTransform: "uppercase",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "8px 16px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 2px 4px rgba(46, 125, 154, 0.2)",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #E2E8F0",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
