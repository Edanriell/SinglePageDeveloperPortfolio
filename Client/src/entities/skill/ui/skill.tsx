import { type FC } from "react";

import { TSkill } from "../model";

import styles from "./skill.module.css";

type SkillProps = TSkill;

export const Skill: FC<SkillProps> = ({ name, experience, style }) => {
	return (
		<div className={styles["skills-and-experience-list__item"]}>
			<dt
				className={
					styles["skills-and-experience-list__skill"] +
					" " +
					(style === "uppercased"
						? styles["skills-and-experience-list__skill--style--uppercased"]
						: "")
				}
			>
				{name}
			</dt>
			<dd className={styles["skills-and-experience-list__experience"]}>{experience}</dd>
		</div>
	);
};
