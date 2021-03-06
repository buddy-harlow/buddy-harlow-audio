module.exports = {
  siteMetadata: {
    title: `Buddy Harlow Audio Co.`,
    description: `Howdy, my name's Buddy Harlow, and I am an audio engineer based out of Newport News, VA. `,
    url: "https://buddyharlowaudio.com",
    image: 'https://buddyharlowaudio.com/static/842a7780f8d96a2770bbcea09912fe4e/52258/Studio.jpg',
    author: "Buddy Harlow"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-site`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/BHAC-Nav.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
