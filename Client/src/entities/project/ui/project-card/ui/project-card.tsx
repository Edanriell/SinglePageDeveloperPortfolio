"use client";

import { type FC, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";

import { Tags } from "@shared/ui/tags/ui";
import { Link } from "@shared/ui/link/ui";
import { useWindowSize } from "@shared/lib/hooks";

import { type Project } from "../../../model";

import styles from "./project-card.module.css";

type ProjectCardProps = Project;

const projectCardAnimationVariants: Variants = {
	initial: {
		opacity: 0
	},
	active: {
		opacity: 1
	},
	inactive: {
		opacity: 0
	}
};

const projectLinkAnimationVariants: Variants = {
	initial: {
		opacity: 0,
		x: -20,
		filter: "blur(3rem)"
	},
	visible: {
		opacity: 1,
		x: 0,
		filter: "blur(0rem)"
	},
	hidden: {
		opacity: 0,
		x: -20,
		filter: "blur(3rem)"
	}
};

const codeLinkAnimationVariants: Variants = {
	initial: {
		opacity: 0,
		x: 20,
		filter: "blur(3rem)"
	},
	visible: {
		opacity: 1,
		x: 0,
		filter: "blur(0rem)"
	},
	hidden: {
		opacity: 0,
		x: 20,
		filter: "blur(3rem)"
	}
};

export const ProjectCard: FC<ProjectCardProps> = ({ name, image, tags, links }) => {
	const { width } = useWindowSize();

	const [projectCardState, setProjectCardState] = useState<
		"idle" | "hovered" | "unHovered" | "touched" | "unTouched"
	>("idle");

	return (
		<article className={styles["project"]}>
			<div
				onMouseEnter={width >= 1440 ? () => setProjectCardState("hovered") : undefined}
				onMouseLeave={width >= 1440 ? () => setProjectCardState("unHovered") : undefined}
				onTouchStart={width >= 1440 ? () => setProjectCardState("touched") : undefined}
				onTouchEnd={width >= 1440 ? () => setProjectCardState("unTouched") : undefined}
				className={styles["project__secondary-content"]}
			>
				<Image
					className={styles["project__image"]}
					src={image}
					alt={`${name} project`}
					placeholder="blur"
					width={540}
					height={400}
				/>
				{width >= 1440 && (
					<motion.div
						animate={
							projectCardState === "hovered" || projectCardState === "touched"
								? "active"
								: projectCardState === "unHovered" ||
									  projectCardState === "unTouched"
									? "inactive"
									: "initial"
						}
						variants={projectCardAnimationVariants}
						className={styles["project__links"]}
					>
						<motion.div
							variants={projectLinkAnimationVariants}
							animate={
								projectCardState === "hovered" || projectCardState === "touched"
									? "visible"
									: projectCardState === "unHovered" ||
										  projectCardState === "unTouched"
										? "hidden"
										: "initial"
							}
						>
							<Link href={links.project} target="_blank">
								View project
							</Link>
						</motion.div>
						<motion.div
							variants={codeLinkAnimationVariants}
							animate={
								projectCardState === "hovered" || projectCardState === "touched"
									? "visible"
									: projectCardState === "unHovered" ||
										  projectCardState === "unTouched"
										? "hidden"
										: "initial"
							}
						>
							<Link href={links.code} target="_blank">
								View code
							</Link>
						</motion.div>
					</motion.div>
				)}
			</div>
			<div className={styles["project__primary-content"]}>
				<h3 className={styles["project__title"]}>{name}</h3>
				<Tags tags={tags} className={styles["project__tag-list"]} />
				{width < 1440 && (
					<div className={styles["project__links"]}>
						<Link href={links.project} target="_blank">
							View project
						</Link>
						<Link href={links.code} target="_blank">
							View code
						</Link>
					</div>
				)}
			</div>
		</article>
	);
};
