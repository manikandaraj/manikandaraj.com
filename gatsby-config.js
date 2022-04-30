module.exports = {
  siteMetadata: {
    name:'Manikandaraj Srinivasan',
    shortname:'Manikandaraj Srinivasan',
    title: 'Manikandaraj Srinivasan',
    siteUrl: 'https://www.manikandaraj.com',
    description: 'Manikandaraj Srinivasan',
    author: 'Manikandaraj Srinivasan'
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "G-XDFBZL9LF2"
      }
    },
    {
      resolve:'gatsby-plugin-sharp',
      options: {
        "icon" : "static/fav-icons/android-chrome-512x512.png"
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon" : "static/fav-icons/android-chrome-512x512.png"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./static/fav-icons/"
      },
    __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }
  ]
};
