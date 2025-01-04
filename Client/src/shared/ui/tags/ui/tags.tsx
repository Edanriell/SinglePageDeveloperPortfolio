import { type FC } from "react";

import styles from "./tags.module.css";

type TagsProps = {
	tags: Array<string>;
	className?: string;
};

export const Tags: FC<TagsProps> = ({ tags, className }) => {
	return (
		<ul className={className + " " + styles["tag-list"]}>
			{tags.map((tag, index) => (
				<li key={index} className={styles["tag-list__tag"]}>
					{tag}
				</li>
			))}
		</ul>
	);
};
