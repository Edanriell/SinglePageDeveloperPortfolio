import { type FC } from "react";
import Image from "next/image";

import circlesImage from "@public/images/vector/circles.svg";

import styles from "./skills.module.css";

export const Skills: FC = () => {
	return (
		<section className={styles["skills-section"]}>
			<h2 className="visually-hidden">Skills & Experience</h2>
			<div className={styles["skills-section__content"]}>
				<dl
					className={
						styles["skills-section__skills-and-experience-list"] +
						" " +
						styles["skills-and-experience-list"]
					}
				>
					<div className={styles["skills-and-experience-list__item"]}>
						<dt
							className={
								styles["skills-and-experience-list__skill"] +
								" " +
								styles["skills-and-experience-list__skill--style--uppercased"]
							}
						>
							Html
						</dt>
						<dd className={styles["skills-and-experience-list__experience"]}>
							4 Years Experience
						</dd>
					</div>
					<div className={styles["skills-and-experience-list__item"]}>
						<dt
							className={
								styles["skills-and-experience-list__skill"] +
								" " +
								styles["skills-and-experience-list__skill--style--uppercased"]
							}
						>
							Css
						</dt>
						<dd className={styles["skills-and-experience-list__experience"]}>
							4 Years Experience
						</dd>
					</div>
					<div className={styles["skills-and-experience-list__item"]}>
						<dt className={styles["skills-and-experience-list__skill"]}>Javascript</dt>
						<dd className={styles["skills-and-experience-list__experience"]}>
							4 Years Experience
						</dd>
					</div>
					<div className={styles["skills-and-experience-list__item"]}>
						<dt className={styles["skills-and-experience-list__skill"]}>
							Accessibility
						</dt>
						<dd className={styles["skills-and-experience-list__experience"]}>
							4 Years Experience
						</dd>
					</div>
					<div className={styles["skills-and-experience-list__item"]}>
						<dt className={styles["skills-and-experience-list__skill"]}>React</dt>
						<dd className={styles["skills-and-experience-list__experience"]}>
							3 Years Experience
						</dd>
					</div>
					<div className={styles["skills-and-experience-list__item"]}>
						<dt className={styles["skills-and-experience-list__skill"]}>Sass</dt>
						<dd className={styles["skills-and-experience-list__experience"]}>
							3 Years Experience
						</dd>
					</div>
				</dl>
			</div>
			<Image
				className={styles["skills-section__circles-image"]}
				src={circlesImage}
				width={530}
				height={129}
				alt=""
			/>
		</section>
	);
};
