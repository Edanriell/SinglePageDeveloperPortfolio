import { type ChangeEvent, type FC, type FocusEvent, type ReactElement } from "react";
import { clsx } from "clsx";

import styles from "./input.module.css";

import "./input.css";

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
	const textInputClasses = clsx(`${styles["input"]} ${styles["input--type--text"]}`, {
		"input__type--idle": !value && !touched,
		"input__type--valid": !error && value && touched,
		"input__type--invalid": error && touched
	});

	const emailInputClasses = clsx(`${styles["input"]} ${styles["input--type--email"]}`, {
		"input__type--idle": !value && !touched,
		"input__type--valid": !error && value && touched,
		"input__type--invalid": error && touched
	});

	const textareaInputClasses = clsx(`${styles["textarea"]}`, {
		"textarea__type--idle": !value && !touched,
		"textarea__type--valid": !error && value && touched,
		"textarea__type--invalid": error && touched
	});

	const inputTypes = new Map<string, () => ReactElement>([
		[
			"text",
			() => (
				<input
					className={textInputClasses}
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
				<input
					className={emailInputClasses}
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
				<textarea
					id={id}
					name={name}
					className={textareaInputClasses}
					placeholder={placeholder}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
				/>
			)
		]
	]);

	return (
		<div className={styles["input-field"]}>
			<label className="visually-hidden" htmlFor={id}>
				{placeholder}
			</label>
			{inputTypes.get(type)!()}
			{error && touched && (
				<p className={styles["input__validation-error-message"]}>{error}</p>
			)}
		</div>
	);
};
