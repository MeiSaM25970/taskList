/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // useFileSystemPublicRoutes: false,
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
