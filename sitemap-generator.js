const path = require("path");
const fs = require("fs");
const Sitemap = require("react-router-sitemap").default; // Ensure `.default` is used

// Define your base URL (update this if your domain changes)
const BASE_URL = "https://www.candibarnft.com";

// List all your dynamic and static routes
const routes = [
  "/",
  "/getstarted",
  "/Candi",
  "/nftswap",
  "/AstrologyZodiac",
  "/AstrologySign",
 "/AstrologySign",
  "/faq",
  "/horoscope/:[sign]", // Dynamic route example (replace with actual slugs)
];

// Generate sitemap
const generateSitemap = () => {
  const sitemap = new Sitemap(routes)
    .build(BASE_URL)
    // .save(path.resolve(__dirname, "src", "public", "sitemap.xml"));
    .save(path.resolve(__dirname, "public", "sitemap.xml"));

  console.log("✅ Sitemap generated successfully!");
};

// Run the script
generateSitemap();
