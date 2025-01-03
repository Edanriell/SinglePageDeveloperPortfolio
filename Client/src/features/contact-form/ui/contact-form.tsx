"use client";

import { type FC } from "react";
import { Formik } from "formik";

import { Input } from "@shared/ui/input/ui";
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
						Send message
					</Button>
				</form>
			)}
		</Formik>
	);
};
