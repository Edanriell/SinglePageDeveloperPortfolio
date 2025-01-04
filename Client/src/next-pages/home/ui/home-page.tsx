import { type FC, type ReactElement } from "react";

import { Hero } from "./sections/hero/ui";
import { Skills } from "./sections/skills/ui";
import { Projects } from "./sections/projects/ui";
import { Contact } from "./sections/contact/ui";

const homePageSections = new Set<ReactElement>([
	<Hero key="hero-section" />,
	<Skills key="skills-section" />,
	<Projects key="projects-section" />,
	<Contact key="contact-section" />
]);

export const HomePage: FC = () => {
	return <>{Array.from(homePageSections)}</>;
};
