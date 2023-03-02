import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import CssBaseline from "@mui/material/CssBaseline";
import { MuiThemeProvider } from "@mui/material/styles";
// import Container from "@mui/material/Container";
import { theme } from "../styles/theme";
import "../styles/global.css";

import { Header } from "./header";

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
      <MuiThemeProvider theme={theme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </MuiThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
