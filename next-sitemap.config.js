/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://felicitysolar.ng", // ✅ Use full URL with https
  generateRobotsTxt: true,
  generateIndexSitemap: true, // Optional, for multiple sitemap support
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
};
