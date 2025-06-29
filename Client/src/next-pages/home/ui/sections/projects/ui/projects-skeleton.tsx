import { type FC } from "react";

import { Link } from "@shared/ui/link/ui";

import styles from "./projects.module.css";
import { Skeleton } from "@shared/ui/skeleton/ui";

type ProjectsSkeletonProps = {
	projectsLoading: 6;
};

export const ProjectsSkeleton: FC<ProjectsSkeletonProps> = ({ projectsLoading }) => {
	return (
		<section className={styles["section-projects"]}>
			<header className={styles["section-projects__header"]}>
				<h2 className={styles["section-projects__title"]}>Projects</h2>
				<Link href="#contact-me">Contact me</Link>
			</header>
			<ul
				className={
					styles["section-projects__projects-list"] + " " + styles["projects-list"]
				}
			>
				{Array.from({ length: projectsLoading }, (_, index) => (
					<li key={index} className={styles["projects-list__project"]}>
						<Skeleton className={styles["project__image"]} width={540} height={400} />
					</li>
				))}
			</ul>
		</section>
	);
};
