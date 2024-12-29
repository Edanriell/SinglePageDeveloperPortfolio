import { type FC } from "react";

import styles from "./contact.module.css";

export const Contact: FC = () => {
	return (
		<section className={styles["section-contact"]}>
			<div className={styles["section-contact__content"]}>
				<h2 className={styles["section-contact__title"]}>Contact</h2>
				<p className={styles["section-contact__text"]}>
					I would love to hear about your project and how I could help. Please fill in the
					form, and I’ll get back to you as soon as possible.
				</p>
			</div>
			<form className={styles["section-contact__form"]}>
				<div className={styles["input-field"]}>
					<label className={styles["input-label"]} htmlFor="name">
						Name
					</label>
					<input
						className={styles["input"] + " " + styles["input--type--text"]}
						name="name"
						type="text"
						placeholder="Name"
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className={styles["input-label"]} htmlFor="email">
						Email
					</label>
					<input
						className={styles["input"] + " " + styles["input--type--email"]}
						name="email"
						type="email"
						placeholder="Email"
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className={styles["input-label"]} htmlFor="message">
						Message
					</label>
					<textarea name="message" placeholder="Message" />
				</div>
				<button type="submit">Send message</button>
			</form>
		</section>
	);
};
