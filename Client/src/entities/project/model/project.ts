import type { StaticImageData } from "next/image";

export type Project = {
	name: string;
	image: StaticImageData;
	tags: Array<string>;
	links: {
		project: string;
		code: string;
	};
};
