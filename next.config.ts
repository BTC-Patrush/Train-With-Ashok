import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    // remotePatterns is the correct property for whitelisting external domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // <-- ADD THIS HOSTNAME
        // You can keep port and pathname if you want to be extra specific, but these defaults are usually fine
        port: '',
        pathname: '/**',
      },
      // If you are using local images, you don't need to configure anything else here.
    ],
  },
}
export default nextConfig

