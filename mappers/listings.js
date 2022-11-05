const config = require("config");

const mapper = (listing) => {
  const baseUrl = config.get("assetsBaseUrl");
  const port = process.env.PORT || config.get("port");
  //const baseUrl = `http://${process.env.HOSTNAME}:${port}/assets/`;
  const mapImage = (image) => ({
    url: `${baseUrl}${image.fileName}_full.jpg`,
    thumbnailUrl: `${baseUrl}${image.fileName}_thumb.jpg`,
  });

  return {
    ...listing,
    images: listing.images.map(mapImage),
  };
};

module.exports = mapper;
