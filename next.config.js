/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '192.168.1.69',
                port: '9000',
                pathname: '/**'
            },
        ],
    },
}

module.exports = nextConfig
