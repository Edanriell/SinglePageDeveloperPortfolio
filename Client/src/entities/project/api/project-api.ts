import { apiClient } from "@shared/api";
import { GetAllProjectsResponse } from "@entities/project/model";

export class ProjectApi {
	private static readonly BASE_PATH = "/projects";

	static async getAllProjects(): Promise<GetAllProjectsResponse> {
		return apiClient.get<GetAllProjectsResponse>(`${this.BASE_PATH}`);
	}
}
