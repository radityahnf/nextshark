/** @type {import('next').NextConfig} */

const hostnames = [
    'dwgyu36up6iuz.cloudfront.net',
'media.wired.com']

const nextConfig = {
    images: {
        remotePatterns: hostnames.map(hostname => ({
            protocol: 'https',
            hostname
        }))
    }
};

export default nextConfig;
