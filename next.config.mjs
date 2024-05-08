/*@type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["pngbuy.com"]
    },
    transpilePackages: ['@mui/x-charts']
};

export default nextConfig;
