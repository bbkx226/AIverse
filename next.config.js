/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        unoptimized: true,
        domains: ['lh3.googleusercontent.com'],
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    }
}

module.exports = nextConfig
