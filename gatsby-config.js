module.exports = {
  siteMetadata: {
    title: `Serge Modin portfolio`,
    description: `FrontEnd Developer `,
    author: `@jetleebruce`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-174947873-1",
      },
    },
  ],
}
