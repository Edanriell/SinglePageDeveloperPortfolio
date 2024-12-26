import { type FC } from "react";

import styles from "./hero.module.css";

export const Hero: FC = () => {
	return (
		<section className={styles["hero-section"]}>
			<div className={styles["hero-section__content"]}>
				<h1 className={styles["hero-section__title"]}>
					Nice to meet you! I’m <strong>Adam Keyes</strong>.
				</h1>
				<p className={styles["hero-section__text"]}>
					Based in the UK, I’m a front-end developer passionate about building accessible
					web apps that users love.
				</p>
				<a className={styles["link"]} href="#">
					Contact me
				</a>
			</div>
			<figure
				className={
					styles["hero-section__developer-image"] + " " + styles["developer-image"]
				}
			>
				<img
					className={styles["developer-image__image"]}
					src=""
					alt="Adam Keyes head shot"
				/>
				<figcaption className="visually-hidden">Front-end developer Adam Keyes</figcaption>
			</figure>
		</section>
	);
};
