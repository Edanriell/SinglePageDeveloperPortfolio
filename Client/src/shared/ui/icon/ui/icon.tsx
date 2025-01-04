import { FC, Fragment, type ReactElement } from "react";
import Image from "next/image";

import styles from "./icon.module.css";

const iconVariants = new Map<string, () => ReactElement>([
	[
		"gitHub",
		() => (
			<Image
				className={`${styles.icon} ${styles["icon--type--github"]}`}
				src="images/vector/icons/github.svg"
				alt="GitHub icon"
				width={25}
				height={24}
			/>
		)
	],
	[
		"frontendMentor",
		() => (
			<Image
				className={`${styles.icon} ${styles["icon--type--frontend-mentor"]}`}
				src="images/vector/icons/frontendmentor.svg"
				alt="Frontend Mentor icon"
				width={24}
				height={21}
			/>
		)
	],
	[
		"linkedIn",
		() => (
			<Image
				className={`${styles.icon} ${styles["icon--type--linkedin"]}`}
				src="images/vector/icons/linkedin.svg"
				alt="LinkedIn icon"
				width={24}
				height={24}
			/>
		)
	],
	[
		"twitter",
		() => (
			<Image
				className={`${styles.icon} ${styles["icon--type--twitter"]}`}
				src="images/vector/icons/twitter.svg"
				alt="Twitter icon"
				width={24}
				height={20}
			/>
		)
	],
	[
		"exclamationMark",
		() => (
			<Image
				className={`${styles.icon} ${styles["icon--type--exclamation-mark"]}`}
				src="images/vector/icons/exclamation-mark.svg"
				alt="Exclamation mark"
				width={24}
				height={24}
			/>
		)
	]
]);

export type IconType = "gitHub" | "frontendMentor" | "linkedIn" | "twitter" | "exclamationMark";

type IconProps = {
	type: IconType;
};

export const Icon: FC<IconProps> = ({ type }) => {
	const icon = iconVariants.get(type);

	if (!icon) {
		throw new Error(`Icon of type "${type}" is not defined.`);
	}

	return <Fragment>{icon()}</Fragment>;
};
