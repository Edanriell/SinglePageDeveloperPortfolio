import { apiClient } from "@shared/api";
import { GetAllSkillsResponse } from "@entities/skill/model";

export class SkillApi {
	private static readonly BASE_PATH = "/skills";

	static async getAllSkills(): Promise<GetAllSkillsResponse> {
		return apiClient.get<GetAllSkillsResponse>(`${this.BASE_PATH}`);
	}
}
