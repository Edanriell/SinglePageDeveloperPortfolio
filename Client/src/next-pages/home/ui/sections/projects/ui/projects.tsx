import { type FC } from "react";

import { type Project } from "@entities/project/model";
import { ProjectCard } from "@entities/project/ui/project-card/ui";

import { Link } from "@shared/ui/link/ui";

import designPortfolioProjectImage from "@public/images/raster/projects/design-portfolio.jpg";
import eLearningLandingPageProjectImage from "@public/images/raster/projects/e-learning-landing-page.jpg";
import todoWebAppProjectImage from "@public/images/raster/projects/todo-web-app.jpg";
import entertainmentWebAppProjectImage from "@public/images/raster/projects/entertainment-web-app.jpg";
import memoryGameProjectImage from "@public/images/raster/projects/memory-game.jpg";
import artGalleryShowcaseProjectImage from "@public/images/raster/projects/art-gallery-showcase.jpg";

import styles from "./projects.module.css";

const projectsList: Array<Project> = [
	{
		name: "Design Portfolio",
		image: designPortfolioProjectImage,
		tags: ["Html", "Css"],
		links: {
			project: "#",
			code: "#"
		}
	},
	{
		name: "E-Learning Landing Page",
		image: eLearningLandingPageProjectImage,
		tags: ["Html", "Css"],
		links: {
			project: "#",
			code: "#"
		}
	},
	{
		name: "Todo web app",
		image: todoWebAppProjectImage,
		tags: ["Html", "Css", "JavaScript"],
		links: {
			project: "#",
			code: "#"
		}
	},
	{
		name: "Entertainment web app",
		image: entertainmentWebAppProjectImage,
		tags: ["Html", "Css", "JavaScript"],
		links: {
			project: "#",
			code: "#"
		}
	},
	{
		name: "Memory game",
		image: memoryGameProjectImage,
		tags: ["Html", "Css", "JavaScript"],
		links: {
			project: "#",
			code: "#"
		}
	},
	{
		name: "Art gallery showcase",
		image: artGalleryShowcaseProjectImage,
		tags: ["Html", "Css", "JavaScript"],
		links: {
			project: "#",
			code: "#"
		}
	}
];

export const Projects: FC = () => {
	return (
		<section className={styles["section-projects"]}>
			<header className={styles["section-projects__header"]}>
				<h2 className={styles["section-projects__title"]}>Projects</h2>
				<Link href="#contact-me">Contact me</Link>
			</header>
			<ul
				className={
					styles["section-projects__projects-list"] + " " + styles["projects-list"]
				}
			>
				{projectsList.map(({ name, image, tags, links }, index) => (
					<li key={index} className={styles["projects-list__project"]}>
						<ProjectCard name={name} image={image} tags={tags} links={links} />
					</li>
				))}
			</ul>
		</section>
	);
};
