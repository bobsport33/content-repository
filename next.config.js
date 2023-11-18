/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: {
            ssr: true,
            displayName: true,
            fileName: true,
        },
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    images: {
        domains: ["picsum.photos"],
    },
};

module.exports = nextConfig;
