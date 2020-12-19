const config = require('./config');
require('dotenv').config();

module.exports = {
    siteMetadata: {
        title:          config.siteTitle,
        description:    config.siteDesc,
        author:         config.siteAuthor,
        logoUrl:        config.siteLogoUrl,
    },

    pathPrefix: config.pathPrefix,
    
    proxy: {
        prefix: "/api",
        url: "http://127.0.0.1:7071",
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
                name:               config.manifestName,
                short_name:         config.manifestShortName,
                start_url:          config.pathPrefix || config.manifestStartUrl,
                background_color:   config.manifestBackgroundColor,
                theme_color:        config.manifestThemeColor,
                display:            config.manifestDisplay,
                icon:               config.manifestIcon, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-lodash`,
        `gatsby-plugin-netlify`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-social-cards`,

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
};
