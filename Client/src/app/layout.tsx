import "./_styles/styles.css";

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
	preload: true,
	fallback: ["system-ui", "arial"],
	display: "auto"
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

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${spaceGrotesk.variable}`}>{children}</body>
		</html>
	);
}
