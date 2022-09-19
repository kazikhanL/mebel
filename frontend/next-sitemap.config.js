module.exports = {
    siteUrl: process.env.SITE_URL,
    generateRobotsTxt: false, // TODO: изменить на true перед релизом
    sitemapSize: 7000,
    exclude: ["/cart", "/favorites"],
};
