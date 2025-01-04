import { type FC } from "react";
import Image from "next/image";

import { Tags } from "@shared/ui/tags/ui";
import { Link } from "@shared/ui/link/ui";

import { type Project } from "../../../model";

import styles from "./project-card.module.css";

type ProjectCardProps = Project;

export const ProjectCard: FC<ProjectCardProps> = ({ name, image, tags, links }) => {
	return (
		<article className={styles["project"]}>
			<Image
				className={styles["project__image"]}
				src={image}
				alt={`${name} project`}
				placeholder="blur"
				width={540}
				height={400}
			/>
			<h3 className={styles["project__title"]}>{name}</h3>
			<Tags tags={tags} className={styles["project__tag-list"]} />
			<div className={styles["project__links"]}>
				<Link href={links.project} target="_blank">
					View project
				</Link>
				<Link href={links.code} target="_blank">
					View code
				</Link>
			</div>
		</article>
	);
};
