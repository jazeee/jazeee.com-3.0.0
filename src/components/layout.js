import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Header } from "./header";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../utils/colors";

export const theme = createTheme({
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

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header siteTitle={data.site.siteMetadata.title || 'Jaz Singh'} />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </ThemeProvider>
    </>
  );
};
