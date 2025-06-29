import { Suspense } from "react";

import { Hero } from "./hero";
import { HeroSkeleton } from "./hero-skeleton";

import { getBannerByIdServer } from "@pages/home/ui/sections/hero/api";

async function HeroWithData() {
	const bannerData = await getBannerByIdServer(1);

	return <Hero data={bannerData} />;
}

export function HeroContainer() {
	return (
		<Suspense fallback={<HeroSkeleton />}>
			<HeroWithData />
		</Suspense>
	);
}
