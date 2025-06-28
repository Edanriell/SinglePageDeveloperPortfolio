"use client";

import { type FC, useState } from "react";
import { Formik } from "formik";

import { Input } from "@shared/ui/input/ui";
import { Button } from "@shared/ui/button/ui";
import { Spinner } from "@shared/ui/spinner/ui";

import type { CreateContactDto } from "@entities/contact/model";
import { ContactApi } from "@entities/contact/api";

import { initialContactFormValues } from "../model";
import { validateContactForm } from "../lib";

import styles from "./contact-form.module.css";
import { ApiError } from "@shared/api";

type ContactFormProps = {
	className?: string;
};

export const ContactForm: FC<ContactFormProps> = ({ className }) => {
	const [submitStatus, setSubmitStatus] = useState<{
		type: "idle" | "loading" | "success" | "error";
		message: string | null;
	}>({ type: "idle", message: null });

	const handleContactFormSubmit = async (
		values: CreateContactDto,
		{
			setSubmitting,
			resetForm
		}: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
	) => {
		try {
			setSubmitStatus({ type: "loading", message: null });

			await ContactApi.createContact(values);

			setSubmitStatus({
				type: "success",
				message: "Thank you! Your message has been sent successfully."
			});

			resetForm();

			setTimeout(() => {
				setSubmitStatus({ type: "idle", message: null });
			}, 5000);
		} catch (error) {
			let errorMessage = "Failed to send message. Please try again.";

			if (error instanceof ApiError) {
				errorMessage = error.message;
			}

			setSubmitStatus({
				type: "error",
				message: errorMessage
			});
		} finally {
			setSubmitting(false);
		}
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
					<Input
						type="text"
						placeholder="Name"
						name="name"
						id="name"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.name}
						touched={!!touched.name}
						error={errors.name}
					/>
					<Input
						type="email"
						placeholder="Email"
						name="email"
						id="email"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
						touched={!!touched.email}
						error={errors.email}
					/>
					<Input
						type="textarea"
						placeholder="Message"
						name="message"
						id="message"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.message}
						touched={!!touched.message}
						error={errors.message}
					/>
					<Button type="submit" disabled={isSubmitting}>
						{isSubmitting ? (
							<div className={styles["contact-form__button"]}>
								<Spinner />
								<span>Sending...</span>
							</div>
						) : (
							"Send Message"
						)}
					</Button>
				</form>
			)}
		</Formik>
	);
};
