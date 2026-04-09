"use client";

import { Icons } from "@/components/icons";
import { LiquidButton } from "@/components/liquid-glass-button";
import { AnimatedCarousel } from "@/components/logo-carousel";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { SparklesCore } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { unstable_ViewTransition as ViewTransition } from "react";

function AgeCounter() {
	const counterRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const startYear = new Date("2005-03-31");
		const msPerYear = 1000 * 60 * 60 * 24 * 365.25;

		const updateAge = () => {
			const now = new Date();
			const years = now.getTime() - startYear.getTime();
			const age = years / msPerYear;
			if (counterRef.current) {
				counterRef.current.textContent = `I am ${age.toFixed(9)} years`;
			}
		};

		const interval = setInterval(updateAge, 50);
		return () => clearInterval(interval);
	}, []);

	return <div ref={counterRef} className="counter" />;
}

export default function Home() {
	return (
		<ViewTransition name="page">
			<main className={cn("flex flex-1 flex-col items-center")}>
				<AgeCounter />
				<div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
					<h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
						Marco D'Antino
					</h1>
					<div className="w-[90rem] h-40 relative">
						<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
						<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
						<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
						<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

						<SparklesCore
							background="transparent"
							minSize={0.4}
							maxSize={1}
							particleDensity={1200}
							className="w-full h-full"
							particleColor="#FFFFFF"
						/>
						<div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(550px_200px_at_top,transparent_20%,white)]" />
						<a href="https://www.instagram.com/">
							<LiquidButton className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
								Contact!
							</LiquidButton>
						</a>
					</div>
				</div>
				<PortfolioGallery />

				<AnimatedCarousel
					title="Carousel Skills"
					autoPlay={true}
					autoPlayInterval={4000}
					itemsPerViewMobile={3}
					itemsPerViewDesktop={5}
					logoContainerWidth="w-40"
					logoContainerHeight="h-20"
					logoImageWidth="w-auto"
					logoImageHeight="h-10"
				/>
			</main>
		</ViewTransition>
	);
}
