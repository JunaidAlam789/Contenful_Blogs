module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7avu1zecjqfx`,
        accessToken: `ayxcsl9n8x2KLvJHwDtMouh-eLxFeRWudRqbCyGrty4`,
      },
    },
  ],
};
