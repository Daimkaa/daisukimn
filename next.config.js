/**@type {import('next').NextConfig}*/
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["kohuk.com", "localhost"],
    },
    trailingSlash: true,
    async redirects() {
    return [
      {
        source: '/blog/:path*',
        has: [{
            type: 'header',
            key: 'referer',
            value: 'https://l.facebook.com(.*)',
        },],
        destination: 'https://kohuk.com/:path*',
        permanent: false,
      },
      {
        source: '/blog/:path*',
        has: [{
            type: 'header',
            key: 'referer',
            value: 'https://lm.facebook.com(.*)',
        },],
        destination: 'https://kohuk.com/:path*',
        permanent: false,
      },
      {
        source: '/blog/:path*',
        has: [{
            type: 'header',
            key: 'referer',
            value: 'https://m.facebook.com(.*)',
        },],
        destination: 'https://kohuk.com/:path*',
        permanent: false,
      },
      {
        source: '/blog/:path*',
        has: [{
            type: 'header',
            key: 'referer',
            value: 'http://m.facebook.com(.*)',
        },],
        destination: 'https://kohuk.com/:path*',
        permanent: false,
      },
    ]
  },
};

module.exports = nextConfig;
