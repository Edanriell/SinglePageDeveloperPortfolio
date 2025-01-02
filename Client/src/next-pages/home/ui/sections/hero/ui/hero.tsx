import { type FC } from "react";
import Image from "next/image";

import { Link } from "@shared/ui/link/ui";

import developerImage from "@public/images/raster/adam-keyes.png";
import circleImage from "@public/images/vector/circle.svg";
import circlesImage from "@public/images/vector/circles.svg";

import styles from "./hero.module.css";

export const Hero: FC = () => {
	return (
		<section className={styles["hero-section"]}>
			<div className={styles["hero-section__content"]}>
				<h1 className={styles["hero-section__title"]}>
					<span className={styles["hero-section__title-element"]}>Nice to</span>{" "}
					<span className={styles["hero-section__title-element"]}>meet you! I’m</span>{" "}
					<strong className={styles["hero-section__title--type--highlighted"]}>
						Adam Keyes
					</strong>
					.
				</h1>
				<p className={styles["hero-section__text"]}>
					Based in the UK, I’m a front-end developer passionate about building accessible
					web apps that users love.
				</p>
				<Link href="#contact-me">Contact me</Link>
			</div>
			<figure
				className={
					styles["hero-section__developer-image"] + " " + styles["developer-image"]
				}
			>
				<Image
					className={styles["developer-image__image"]}
					src={developerImage}
					alt="Adam Keyes head shot"
					placeholder="blur"
				/>
				<figcaption className={styles["developer-image__image-description"]}>
					Front-end developer Adam Keyes
				</figcaption>
			</figure>
			<Image
				className={styles["hero-section__circle-image"]}
				src={circleImage}
				width={129}
				height={129}
				alt=""
			/>
			<Image
				className={styles["hero-section__circles-image"]}
				src={circlesImage}
				width={530}
				height={129}
				alt=""
			/>
		</section>
	);
};
