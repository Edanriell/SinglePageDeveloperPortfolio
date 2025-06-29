import { GetBannerByIdResponse } from "@entities/banner/model";

export async function getBannerByIdServer(id: number): Promise<GetBannerByIdResponse> {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/banners/${id}`, {
			next: { revalidate: 3600 }, // Cache for 1 hour
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch banner: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching banner:", error);

		// Fallback data in case of error
		return {
			title: "Nice to meet you! I’m Adam Keyes.",
			description:
				"Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.",
			image: "/images/raster/adam-keyes.png"
		};
	}
}
