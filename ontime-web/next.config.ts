import os from "os";
import type { NextConfig } from "next";

const localIps = Object.values(os.networkInterfaces())
  .flat()
  .filter(
    (iface): iface is os.NetworkInterfaceInfo =>
      Boolean(iface && iface.family === "IPv4" && !iface.internal)
  )
  .map((iface) => iface.address);

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: Array.from(
    new Set(["192.168.1.7", "192.168.1.3", ...localIps, "localhost:3000", "*.local"])
  ),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
