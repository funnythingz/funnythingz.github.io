module.exports = {
  siteMetadata: {
    title: `Making Machinez`,
    description: `makingmachinezでは、ミニ四駆の改造や、ボアアップしたライブディオZXの原付改造カスタムブログ、インプレッション、ミニツーリングレポート公開してます`,
    author: `@makingmachinez`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
              quality: 90,
              linkImagesToOriginal: true,
            }
          },
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400
            }
          }
        ]
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Making Machinez`,
        short_name: `原付改造`,
        start_url: `/`,
        background_color: `#f90`,
        theme_color: `#f90`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-1882060-7",
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}
