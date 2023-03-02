/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Jaz Singh`,
    description: `Jaz Singh: a software engineer and technical lead. I work with React, TypeScript, ES6+, PostgreSQL, MySQL.`,
    author: `@jazeee`,
    keywords: `jazeee Jaz Software Engineer React ES6 JavaScript PostgreSQL MySQL Mongo Meteor Java c++`,
    siteUrl: "https://jazeee.com",
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-material-ui",
    },
    // `gatsby-plugin-lodash`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jaz Singh`,
        short_name: `jazeee`,
        start_url: `/`,
        background_color: `#2F2001`,
        theme_color: `#2F2001`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // // this (optional) plugin enables Progressive Web App + Offline functionality
    // // To learn more, visit: https://gatsby.dev/offline
    // // `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-146470817-1",
    //   },
    // },
  ],
};
