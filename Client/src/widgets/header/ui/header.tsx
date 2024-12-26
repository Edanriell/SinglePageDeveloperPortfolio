import { type FC } from "react";
import Image from "next/image";

import styles from "./header.module.css";

export const Header: FC = () => {
	return (
		<header className={styles["header"]}>
			<p className={styles["header__logotype"]}>adamkeyes</p>
			<ul className={styles["social-links-list"]}>
				<li className={styles["social-links-list__item"]}>
					<a href="#" className={styles["social-links-list__link"]}>
						<span className="visually-hidden">Link to GitHub profile</span>
						<Image
							className={
								styles["social-links-list__icon"] +
								" " +
								styles["social-links-list__icon--type--github"]
							}
							src="images/vector/icons/github.svg"
							alt="GitHub icon"
							width={25}
							height={24}
						/>
					</a>
				</li>
				<li className={styles["social-links-list__item"]}>
					<a href="#" className={styles["social-links-list__link"]}>
						<span className="visually-hidden">Link to Frontend Mentor profile</span>
						<Image
							className={
								styles["social-links-list__icon"] +
								" " +
								styles["social-links-list__icon--type--frontend-mentor"]
							}
							src="images/vector/icons/frontendmentor.svg"
							alt="Frontend Mentor icon"
							width={24}
							height={21}
						/>
					</a>
				</li>
				<li className={styles["social-links-list__item"]}>
					<a href="#" className={styles["social-links-list__link"]}>
						<span className="visually-hidden">Link to LinkedIn profile</span>
						<Image
							className={
								styles["social-links-list__icon"] +
								" " +
								styles["social-links-list__icon--type--linkedin"]
							}
							src="images/vector/icons/linkedin.svg"
							alt="LinkedIn icon"
							width={24}
							height={24}
						/>
					</a>
				</li>
				<li className={styles["social-links-list__item"]}>
					<a href="#" className={styles["social-links-list__link"]}>
						<span className="visually-hidden">Link to Twitter profile</span>
						<Image
							className={
								styles["social-links-list__icon"] +
								" " +
								styles["social-links-list__icon--type--twitter"]
							}
							src="images/vector/icons/twitter.svg"
							alt="Twitter icon"
							width={24}
							height={20}
						/>
					</a>
				</li>
			</ul>
		</header>
	);
};
