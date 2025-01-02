import { type FC } from "react";

import { Button } from "@shared/ui/button/ui";

import styles from "./contact-form.module.css";

type ContactFormProps = {
	className?: string;
};

export const ContactForm: FC<ContactFormProps> = ({ className }) => {
	return (
		<form className={className + " " + styles["contact-form"]}>
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
			<Button type="submit">Send message</Button>
		</form>
	);
};
