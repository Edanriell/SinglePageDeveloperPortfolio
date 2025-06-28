import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { BASE_URL } from "@shared/config";

type ApiErrorResponse = {
	message?: string;
	error?: string;
	statusCode?: number;
};

export class ApiError extends Error {
	public readonly statusCode?: number;
	public readonly originalError: AxiosError<ApiErrorResponse>;

	constructor(
		message: string,
		statusCode?: number,
		originalError?: AxiosError<ApiErrorResponse>
	) {
		super(message);
		this.name = "ApiError";
		this.statusCode = statusCode;
		this.originalError = originalError!;

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, ApiError);
		}
	}
}

export class ApiClient {
	private instance: AxiosInstance;
	private readonly baseUrl: string;

	constructor(baseUrl?: string) {
		this.baseUrl = baseUrl || `${BASE_URL}`;

		this.instance = axios.create({
			baseURL: this.baseUrl,
			timeout: 10000,
			headers: {
				"Content-Type": "application/json"
			}
		});
	}

	public async get<TResult = unknown>(
		endpoint: string,
		queryParams?: Record<string, string | number>,
		config?: AxiosRequestConfig
	): Promise<TResult> {
		try {
			const params = queryParams ? { params: queryParams } : {};
			const response = await this.instance.get(endpoint, { ...params, ...config });
			return this.handleResponse<TResult>(response);
		} catch (error) {
			return this.handleError(error as AxiosError<ApiErrorResponse>);
		}
	}

	public async post<TResult = unknown, TData = Record<string, unknown>>(
		endpoint: string,
		data?: TData,
		config?: AxiosRequestConfig
	): Promise<TResult> {
		try {
			const response = await this.instance.post(endpoint, data, config);
			return this.handleResponse<TResult>(response);
		} catch (error) {
			return this.handleError(error as AxiosError<ApiErrorResponse>);
		}
	}

	public async put<TResult = unknown, TData = Record<string, unknown>>(
		endpoint: string,
		data?: TData,
		config?: AxiosRequestConfig
	): Promise<TResult> {
		try {
			const response = await this.instance.put(endpoint, data, config);
			return this.handleResponse<TResult>(response);
		} catch (error) {
			return this.handleError(error as AxiosError<ApiErrorResponse>);
		}
	}

	public async patch<TResult = unknown, TData = Record<string, unknown>>(
		endpoint: string,
		data?: TData,
		config?: AxiosRequestConfig
	): Promise<TResult> {
		try {
			const response = await this.instance.patch(endpoint, data, config);
			return this.handleResponse<TResult>(response);
		} catch (error) {
			return this.handleError(error as AxiosError<ApiErrorResponse>);
		}
	}

	public async delete<TResult = unknown>(
		endpoint: string,
		config?: AxiosRequestConfig
	): Promise<TResult> {
		try {
			const response = await this.instance.delete(endpoint, config);
			return this.handleResponse<TResult>(response);
		} catch (error) {
			return this.handleError(error as AxiosError<ApiErrorResponse>);
		}
	}

	private handleResponse<TResult>(response: AxiosResponse<TResult>): TResult {
		return response.data;
	}

	private handleError(error: AxiosError<ApiErrorResponse>): never {
		const errorMessage =
			error.response?.data?.message ||
			error.response?.data?.error ||
			error.message ||
			"An error occurred";

		const statusCode = error.response?.status;

		// Create a properly typed custom error
		throw new ApiError(errorMessage, statusCode, error);
	}
}

export const apiClient = new ApiClient();
