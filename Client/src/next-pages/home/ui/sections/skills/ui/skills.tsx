import { type FC } from "react";
import Image from "next/image";

import { type TSkill } from "@entities/skill/model";
import { Skill } from "@entities/skill/ui";

import circlesImage from "@public/images/vector/circles.svg";

import styles from "./skills.module.css";

const skillsList: Array<TSkill> = [
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
		style: "lowercased"
	},
	{
		name: "Accessibility",
		experience: "4 Years Experience",
		style: "lowercased"
	},
	{
		name: "React",
		experience: "3 Years Experience",
		style: "lowercased"
	},
	{
		name: "Sass",
		experience: "3 Years Experience",
		style: "lowercased"
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
						<Skill key={index} name={name} experience={experience} style={style} />
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
