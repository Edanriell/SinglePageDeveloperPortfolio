import { env } from "@shared/lib/functions/env";

export const BASE_URL = env.string(
	process.env.NEXT_PUBLIC_API_BASE_URL!,
	"http://localhost:8080/api"
);
