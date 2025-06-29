import { type FC, type ReactElement } from "react";
import { Skills } from "./sections/skills/ui";
import { Projects } from "./sections/projects/ui";
import { Contact } from "./sections/contact/ui";
import { HeroContainer } from "@pages/home/ui/sections/hero/ui/hero-container";

const homePageSections = new Set<ReactElement>([
	<HeroContainer key="hero-section" />,
	<Skills key="skills-section" />,
	<Projects key="projects-section" />,
	<Contact key="contact-section" />
]);

export const HomePage: FC = () => {
	return <>{Array.from(homePageSections)}</>;
};
