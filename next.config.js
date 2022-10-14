/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    trailingSlash: true,
    rules: [
        {
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/
            },
            use: ['@svgr/webpack']
        }
    ]
};
