import { type FC } from "react";
import Image from "next/image";

import designPortfolioProjectImage from "@public/images/raster/projects/design-portfolio.jpg";
import eLearningLandingPageProjectImage from "@public/images/raster/projects/e-learning-landing-page.jpg";
import todoWebAppProjectImage from "@public/images/raster/projects/todo-web-app.jpg";
import entertainmentWebAppProjectImage from "@public/images/raster/projects/entertainment-web-app.jpg";
import memoryGameProjectImage from "@public/images/raster/projects/memory-game.jpg";
import artGalleryShowcaseProjectImage from "@public/images/raster/projects/art-gallery-showcase.jpg";

import styles from "./projects.module.css";

export const Projects: FC = () => {
	return (
		<section className={styles["section-projects"]}>
			<header className={styles["section-projects__header"]}>
				<h2 className={styles["section-projects__title"]}>Projects</h2>
				<a className={styles["link"]} href="#">
					Contact me
				</a>
			</header>
			<ul
				className={
					styles["section-projects__projects-list"] + " " + styles["projects-list"]
				}
			>
				<li className={styles["projects-list__project"]}>
					<article className={styles["project"]}>
						<Image
							className={styles["project__image"]}
							src={designPortfolioProjectImage}
							alt="Design Portfolio project"
						/>
						<h3 className={styles["project__title"]}>Design Portfolio</h3>
						<ul className={styles["project__tag-list"] + " " + styles["tag-list"]}>
							<li className={styles["tag-list__tag"]}>Html</li>
							<li className={styles["tag-list__tag"]}>Css</li>
						</ul>
					</article>
				</li>
				<li className={styles["projects-list__project"]}>
					<article className={styles["project"]}>
						<Image
							className={styles["project__image"]}
							src={eLearningLandingPageProjectImage}
							alt="E-Learning Landing Page project"
						/>
						<h3 className={styles["project__title"]}>E-Learning Landing Page</h3>
						<ul className={styles["project__tag-list"] + " " + styles["tag-list"]}>
							<li className={styles["tag-list__tag"]}>Html</li>
							<li className={styles["tag-list__tag"]}>Css</li>
						</ul>
					</article>
				</li>
				<li className={styles["projects-list__project"]}>
					<article className={styles["project"]}>
						<Image
							className={styles["project__image"]}
							src={todoWebAppProjectImage}
							alt="Todo web app project"
						/>
						<h3 className={styles["project__title"]}>Todo web app</h3>
						<ul className={styles["project__tag-list"] + " " + styles["tag-list"]}>
							<li className={styles["tag-list__tag"]}>Html</li>
							<li className={styles["tag-list__tag"]}>Css</li>
							<li className={styles["tag-list__tag"]}>Javascript</li>
						</ul>
					</article>
				</li>
				<li className={styles["projects-list__project"]}>
					<article className={styles["project"]}>
						<Image
							className={styles["project__image"]}
							src={entertainmentWebAppProjectImage}
							alt="Entertainment web app project"
						/>
						<h3 className={styles["project__title"]}>Entertainment web app</h3>
						<ul className={styles["project__tag-list"] + " " + styles["tag-list"]}>
							<li className={styles["tag-list__tag"]}>Html</li>
							<li className={styles["tag-list__tag"]}>Css</li>
							<li className={styles["tag-list__tag"]}>Javascript</li>
						</ul>
					</article>
				</li>
				<li className={styles["projects-list__project"]}>
					<article className={styles["project"]}>
						<Image
							className={styles["project__image"]}
							src={memoryGameProjectImage}
							alt="Memory game project"
						/>
						<h3 className={styles["project__title"]}>Memory game</h3>
						<ul className={styles["project__tag-list"] + " " + styles["tag-list"]}>
							<li className={styles["tag-list__tag"]}>Html</li>
							<li className={styles["tag-list__tag"]}>Css</li>
							<li className={styles["tag-list__tag"]}>Javascript</li>
						</ul>
					</article>
				</li>
				<li className={styles["projects-list__project"]}>
					<article className={styles["project"]}>
						<Image
							className={styles["project__image"]}
							src={artGalleryShowcaseProjectImage}
							alt="Art gallery showcase project"
						/>
						<h3 className={styles["project__title"]}>Art gallery showcase</h3>
						<ul className={styles["project__tag-list"] + " " + styles["tag-list"]}>
							<li className={styles["tag-list__tag"]}>Html</li>
							<li className={styles["tag-list__tag"]}>Css</li>
							<li className={styles["tag-list__tag"]}>Javascript</li>
						</ul>
					</article>
				</li>
			</ul>
		</section>
	);
};
