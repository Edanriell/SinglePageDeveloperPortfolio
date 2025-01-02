import { type ComponentPropsWithoutRef, type FC, type ReactNode } from "react";

import styles from "./link.module.css";

type LinkProps = {
	href: string;
	target?: "_blank" | "_self" | "_top" | "_parent";
	children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

export const Link: FC<LinkProps> = ({ href, target = "_self", children, ...rest }) => {
	return (
		<a className={styles["link"]} href={href} target={target} {...rest}>
			{children}
		</a>
	);
};
