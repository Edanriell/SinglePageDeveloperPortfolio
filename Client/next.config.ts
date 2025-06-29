import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "8084", // Updated to match your API port
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname: "localhost",
				port: "8084",
				pathname: "/**"
			}
		]
	}
};

export default nextConfig;
