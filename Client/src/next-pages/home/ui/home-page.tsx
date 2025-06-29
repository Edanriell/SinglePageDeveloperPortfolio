import { type FC, type ReactElement } from "react";
import { Skills } from "./sections/skills/ui";
import { Contact } from "./sections/contact/ui";
import { HeroContainer } from "@pages/home/ui/sections/hero/ui/hero-container";
import { ProjectsContainer } from "@pages/home/ui/sections/projects/ui/projects-container";

const homePageSections = new Set<ReactElement>([
	<HeroContainer key="hero-section" />,
	<Skills key="skills-section" />,
	<ProjectsContainer key="projects-section" />,
	<Contact key="contact-section" />
]);

export const HomePage: FC = () => {
	return <>{Array.from(homePageSections)}</>;
};
