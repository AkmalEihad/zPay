/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'zpay.my',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'logos-world.net',
                port: '',
                pathname: '**',
            },
        ],
    },
}

export default nextConfig