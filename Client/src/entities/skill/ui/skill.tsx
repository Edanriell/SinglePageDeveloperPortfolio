import { type FC } from "react";

import { GetAllSkillsResponse } from "../model";

import styles from "./skill.module.css";

type SkillProps = GetAllSkillsResponse;

export const Skill: FC<SkillProps> = ({ name, experience }) => {
	return (
		<div className={styles["skills-and-experience-list__item"]}>
			<dt className={styles["skills-and-experience-list__skill"]}>{name}</dt>
			<dd className={styles["skills-and-experience-list__experience"]}>
				{experience} Years Experience
			</dd>
		</div>
	);
};
