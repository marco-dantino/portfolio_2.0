"use client";

import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { TextRoll } from "./ui/text-roll"; // Assuming text-roll.tsx is in the same directory

export const AnimatedCarousel = ({
	title = "Trusted by thousands of businesses worldwide",
	logoCount = 10,
	autoPlay = true,
	autoPlayInterval = 4000,
	logos = [
		{
			src: "https://cdn.worldvectorlogo.com/logos/utn-2.svg",
			alt: "UTN",
		},
		{
			src: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
			alt: "Next.js",
		},
		{
			src: "https://cdn.worldvectorlogo.com/logos/netframework-1.svg",
			alt: "NET Framework",
		},
		{ src: "https://cdn.worldvectorlogo.com/logos/vercel.svg", alt: "Vercel" },
		{
			src: "https://cdn.worldvectorlogo.com/logos/javascript-2.svg",
			alt: "JavaScript",
		},
		{
			src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
			alt: "Tailwind CSS",
		},
		{
			src: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
			alt: "Stripe",
		},
		{
			src: "https://cdn.worldvectorlogo.com/logos/notion-2.svg",
			alt: "Notion",
		},
		{
			src: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
			alt: "GitHub",
		},
		{
			src: "https://cdn.worldvectorlogo.com/logos/figma-icon-one-color.svg",
			alt: "Figma",
		},
	],
	titleClassName = "",
	carouselClassName = "",
	logoClassName = "",
	itemsPerViewMobile = 4,
	itemsPerViewDesktop = 9,
	spacing = "gap-10",
	padding = "py-20 lg:py-40",
	// New logo size customization props
	logoContainerWidth = "w-48",
	logoContainerHeight = "h-24",
	logoImageWidth = "w-full",
	logoImageHeight = "h-full",
	logoMaxWidth = "",
	logoMaxHeight = "",
}) => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api || !autoPlay) {
			return;
		}

		const timer = setTimeout(() => {
			if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
				setCurrent(0);
				api.scrollTo(0);
			} else {
				api.scrollNext();
				setCurrent(current + 1);
			}
		}, autoPlayInterval);

		return () => clearTimeout(timer);
	}, [api, current, autoPlay, autoPlayInterval]);

	const logoItems =
		logos ||
		Array.from(
			{ length: logoCount },
			(_, i) =>
				`https://th.bing.com/th/id/R.4aa108082e7d3cbd55add79f84612aaa?rik=I4dbPhSe%2fbHHSg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png&ehk=ewmaCOvP0Ji4QViEJnxSdlrYUrTSTWhi8nZ9XdyCgAI%3d&risl=&pid=ImgRaw&r=0100x100?text=Logo+${i + 1}`,
		);

	// Combine logo image size classes
	const logoImageSizeClasses =
		`${logoImageWidth} ${logoImageHeight} ${logoMaxWidth} ${logoMaxHeight}`.trim();

	return (
		<div className={`w-full ${padding}`}>
			<div className="container mx-auto">
				<div className={`flex flex-col ${spacing}`}>
					<h2
						className={`text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left ml-2 text-foreground ${titleClassName}`}
					>
						<TextRoll>{title}</TextRoll>
					</h2>

					<div>
						<Carousel setApi={setApi} className={`w-full ${carouselClassName}`}>
							<CarouselContent>
								{logoItems.map((logo, index) => (
									<CarouselItem
										className={`basis-1/${itemsPerViewMobile} lg:basis-1/${itemsPerViewDesktop}`}
										key={index}
									>
										<div
											className={`flex rounded-md ${logoContainerWidth} ${logoContainerHeight} items-center justify-center p-4 hover:bg-accent transition-colors ${logoClassName}`}
										>
											<img
												src={typeof logo === "string" ? logo : logo.src}
												alt={
													typeof logo === "string"
														? `Logo ${index + 1}`
														: logo.alt
												}
												className={`${logoImageSizeClasses} object-contain filter brightness-0 dark:brightness-0 dark:invert`}
											/>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Case1 = (props) => {
	return <AnimatedCarousel {...props} />;
};
