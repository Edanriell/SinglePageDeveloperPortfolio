import { FC, Fragment } from "react";
import Image from "next/image";

import styles from "./icon.module.css";

const iconVariants = {
	gitHub: () => (
		<Image
			className={styles["icon"] + " " + styles["icon--type--github"]}
			src="images/vector/icons/github.svg"
			alt="GitHub icon"
			width={25}
			height={24}
		/>
	),
	frontendMentor: () => (
		<Image
			className={styles["icon"] + " " + styles["icon--type--frontend-mentor"]}
			src="images/vector/icons/frontendmentor.svg"
			alt="Frontend Mentor icon"
			width={24}
			height={21}
		/>
	),
	linkedIn: () => (
		<Image
			className={styles["icon"] + " " + styles["icon--type--linkedin"]}
			src="images/vector/icons/linkedin.svg"
			alt="LinkedIn icon"
			width={24}
			height={24}
		/>
	),
	twitter: () => (
		<Image
			className={styles["icon"] + " " + styles["icon--type--twitter"]}
			src="images/vector/icons/twitter.svg"
			alt="Twitter icon"
			width={24}
			height={20}
		/>
	)
};

export type IconType = keyof typeof iconVariants;

type IconProps = {
	type: IconType;
};

export const Icon: FC<IconProps> = ({ type }) => {
	const Icon = iconVariants[type];
	return <Fragment>{Icon()}</Fragment>;
};
