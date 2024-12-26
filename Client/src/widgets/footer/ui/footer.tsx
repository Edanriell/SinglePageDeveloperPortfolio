import { type FC } from "react";

import { Logotype } from "@shared/ui/logotype/ui";
import { SocialLinks } from "@shared/ui/social-links/ui";

import styles from "./footer.module.css";

export const Footer: FC = () => {
	return (
		<footer className={styles["footer"]}>
			<div className={styles["footer__wrapper"]}>
				<Logotype text="adamkeyes" />
				<SocialLinks />
			</div>
		</footer>
	);
};
