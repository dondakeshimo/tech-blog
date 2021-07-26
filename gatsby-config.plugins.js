const config = require('./config')
const feedPlugin = require('./gatsby-config.plugins.feed')

module.exports = [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-less',
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
        name: 'dondakeshimoの丸太',
        short_name: 'dondakeshimo',
        start_url: '/',
        background_color: '#0C2744',
        theme_color: '#0C2744',
        display: 'standalone',
        icon: 'src/images/about/snafkin.png', // This path is relative to the root of the site.
        legacy: true, // this will add apple-touch-icon links to <head>. Required for versions prior to iOS 11.3.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 80,
              showCaptions: true,
              linkImagesToOriginal: false
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-katex'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: config.defaultLanguage,
        useLangKeyLayout: false
      }
    },
    feedPlugin,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
        resolve: "gatsby-plugin-google-tagmanager",
        options: {
            id: process.env.GTM_ID,

            // Include GTM in development.
            //
            // Defaults to false meaning GTM will only be loaded in production.
            includeInDevelopment: false,

            // datalayer to be set before GTM is loaded
            // should be an object or a function that is executed in the browser
            //
            // Defaults to null
            defaultDataLayer: { platform: "gatsby" },

            // Specify optional GTM environment details.
            gtmAuth: process.env.GTM_AUTH,
            gtmPreview: "env-1",
            dataLayerName: "dataLayer",

            // Name of the event that is triggered
            // on every Gatsby route change.
            //
            // Defaults to gatsby-route-change
            // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
            // Defaults to false
            enableWebVitalsTracking: true,
        },
    },
]
