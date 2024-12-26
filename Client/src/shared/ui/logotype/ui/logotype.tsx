import { type FC } from "react";

import styles from "./logotype.module.css";

type LogotypeProps = {
	text: string;
};

export const Logotype: FC<LogotypeProps> = ({ text }) => {
	return <p className={styles["logotype"]}>{text}</p>;
};
