import { type FC } from "react";
import Image from "next/image";

import circlesImage from "@public/images/vector/circles.svg";

import styles from "./skills.module.css";

import { Skeleton } from "@shared/ui/skeleton/ui";

type SkillsProps = {
	skillsLoading: number;
};

export const SkillsSkeleton: FC<SkillsProps> = ({ skillsLoading }) => {
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
					{Array.from({ length: skillsLoading }, (_, index) => (
						<div key={index} className={styles["skills-and-experience-list__item"]}>
							<dt className={styles["skills-and-experience-list__skill"]}>
								<Skeleton width={279} height={56} />
							</dt>
							<dd className={styles["skills-and-experience-list__experience"]}>
								<Skeleton width={164} height={28} />
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
