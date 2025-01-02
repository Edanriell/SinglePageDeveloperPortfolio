import { type FC, type ReactNode } from "react";

import styles from "./button.module.css";

type ButtonProps = {
	type?: "button" | "submit" | "reset";
	children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ type = "button", children }) => {
	return (
		<button className={styles["button"]} type={type}>
			{children}
		</button>
	);
};
