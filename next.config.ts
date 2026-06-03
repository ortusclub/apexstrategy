import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/event",
        destination: "/event/security-leaders",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
