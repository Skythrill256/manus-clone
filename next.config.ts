import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['files.manuscdn.com'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [

      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: 'unsplash.com'

      },
      {
        protocol: 'https',
        hostname: 'files.manuscdn.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
