import type { MainNavItem, SidebarNavItem } from "@/types";

interface NavConfig {
	main: MainNavItem[];
	side: SidebarNavItem[];
}

export const navConfig: NavConfig = {
	main: [
		{
			title: "Home",
			href: "/",
		},
	],
	side: [
		{
			title: "Demo section",
			items: [
				{
					title: "Demo",
					href: "/demo",
					label: "demo label",
					items: [],
				},
			],
		},
	],
};
