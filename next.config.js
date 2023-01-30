/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    MONGODB_URL: "mongodb://localhost/halogate"
  }
}

module.exports = nextConfig
