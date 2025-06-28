type EnvType = "string" | "number" | "boolean" | "json";

interface GetEnvOptions<T = unknown> {
	defaultValue?: T;
	type?: EnvType;
	required?: boolean;
	allowedValues?: readonly string[];
}

export function getEnv<T = string>(key: string, options: GetEnvOptions<T> = {}): T {
	const { defaultValue, type = "string", required = false, allowedValues } = options;

	const rawValue = key;

	// console.log(`Environment variable ${key}:`, rawValue);

	if (rawValue === undefined || rawValue === "") {
		if (required && defaultValue === undefined) {
			throw new Error(`Required environment variable ${key} is not set`);
		}

		if (defaultValue !== undefined) {
			return defaultValue;
		}

		if (required) {
			throw new Error(`Required environment variable ${key} is not set`);
		}

		switch (type) {
			case "string":
				return "" as T;
			case "number":
				return 0 as T;
			case "boolean":
				return false as T;
			case "json":
				return null as T;
			default:
				return "" as T;
		}
	}

	if (allowedValues && !allowedValues.includes(rawValue)) {
		throw new Error(
			`Environment variable ${key} has invalid value "${rawValue}". Allowed values: ${allowedValues.join(", ")}`
		);
	}

	try {
		switch (type) {
			case "string":
				return rawValue as T;

			case "number": {
				const numValue = Number(rawValue);
				if (isNaN(numValue)) {
					throw new Error(
						`Environment variable ${key} is not a valid number: "${rawValue}"`
					);
				}
				return numValue as T;
			}

			case "boolean": {
				const lowerValue = rawValue.toLowerCase();
				if (["true", "1", "yes", "on"].includes(lowerValue)) {
					return true as T;
				}
				if (["false", "0", "no", "off"].includes(lowerValue)) {
					return false as T;
				}
				throw new Error(
					`Environment variable ${key} is not a valid boolean: "${rawValue}"`
				);
			}

			case "json": {
				return JSON.parse(rawValue) as T;
			}

			default:
				return rawValue as T;
		}
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to parse environment variable ${key}: ${error.message}`);
		}
		throw new Error(`Failed to parse environment variable ${key}`);
	}
}
