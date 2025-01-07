"use client";

import { type ComponentPropsWithoutRef, type FC, type ReactNode, useState } from "react";
import { motion, type Variants } from "motion/react";

import styles from "./button.module.css";

type ButtonProps = {
	type?: "button" | "submit" | "reset";
	children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

type ButtonContentParameters = {
	className: string;
	animationVariants: Variants;
	children: ReactNode;
};

const buttonAnimationVariants: Variants = {
	initial: {
		y: 0,
		filter: "blur(0rem)"
	},
	active: {
		y: "calc(-1 * var(--button-height))",
		filter: "blur(calc(var(--button-height) / 8))"
	},
	inactive: {
		y: 0,
		filter: "blur(0rem)"
	}
};

const shadowButtonAnimationVariants: Variants = {
	initial: {
		y: 0,
		filter: "blur(calc(var(--button-height) / 8))"
	},
	active: {
		y: "calc(-1 * var(--button-height))",
		filter: "blur(0rem)"
	},
	inactive: {
		y: 0,
		filter: "blur(calc(var(--button-height) / 8))"
	}
};

export const Button: FC<ButtonProps> = ({ type = "button", children, ...rest }) => {
	const [buttonState, setButtonState] = useState<
		"idle" | "hovered" | "unHovered" | "touched" | "unTouched"
	>("idle");

	const renderButtonContent = ({
		className,
		animationVariants,
		children
	}: ButtonContentParameters) => (
		<motion.span
			className={className}
			initial={"initial"}
			animate={
				buttonState === "hovered" || buttonState === "touched"
					? "active"
					: buttonState === "unHovered" || buttonState === "unTouched"
						? "inactive"
						: "initial"
			}
			variants={animationVariants}
		>
			{children}
		</motion.span>
	);

	return (
		<button
			onMouseEnter={() => setButtonState("hovered")}
			onMouseLeave={() => setButtonState("unHovered")}
			onTouchStart={() => setButtonState("touched")}
			onTouchEnd={() => setButtonState("unTouched")}
			className={styles["button"]}
			type={type}
			{...rest}
		>
			<div className={styles["button__content-wrapper"]}>
				{renderButtonContent({
					className: styles["button__text"] + " " + styles["button__text--color--white"],
					animationVariants: buttonAnimationVariants,
					children
				})}
				{renderButtonContent({
					className: styles["button__text"] + " " + styles["button__text--color--green"],
					animationVariants: shadowButtonAnimationVariants,
					children
				})}
			</div>
		</button>
	);
};
