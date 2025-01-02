import { type FC, type ReactNode } from "react";

import styles from "./link.module.css";

type LinkProps = {
	href: string;
	target?: "_blank" | "_self" | "_top" | "_parent";
	children: ReactNode;
};

export const Link: FC<LinkProps> = ({ href, target = "_self", children }) => {
	return (
		<a className={styles["link"]} href={href} target={target}>
			{children}
		</a>
	);
};
