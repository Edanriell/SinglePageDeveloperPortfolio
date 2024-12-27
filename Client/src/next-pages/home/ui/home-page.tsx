import { type FC } from "react";

import { Hero } from "./sections/hero/ui";
import { Skills } from "./sections/skills/ui";

export const HomePage: FC = () => {
	return (
		<>
			<Hero />
			<Skills />
		</>
	);
};
