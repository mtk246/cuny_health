/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'dynamic-media-cdn.tripadvisor.com',
      'media-cdn.tripadvisor.com'
    ],
  },
  env: {
    OPEN_DATA_API_KEY_ID: process.env.OPEN_DATA_API_KEY_ID,
    OPEN_DATA_API_KEY_SECRET: process.env.OPEN_DATA_API_KEY_SECRET,
    OPEN_DATA_TOKEN: process.env.OPEN_DATA_TOKEN,
    OPEN_DATA_SECRET_TOKEN: process.env.OPEN_DATA_SECRET_TOKEN,
    GPT_API_URL: process.env.GPT_API_URL,
    GPT_X_RAPID_API_KEY: process.env.GPT_X_RAPID_API_KEY,
    GPT_X_RAPID_API_HOST: process.env.GPT_X_RAPID_API_HOST,
    TRIP_ADVISOR_API_URL: process.env.TRIP_ADVISOR_API_URL,
    TRIP_ADVISOR_API_HOST: process.env.TRIP_ADVISOR_API_HOST,
    TRIP_ADVISOR_API_GET_RESTAURANT_DETAILS_URL: process.env.TRIP_ADVISOR_API_GET_RESTAURANT_DETAILS_URL
  }
};

export default nextConfig;