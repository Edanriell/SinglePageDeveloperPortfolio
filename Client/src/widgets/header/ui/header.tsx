import { type FC } from "react";

import { SocialLinks } from "@shared/ui/social-links/ui";

import styles from "./header.module.css";

export const Header: FC = () => {
	return (
		<header className={styles["header"]}>
			<p className={styles["header__logotype"]}>adamkeyes</p>
			<SocialLinks />
		</header>
	);
};
