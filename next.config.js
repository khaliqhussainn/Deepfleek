/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  eslint: {
    // This will disable ESLint during builds if you want to deploy quickly
    // Remove this if you want to fix all linting issues instead
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig