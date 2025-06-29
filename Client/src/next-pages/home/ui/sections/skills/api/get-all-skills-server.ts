import { GetAllSkillsResponse } from "@entities/skill/model";

export async function getAllSkillsServer(): Promise<Array<GetAllSkillsResponse>> {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/skills`, {
			next: { revalidate: 3600 }, // Cache for 1 hour
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch skills: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching skills:", error);

		// Fallback data in case of error
		return [
			{
				name: "HTML",
				experience: 4
			},
			{
				name: "CSS",
				experience: 4
			},
			{
				name: "Javascript",
				experience: 4
			},
			{
				name: "Accessibility",
				experience: 4
			},
			{
				name: "React",
				experience: 3
			},
			{
				name: "Sass",
				experience: 3
			}
		];
	}
}
