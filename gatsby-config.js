module.exports = {
  siteMetadata: {
    title: `QFinance`,
    description: `DeFi ETF investment pools on Ethereum. Fully trustless, permissionless, and decentralized.`,
    author: `@QFinanceDeFi`,
    logoUrl: "src/images/qlogo512.png",
    siteUrl: `https://qfihub.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "QFinance Hub",
        short_name: "QFI Hub",
        start_url: "https://qfihub.com",
        background_color: "black",
        theme_color: "#BA9860",
        display: "standalone",
        icon: "src/images/favicon-32x32.png",
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-social-cards`,
    `gatsby-plugin-gatsby-cloud`
  ],
}
