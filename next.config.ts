import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Anyone hitting the old /event URL gets sent to the new slug
        source: "/event",
        destination: "/event/security-leaders",
        permanent: false,
      },
      {
        // Backwards-compat: the previous capitalised slug
        source: "/event/Security-leaders",
        destination: "/event/security-leaders",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
