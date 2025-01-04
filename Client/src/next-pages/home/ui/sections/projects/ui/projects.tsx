import { type FC } from "react";
import Image, { type StaticImageData } from "next/image";

import { Link } from "@shared/ui/link/ui";
import { Tags } from "@shared/ui/tags/ui";

import designPortfolioProjectImage from "@public/images/raster/projects/design-portfolio.jpg";
import eLearningLandingPageProjectImage from "@public/images/raster/projects/e-learning-landing-page.jpg";
import todoWebAppProjectImage from "@public/images/raster/projects/todo-web-app.jpg";
import entertainmentWebAppProjectImage from "@public/images/raster/projects/entertainment-web-app.jpg";
import memoryGameProjectImage from "@public/images/raster/projects/memory-game.jpg";
import artGalleryShowcaseProjectImage from "@public/images/raster/projects/art-gallery-showcase.jpg";

import styles from "./projects.module.css";

type Project = {
	name: string;
	image: StaticImageData;
	tags: Array<string>;
	links: {
		project: string;
		code: string;
	};
};

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
						<article className={styles["project"]}>
							<Image
								className={styles["project__image"]}
								src={image}
								alt={`${name} project`}
								placeholder="blur"
								width={540}
								height={400}
							/>
							<h3 className={styles["project__title"]}>{name}</h3>
							<Tags tags={tags} className={styles["project__tag-list"]} />
							<div className={styles["project__links"]}>
								<Link href={links.project} target="_blank">
									View project
								</Link>
								<Link href={links.code} target="_blank">
									View code
								</Link>
							</div>
						</article>
					</li>
				))}
			</ul>
		</section>
	);
};
