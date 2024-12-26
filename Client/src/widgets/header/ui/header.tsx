import { type FC } from "react";
import Image from "next/image";

import styles from "./header.module.css";

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<p className={styles.header__logotype}>adamkeyes</p>
			<ul className={styles.socialLinksList}>
				<li className={styles.socialLinksList__item}>
					<a href="#" className={styles.socialLinksList__link}>
						<span className="visually-hidden">Link to GitHub profile</span>
						<Image
							className={
								styles.socialLinksList__icon +
								" " +
								styles["social-links-list__icon--type--github"]
							}
							src="images/vector/icons/github.svg"
							alt="GitHub icon"
						/>
					</a>
				</li>
				<li className={styles.socialLinksList__item}>
					<a href="#" className={styles.socialLinksList__link}>
						<span className="visually-hidden">Link to Frontend Mentor profile</span>
						<Image
							className={
								styles.socialLinksList__icon +
								" " +
								styles["social-links-list__icon--type--frontend-mentor"]
							}
							src="images/vector/icons/frontendmentor.svg"
							alt="Frontend Mentor icon"
						/>
					</a>
				</li>
				<li className={styles.socialLinksList__item}>
					<a href="#" className={styles.socialLinksList__link}>
						<span className="visually-hidden">Link to LinkedIn profile</span>
						<Image
							className={
								styles.socialLinksList__icon +
								" " +
								styles["social-links-list__icon--type--linkedin"]
							}
							src="images/vector/icons/linkedin.svg"
							alt="LinkedIn icon"
						/>
					</a>
				</li>
				<li className={styles.socialLinksList__item}>
					<a href="#" className={styles.socialLinksList__link}>
						<span className="visually-hidden">Link to Twitter profile</span>
						<Image
							className={
								styles.socialLinksList__icon +
								" " +
								styles["social-links-list__icon--type--twitter"]
							}
							src="images/vector/icons/twitter.svg"
							alt="Twitter icon"
						/>
					</a>
				</li>
			</ul>
		</header>
	);
};
