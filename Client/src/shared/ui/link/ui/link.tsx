"use client";

import { type ComponentPropsWithoutRef, type FC, type ReactNode, useState } from "react";
import { motion, type Variants } from "motion/react";

import styles from "./link.module.css";

type LinkProps = {
	href: string;
	target?: "_blank" | "_self" | "_top" | "_parent";
	children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

type LinkContentParameters = {
	className: string;
	animationVariants: Variants;
	children: ReactNode;
};

const linkAnimationVariants: Variants = {
	initial: {
		y: 0,
		filter: "blur(0rem)"
	},
	active: {
		y: "calc(-1 * var(--link-height))",
		filter: "blur(5rem)"
	},
	inactive: {
		y: 0,
		filter: "blur(0rem)"
	}
};

const shadowLinkAnimationVariants: Variants = {
	initial: {
		y: 0,
		filter: "blur(5rem)"
	},
	active: {
		y: "calc(-1 * var(--link-height))",
		filter: "blur(0rem)"
	},
	inactive: {
		y: 0,
		filter: "blur(5rem)"
	}
};

export const Link: FC<LinkProps> = ({ href, target = "_self", children, ...rest }) => {
	const [linkState, setLinkState] = useState<
		"idle" | "hovered" | "unHovered" | "touched" | "unTouched"
	>("idle");

	const renderLinkContent = ({
		className,
		animationVariants,
		children
	}: LinkContentParameters) => (
		<motion.span
			className={className}
			initial={"initial"}
			animate={
				linkState === "hovered" || linkState === "touched"
					? "active"
					: linkState === "unHovered" || linkState === "unTouched"
						? "inactive"
						: "initial"
			}
			variants={animationVariants}
		>
			{children}
		</motion.span>
	);

	return (
		<a
			onMouseEnter={() => setLinkState("hovered")}
			onMouseLeave={() => setLinkState("unHovered")}
			onTouchStart={() => setLinkState("touched")}
			onTouchEnd={() => setLinkState("unTouched")}
			className={styles["link"]}
			href={href}
			target={target}
			{...rest}
		>
			<div className={styles["link__content-wrapper"]}>
				{renderLinkContent({
					className: styles["link__text"] + " " + styles["link__text--color--white"],
					animationVariants: linkAnimationVariants,
					children
				})}
				{renderLinkContent({
					className: styles["link__text"] + " " + styles["link__text--color--green"],
					animationVariants: shadowLinkAnimationVariants,
					children
				})}
			</div>
		</a>
	);
};
