import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/stix-two-text/wght.css";
import "@fontsource-variable/stix-two-text/wght-italic.css";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const documentFontFamily =
  '"STIX Two Text Variable", "STIX Two Text", Georgia, "Times New Roman", serif';

const uiFontFamily =
  '"Inter Variable", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

export const theme = responsiveFontSizes(
  createTheme({
    colorSchemes: {
      light: {
        palette: {
          background: {
            default: "#fbfaf7",
            paper: "#ffffff",
          },
          primary: {
            main: "#7c3aed",
          },
          text: {
            primary: "#4a3429",
            secondary: "#7c6a5f",
          },
        },
      },
      dark: {
        palette: {
          background: {
            default: "#111018",
            paper: "#191724",
          },
          primary: {
            main: "#d8b4fe",
          },
          divider: "rgba(216, 180, 254, 0.26)",
          text: {
            primary: "#f5f3ff",
            secondary: "#c9c1dd",
          },
        },
      },
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily: documentFontFamily,
      fontWeightBold: 700,
    },
    components: {
      MuiTypography: { defaultProps: { component: "span" } },
      MuiStack: {
        defaultProps: { useFlexGap: true },
      },
      MuiButtonBase: { defaultProps: { disableTouchRipple: true } },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            fontFamily: uiFontFamily,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontFamily: uiFontFamily,
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            minHeight: "100%",
          },
          body: {
            minHeight: "100%",
          },
          "#root": {
            minHeight: "100%",
          },
        },
      },
    },
  }),
);
