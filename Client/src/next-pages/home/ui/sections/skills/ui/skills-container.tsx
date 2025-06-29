import { Suspense } from "react";

import { Skills } from "./skills";
import { SkillsSkeleton } from "./skills-skeleton";

import { getAllSkillsServer } from "../api";

async function SkillsWithData() {
	const skillsData = await getAllSkillsServer();

	return <Skills data={skillsData} />;
}

export function SkillsContainer() {
	return (
		<Suspense fallback={<SkillsSkeleton skillsLoading={6} />}>
			<SkillsWithData />
		</Suspense>
	);
}
