import { type FC } from "react";
import Image from "next/image";

import circlesImage from "@public/images/vector/circles.svg";

import styles from "./contact.module.css";

export const Contact: FC = () => {
	return (
		<section id="contact-me" className={styles["section-contact"]}>
			<div className={styles["section-contact__content"]}>
				<h2 className={styles["section-contact__title"]}>Contact</h2>
				<p className={styles["section-contact__text"]}>
					I would love to hear about your project and how I could help. Please fill in the
					form, and I’ll get back to you as soon as possible.
				</p>
			</div>
			<form className={styles["section-contact__form"] + " " + styles["form"]}>
				<div className={styles["input-field"]}>
					<label className="visually-hidden" htmlFor="name">
						Full name
					</label>
					<input
						className={styles["input"] + " " + styles["input--type--text"]}
						name="name"
						type="text"
						placeholder="Name"
						id="name"
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className="visually-hidden" htmlFor="email">
						Email address
					</label>
					<input
						className={styles["input"] + " " + styles["input--type--email"]}
						name="email"
						type="email"
						placeholder="Email"
						id="email"
					/>
				</div>
				<div className={styles["input-field"]}>
					<label className="visually-hidden" htmlFor="message">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						className={styles["textarea"]}
						placeholder="Message"
					/>
				</div>
				<button className={styles["button"]} type="submit">
					Send message
				</button>
			</form>
			<Image
				className={styles["section-contact__circles-image"]}
				src={circlesImage}
				width={530}
				height={129}
				alt=""
			/>
		</section>
	);
};
