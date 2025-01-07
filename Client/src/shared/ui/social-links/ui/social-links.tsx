"use client";

import { type FC } from "react";

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

export const SocialLinks: FC = () => {
	return (
		<ul className={styles["social-links-list"]}>
			{socialLinks.map(({ href, description, iconType }, index) => (
				<li key={index} className={styles["social-links-list__item"]}>
					<a href={href} className={styles["social-links-list__link"]}>
						<span className="visually-hidden">{description}</span>
						<Icon type={iconType} />
					</a>
				</li>
			))}
		</ul>
	);
};
