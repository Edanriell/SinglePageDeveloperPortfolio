import { type FC } from "react";
import Image from "next/image";

import { ContactForm } from "@features/contact-form/ui";

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
			<ContactForm className={styles["section-contact__contact-form"]} />
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
