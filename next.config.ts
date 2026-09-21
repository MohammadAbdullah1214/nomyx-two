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
      {
        source: "/company-agreements",
        destination: "/legal-documents/msa",
        permanent: true,
      },
      {
        source: "/evergreen-funds",
        destination: "/evergreen-open-ended-funds",
        permanent: true,
      },
      {
        source: "/tokenizing-loans",
        destination: "/private-credit-syndication",
        permanent: true,
      },
      {
        source: "/product-resources",
        destination: "/technical-documentation",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "/technical-documentation",
        permanent: true,
      },
      {
        source: "/resources/:path*",
        destination: "/technical-documentation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

