/** @type {import('next').NextConfig} */

import { types } from 'util';

const hostnames = [
    'dwgyu36up6iuz.cloudfront.net',
'media.wired.com']

const nextConfig = {
    images: {
        remotePatterns: hostnames.map(hostname => ({
            protocol: 'https',
            hostname
        }))
    },
    typescript: {
        ignoreBuildErrors: true
    }
};

export default nextConfig;
