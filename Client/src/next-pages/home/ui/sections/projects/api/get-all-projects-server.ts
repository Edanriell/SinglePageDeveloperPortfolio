import { GetAllProjectsResponse } from "@entities/project/model";

export async function getAllProjectsServer(): Promise<Array<GetAllProjectsResponse>> {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`, {
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
				name: "Design Portfolio",
				image: "/images/raster/projects/design-portfolio.jpg",
				tags: ["HTML", "CSS"],
				links: {
					projectUrl: "#",
					codeUrl: "#"
				}
			},
			{
				name: "E-Learning Landing Page",
				image: "/images/raster/projects/e-learning-landing-page.jpg",
				tags: ["HTML", "CSS"],
				links: {
					projectUrl: "#",
					codeUrl: "#"
				}
			},
			{
				name: "Todo web app",
				image: "/images/raster/projects/projects/todo-web-app.jpg",
				tags: ["Html", "Css", "JavaScript"],
				links: {
					projectUrl: "#",
					codeUrl: "#"
				}
			},
			{
				name: "Entertainment web app",
				image: "/images/raster/projects/entertainment-web-app.jpg",
				tags: ["Html", "Css", "JavaScript"],
				links: {
					projectUrl: "#",
					codeUrl: "#"
				}
			},
			{
				name: "Memory game",
				image: "/images/raster/projects/memory-game.jpg",
				tags: ["Html", "Css", "JavaScript"],
				links: {
					projectUrl: "#",
					codeUrl: "#"
				}
			},
			{
				name: "Art gallery showcase",
				image: "/images/raster/projects/art-gallery-showcase.jpg",
				tags: ["Html", "Css", "JavaScript"],
				links: {
					projectUrl: "#",
					codeUrl: "#"
				}
			}
		];
	}
}
