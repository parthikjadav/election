/*@type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["res.cloudinary.com","pngbuy.com"]
    },
    transpilePackages: ['@mui/x-charts']
};

export default nextConfig;
