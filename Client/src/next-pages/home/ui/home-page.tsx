import { type FC, type ReactElement } from "react";
import { Contact } from "./sections/contact/ui";
import { HeroContainer } from "@pages/home/ui/sections/hero/ui/hero-container";
import { ProjectsContainer } from "@pages/home/ui/sections/projects/ui/projects-container";
import { SkillsContainer } from "@pages/home/ui/sections/skills/ui/skills-container";

const homePageSections = new Set<ReactElement>([
	<HeroContainer key="hero-section" />,
	<SkillsContainer key="skills-section" />,
	<ProjectsContainer key="projects-section" />,
	<Contact key="contact-section" />
]);

export const HomePage: FC = () => {
	return <>{Array.from(homePageSections)}</>;
};
