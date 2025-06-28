import type { FC } from "react";

import styles from "./spinner.module.css";

export const Spinner: FC = () => (
	<div className={styles.spinner}>
		<svg
			className={styles["spinner-svg"]}
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				className={styles["spinner-circle"]}
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeDasharray="31.416"
				strokeDashoffset="31.416"
			/>
		</svg>
	</div>
);
