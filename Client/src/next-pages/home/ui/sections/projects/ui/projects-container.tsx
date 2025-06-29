import { Suspense } from "react";

import { Projects } from "./projects";
import { ProjectsSkeleton } from "./projects-skeleton";

import { getAllProjectsServer } from "../api";

async function ProjectsWithData() {
	const projectsData = await getAllProjectsServer();

	return <Projects data={projectsData} />;
}

export function ProjectsContainer() {
	return (
		<Suspense fallback={<ProjectsSkeleton projectsLoading={6} />}>
			<ProjectsWithData />
		</Suspense>
	);
}
