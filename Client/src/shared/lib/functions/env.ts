import { getEnv } from "@shared/lib/functions/getEnv";

// Convenience helper functions for common cases
export const env = {
	string: (key: string, defaultValue?: string, required = false) =>
		getEnv(key, { defaultValue, type: 'string', required }),
	number: (key: string, defaultValue?: number, required = false) =>
		getEnv(key, { defaultValue, type: 'number', required }),
	boolean: (key: string, defaultValue?: boolean, required = false) =>
		getEnv(key, { defaultValue, type: 'boolean', required }),
	json: <T = unknown>(key: string, defaultValue?: T, required = false) =>
		getEnv<T>(key, { defaultValue, type: 'json', required }),
	enum: <T extends string>(key: string, allowedValues: readonly T[], defaultValue?: T, required = false) =>
		getEnv(key, { defaultValue, allowedValues, required }),
	isDev: () => getEnv('NODE_ENV', { defaultValue: 'development' }) === 'development',
	isProd: () => getEnv('NODE_ENV', { defaultValue: 'development' }) === 'production',
};
