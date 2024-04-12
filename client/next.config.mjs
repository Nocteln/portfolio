/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: [
    {
      key: "Access-Control-Allow-Origin",
      value: "https://nocteln.fr",
    },
  ],
};

export default nextConfig;
