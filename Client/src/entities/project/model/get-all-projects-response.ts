export type GetAllProjectsResponse = {
	name: string;
	image: string;
	tags: Array<string>;
	links: {
		projectUrl: string;
		codeUrl: string;
	};
};
