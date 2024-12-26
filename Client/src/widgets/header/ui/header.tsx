import { type FC } from "react";

import { SocialLinks } from "@shared/ui/social-links/ui";
import { Logotype } from "@shared/ui/logotype/ui";

import styles from "./header.module.css";

export const Header: FC = () => {
	return (
		<header className={styles["header"]}>
			<Logotype text="adamkeyes" />
			<SocialLinks />
		</header>
	);
};
