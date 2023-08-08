import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
	website: "https://milo.solar/",
	author: "Sat Naing",
	desc: "Milo's personal corner of the internet",
	title: "milo.solar",
	ogImage: "astropaper-og.jpg",
	lightAndDarkMode: true,
	postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
	enable: false,
	svg: true,
	width: 216,
	height: 46,
};

export const SOCIALS: SocialObjects = [
	{
		name: "Github",
		href: "https://github.com/Milo123459",
		linkTitle: ` ${SITE.title} on Github`,
		active: true,
	},
	{
		name: "Twitter",
		href: "https://twitter.com/SalvageDev",
		linkTitle: `${SITE.title} on Twitter`,
		active: true,
	},
	{
		name: "Discord",
		href: "https://discord.com/users/450212014912962560",
		linkTitle: `${SITE.title} on Discord`,
		active: true,
	},
];
