/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.ibb.co",
      "image.shutterstock.com",
      "workdrive.zohoexternal.com",
      "i.postimg.cc",
      "www.iconpacks.net",
      "icon-library.com",
      "cdn.icon-icons.com",
      "icons.veryicon.com",
      'ibb.co',
    ],
  },
  swcMinify: true,
}

module.exports = nextConfig;
