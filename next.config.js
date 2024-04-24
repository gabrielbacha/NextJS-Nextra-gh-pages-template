/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/$REPO" : "";
const titleSuffix = "– gabrielbacha"

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  titleSuffix: titleSuffix,
  assetPrefix,
  basePath: assetPrefix,
  output: "export",
};

module.exports = {
  ...withNextra(),
  ...nextConfig,
};