import { type FC } from "react";

import { Hero } from "./sections/hero/ui";
import { Skills } from "./sections/skills/ui";
import { Projects } from "./sections/projects/ui";

export const HomePage: FC = () => {
	return (
		<>
			<Hero />
			<Skills />
			<Projects />
		</>
	);
};
