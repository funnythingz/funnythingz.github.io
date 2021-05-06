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
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
