/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      }
    ],
    unoptimized: true  // Add this for local images if needed
  },
  webpack(config:any) {
    console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
    console.log('Token:', process.env.SANITY_API_TOKEN);
    return config;
  },
};

export default nextConfig;
