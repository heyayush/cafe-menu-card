let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development";

console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env.${activeEnv}`
});

module.exports = {
  siteMetadata: {
    appbarHeader: "Ministry of Bar",
    title: " Ministry of Bar - Today's special",
    author: "Ayush Sharma",
    favicon: "/ico/drinks32x32.png"
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/theme/typography`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        worksheetTitle: process.env.WORKSHEET_TITLE,
        credentials: JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS)
      }
    }
  ]
};
