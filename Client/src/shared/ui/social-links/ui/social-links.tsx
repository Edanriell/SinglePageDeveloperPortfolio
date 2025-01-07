"use client";

import { type FC } from "react";
import { motion } from "motion/react";

import { Icon, type IconType } from "@shared/ui/icon/ui/icon";

import styles from "./social-links.module.css";

type SocialLinks = {
	href: string;
	description: string;
	iconType: IconType;
};

const socialLinks: Array<SocialLinks> = [
	{
		href: "#",
		description: "Link to GitHub profile",
		iconType: "gitHub"
	},
	{
		href: "#",
		description: "Link to Frontend Mentor profile",
		iconType: "frontendMentor"
	},
	{
		href: "#",
		description: "Link to LinkedIn profile",
		iconType: "linkedIn"
	},
	{
		href: "#",
		description: "Link to Twitter profile",
		iconType: "twitter"
	}
];

const socialLinksListItemAnimationVariants = {
	hovered: { scale: 1.25 },
	tapped: { scale: 0.95 }
};

const socialLinksListLinkAnimationVariants = {
	hovered: { color: "#4ee1a0" },
	tapped: { color: "#4ee1a0" }
};

export const SocialLinks: FC = () => {
	return (
		<ul className={styles["social-links-list"]}>
			{socialLinks.map(({ href, description, iconType }, index) => (
				<motion.li
					variants={socialLinksListItemAnimationVariants}
					whileHover="hovered"
					whileTap="tapped"
					key={index}
					className={styles["social-links-list__item"]}
				>
					<motion.a
						variants={socialLinksListLinkAnimationVariants}
						whileHover="hovered"
						whileTap="tapped"
						href={href}
						className={styles["social-links-list__link"]}
					>
						<span className="visually-hidden">{description}</span>
						<Icon type={iconType} />
					</motion.a>
				</motion.li>
			))}
		</ul>
	);
};
