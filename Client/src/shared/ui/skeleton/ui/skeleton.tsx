import styles from "./skeleton.module.css";

import { type CSSProperties, type FC, type HTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
	width?: string | number;
	height?: string | number;
	variant?: "text" | "rectangular" | "circular" | "rounded";
	animation?: "pulse" | "wave" | "none";
	className?: string;
	loading?: boolean;
	children?: ReactNode;
}

export const Skeleton: FC<SkeletonProps> = ({
	width,
	height,
	variant = "rectangular",
	animation = "pulse",
	className,
	loading = true,
	children,
	style,
	...props
}) => {
	if (!loading && children) {
		return <>{children}</>;
	}

	if (!loading) {
		return null;
	}

	const skeletonStyle: CSSProperties = {
		width: typeof width === "number" ? `${width}px` : width,
		height: typeof height === "number" ? `${height}px` : height,
		...style
	};

	return (
		<div
			className={clsx(
				styles.skeleton,
				styles[`skeleton--${variant}`],
				styles[`skeleton--${animation}`],
				className
			)}
			style={skeletonStyle}
			aria-label="Loading..."
			role="status"
			{...props}
		/>
	);
};
