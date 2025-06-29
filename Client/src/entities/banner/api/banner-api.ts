import { apiClient } from "@shared/api";
import { GetBannerByIdResponse } from "@entities/banner/model";

export class BannerApi {
	private static readonly BASE_PATH = "/banners";

	static async getBannerById(id: number): Promise<GetBannerByIdResponse> {
		return apiClient.get<GetBannerByIdResponse>(`${this.BASE_PATH}/${id}`);
	}
}
