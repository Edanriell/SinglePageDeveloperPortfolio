"use client";

import { type FC } from "react";
import { Formik } from "formik";

import { Button } from "@shared/ui/button/ui";

import { initialContactFormValues } from "../model";
import { validateContactForm } from "../lib";

import styles from "./contact-form.module.css";

type ContactFormProps = {
	className?: string;
};

export const ContactForm: FC<ContactFormProps> = ({ className }) => {
	const handleContactFormSubmit = (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 400);
	};

	return (
		<Formik
			initialValues={initialContactFormValues}
			validate={validateContactForm}
			onSubmit={handleContactFormSubmit}
		>
			{({
				touched,
				values,
				errors,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting
			}) => (
				<form onSubmit={handleSubmit} className={className + " " + styles["contact-form"]}>
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
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						/>
						{errors.name && touched.name && (
							<p className={styles["input__validation-error-message"]}>
								{errors.name}
							</p>
						)}
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
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						{errors.email && touched.email && (
							<p className={styles["input__validation-error-message"]}>
								{errors.email}
							</p>
						)}
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
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.message}
						/>
						{errors.message && touched.message && (
							<p className={styles["input__validation-error-message"]}>
								{errors.message}
							</p>
						)}
					</div>
					<Button type="submit" disabled={isSubmitting}>
						Send message
					</Button>
				</form>
			)}
		</Formik>
	);
};
