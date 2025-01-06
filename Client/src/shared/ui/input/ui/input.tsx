"use client";

import { type ChangeEvent, type FC, type FocusEvent, type ReactElement } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Icon } from "@shared/ui/icon/ui";

import styles from "./input.module.css";

type InputProps = {
	type?: "text" | "email" | "textarea";
	name: string;
	placeholder: string;
	id: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	error?: string;
	touched?: boolean;
};

const validationErrorMessageAnimationVariants = {
	initial: {
		opacity: 0,
		x: -15,
		filter: "blur(calc(var(--validation-error-message-height) / 5))"
	},
	displayed: { opacity: 1, x: 0, filter: "blur(0rem)" },
	hidden: {
		opacity: 0,
		x: -15,
		filter: "blur(calc(var(--validation-error-message-height) / 5))"
	}
};

const validationErrorIconWrapperAnimationVariants = {
	initial: {
		opacity: 0,
		scale: 0.75,
		filter: "blur(calc((var(--validation-error-icon-wrapper-width) + var(--validation-error-icon-wrapper-height)) / 16))"
	},
	displayed: { opacity: 1, scale: 1, filter: "blur(0rem)" },
	hidden: {
		opacity: 0,
		scale: 0.75,
		filter: "blur(calc((var(--validation-error-icon-wrapper-width) + var(--validation-error-icon-wrapper-height)) / 16))"
	}
};

const inputAnimationVariants = {
	idle: {
		borderBottom: "1rem solid #ffffff"
	},
	valid: {
		borderBottom: "1rem solid #4ce19e"
	},
	invalid: {
		borderBottom: "1rem solid #ff6f5b"
	}
};

export const Input: FC<InputProps> = ({
	type = "text",
	name,
	placeholder,
	id,
	value,
	onChange,
	onBlur,
	error,
	touched
}) => {
	const inputVariants = new Map<string, () => ReactElement>([
		[
			"text",
			() => (
				<motion.input
					variants={inputAnimationVariants}
					animate={
						(!value && !touched && "idle") ||
						(!error && value && touched && "valid") ||
						(error && touched && "invalid")
					}
					className={styles["input"] + " " + styles["input--type--text"]}
					name={name}
					type="text"
					placeholder={placeholder}
					id={id}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
				/>
			)
		],
		[
			"email",
			() => (
				<motion.input
					variants={inputAnimationVariants}
					animate={
						(!value && !touched && "idle") ||
						(!error && value && touched && "valid") ||
						(error && touched && "invalid")
					}
					className={styles["input"] + " " + styles["input--type--email"]}
					name={name}
					type="email"
					placeholder={placeholder}
					id={id}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
				/>
			)
		],
		[
			"textarea",
			() => (
				<motion.textarea
					variants={inputAnimationVariants}
					animate={
						(!value && !touched && "idle") ||
						(!error && value && touched && "valid") ||
						(error && touched && "invalid")
					}
					id={id}
					name={name}
					className={styles["textarea"]}
					placeholder={placeholder}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
				/>
			)
		]
	]);

	const input = inputVariants.get(type);

	if (!input) {
		throw new Error(`Input of type "${type}" is not defined.`);
	}

	return (
		<div className={styles["input-field"]}>
			<label className="visually-hidden" htmlFor={id}>
				{placeholder}
			</label>
			{input()}
			<AnimatePresence>
				{error && touched && (
					<motion.p
						variants={validationErrorMessageAnimationVariants}
						initial={"initial"}
						animate={"displayed"}
						exit={"hidden"}
						className={styles["input__validation-error-message"]}
					>
						{error}
					</motion.p>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{error && touched && (
					<motion.div
						variants={validationErrorIconWrapperAnimationVariants}
						initial={"initial"}
						animate={"displayed"}
						exit={"hidden"}
						className={styles["input__validation-error-icon-wrapper"]}
					>
						<Icon type="exclamationMark" />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
