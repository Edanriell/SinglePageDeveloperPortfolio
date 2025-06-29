import Image from "next/image";

import circleImage from "@public/images/vector/circle.svg";
import circlesImage from "@public/images/vector/circles.svg";

import styles from "./hero.module.css";

import { Link } from "@shared/ui/link/ui";
import { Skeleton } from "@shared/ui/skeleton/ui";

export function HeroSkeleton() {
	return (
		<section className={styles["hero-section"]}>
			<div className={styles["hero-section__content"]}>
				<h1 className={styles["hero-section__title"]}>
					<span className={styles["hero-section__title-element"]}>Nice to</span>{" "}
					<span className={styles["hero-section__title-element"]}>meet you! I'm</span>{" "}
					<strong className={styles["hero-section__title--type--highlighted"]}>
						Adam Keyes
					</strong>
					.
				</h1>
				<Skeleton style={{ marginBottom: "16rem" }} width={481} height={28} />
				<Skeleton style={{ marginBottom: "30rem" }} width={451} height={28} />
				<Link href="#contact-me">Contact me</Link>
			</div>
			<figure
				className={
					styles["hero-section__developer-image"] + " " + styles["developer-image"]
				}
			>
				<Skeleton className={styles["developer-image__image"]} width={445} height={720} />
				<figcaption className={styles["developer-image__image-description"]}>
					Loading
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
}
