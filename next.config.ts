import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Desactiva optimización para evitar problemas con dominios externos
  },
};

export default nextConfig;