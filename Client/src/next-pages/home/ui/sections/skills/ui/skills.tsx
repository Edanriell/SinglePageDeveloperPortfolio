import { type FC } from "react";
import Image from "next/image";

import circlesImage from "@public/images/vector/circles.svg";

import styles from "./skills.module.css";

const skillsList = [
	{
		name: "Html",
		experience: "4 Years Experience",
		style: "uppercased"
	},
	{
		name: "Css",
		experience: "4 Years Experience",
		style: "uppercased"
	},
	{
		name: "Javascript",
		experience: "4 Years Experience",
		style: "normal"
	},
	{
		name: "Accessibility",
		experience: "4 Years Experience",
		style: "normal"
	},
	{
		name: "React",
		experience: "3 Years Experience",
		style: "normal"
	},
	{
		name: "Sass",
		experience: "3 Years Experience",
		style: "normal"
	}
];

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
					{skillsList.map(({ name, experience, style }, index) => (
						<div key={index} className={styles["skills-and-experience-list__item"]}>
							<dt
								className={
									styles["skills-and-experience-list__skill"] +
									" " +
									(style === "uppercased"
										? styles[
												"skills-and-experience-list__skill--style--uppercased"
											]
										: "")
								}
							>
								{name}
							</dt>
							<dd className={styles["skills-and-experience-list__experience"]}>
								{experience}
							</dd>
						</div>
					))}
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
