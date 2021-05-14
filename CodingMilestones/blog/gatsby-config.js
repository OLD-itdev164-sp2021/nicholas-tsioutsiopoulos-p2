// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`
// });

module.exports = {
  siteMetadata: {
    title: `Coding Milestones`,
    description: `ITDev-164 Gatsby Blog`,
    author: `Nicholas Tsioutsiopoulos`,
    contact: {
      name: 'Nikko Tsioutsiopoulos',
      company: 'Blog City',
      address:'PO Box 7575'
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `u96kzfvbq862`,
        accessToken: `WMgJaRcDexg9WW-1h-8HsML8xOVm68fFBmkncg8c_eE`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
