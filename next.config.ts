import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Anyone hitting the old /event URL gets sent to the new slug
        source: "/event",
        destination: "/event/Security-leaders",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
