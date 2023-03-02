import { createMuiTheme } from "@mui/material";

// Also check `gatsby-config.js`
export const PRIMARY_COLOR = "#2F2001";
export const SECONDARY_COLOR = "#0094FF";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
    error: {
      main: '#f00',
    },
    background: {
      default: "#000",
    },
  },
});
