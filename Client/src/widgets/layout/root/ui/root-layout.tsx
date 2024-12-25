import { type FC, type ReactNode } from "react";

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import { Header } from "@widgets/header/ui";
import { Footer } from "@widgets/footer/ui";

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
	preload: true,
	fallback: ["system-ui", "arial"],
	display: "swap"
});

export const metadata: Metadata = {
	title: "Adam Keyes",
	description:
		"Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.",
	openGraph: {
		title: "Adam Keyes",
		description:
			"Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love."
	}
};

type RootLayoutProps = {
	children: ReactNode;
};

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
	return (
		<html lang="en" className={spaceGrotesk.variable}>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
};
