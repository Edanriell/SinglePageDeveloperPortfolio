import { type ComponentPropsWithoutRef, type FC, type ReactNode } from "react";

import styles from "./button.module.css";

type ButtonProps = {
	type?: "button" | "submit" | "reset";
	children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export const Button: FC<ButtonProps> = ({ type = "button", children, ...rest }) => {
	return (
		<button className={styles["button"]} type={type} {...rest}>
			{children}
		</button>
	);
};
