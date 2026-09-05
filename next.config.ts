import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "nomyx.io",
          },
        ],
        destination: "https://www.nomyx.io/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
