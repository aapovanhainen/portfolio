/** @type {import('next').NextConfig} */
const repoName = "portfolio";

const nextConfig = {
  output: "export",
  trailingSlash: true,

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
