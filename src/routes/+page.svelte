<script>
	// GSAP EXAMPLE
	// import { onMount } from 'svelte';
	// import { gsap } from 'gsap';

	// onMount(() => {
	// 	try {
	// 		gsap.to('.box', { rotation: 27, x: 100, scale: 0.8, duration: 1 });
	// 	} catch (error) {
	// 		console.error('Error in GSAP animation:', error);
	// 	}
	// });

	// Placed the text here to test if works across site: CONFIRMED
	// Supports weights 100-700
	import '@fontsource-variable/josefin-sans';
	import '@fontsource/rubik-dirt';
	import ProjectBanner from '../components/ProjectBanner.svelte';
	import Badge from '../components/Badge.svelte';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	onMount(() => {
		try {
			gsap.from('.name', { scale: 0.5, duration: 2 });
			gsap.to('.name', { color: 'orange', duration: 5 });
		} catch (error) {
			console.error('Error in GSAP animation:', error);
		}
	});

	const skills = [
		'React',
		'Javascript',
		'Node.js',
		'Express',
		'SQL',
		'TailwindCSS',
		'SASS',
		'Git',
		'Docker',
		'GCP',
		'Figma',
		'Svelte',
		'Ruby',
		'Python'
	];

	const shoeShow = {
		leading: 'Take Back Your Souls',
		projectName: 'Shoe Show',
		viewCodeUrl: 'https://github.com/CEODemitri/Shoe-Show-V3',
		liveViewUrl: 'https://shoe-show-v3.vercel.app/',
		images: ['/projects/shoe1.png'],
		descriptionTitle: 'Full Stack Application',
		description:
			'Combination of Appwrite and NextJS to create a powerful App for an Up and Coming Brand Name Shoe Enthusiast.'
	};

	const toCode = {
		leading: 'A Mind of their Own',
		projectName: 'To Code',
		viewCodeUrl: 'https://github.com/CEODemitri/To-Code',
		liveViewUrl: 'https://to-code.netlify.app/',
		images: ['/projects/to_code1.png'],
		descriptionTitle: 'New Age Blog',
		description:
			'Learning the Template framework Eleventy on a marvelous ride taught by Kevin Powell.'
	};

	const burgerBrothers = {
		leading: 'Restaraunt ',
		projectName: 'To Code',
		viewCodeUrl: 'https://github.com/CEODemitri/To-Code',
		liveViewUrl: 'https://to-code.netlify.app/',
		images: ['/projects/burger1.png'],
		descriptionTitle: 'Fresh Food and Service',
		description:
			'Eating like we want in this life, why not? Under construction but over excited about completing.'
	};
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/opiuijVeWTy
-->

<div class="flex flex-col min-h-[100dvh]">
	<main class="font-['Josefin_Sans_Variable']">
		<!-- style="background-image: url(/bg/lg.jpeg); -->
		<div class="hero min-h-[80vh] bg-blue-900/60">
			<div class="hero-overlay bg-opacity-60"></div>
			<div class="hero-content text-neutral-content text-center">
				<div class="space-y-4 bg-slate-800/90 px-4 py-8 rounded-lg">
					<h1
						class="name text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl font-['Rubik_Dirt']"
					>
						Demitri Echols
					</h1>
					<p
						class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						I'm a passionate creative developer with expertise in building modern, responsive web
						applications.
					</p>
					<a
						class="inline-flex h-10 items-center justify-center rounded-md bg-teal-600 px-8 text-sm font-medium text-primary-foreground shadow hover:bg-gradient-to-r from-[#5f6caf] to-[#49a09d] duration-600 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
						href="#projects"
					>
						View Projects
					</a>
				</div>
			</div>
		</div>
		<section id="projects" class="w-full py-12 md:py-24 lg:py-32 bg-muted">
			<div class="grid gap-6 px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
						<p
							class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Check out some of my recent web applications.
						</p>
					</div>
				</div>
				<div class=" flex flex-col gap-24">
					<ProjectBanner {...shoeShow} />
					<ProjectBanner {...toCode} />
					<ProjectBanner {...burgerBrothers} />

					<button class="btn btn-block">All Projects</button>
				</div>
			</div>
		</section>
		<section id="ux-portfolio" class="w-full py-12 md:py-24 lg:py-32 bg-muted">
			<div class="grid gap-6 px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
							Check out some of my UX design work.
						</h2>
						<p
							class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							UX Portfolio
						</p>
					</div>
				</div>
				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<div
						class="border bg-card text-card-foreground shadow-sm overflow-hidden rounded-lg"
						data-v0-t="card"
					>
						<div class="p-6 space-y-2">
							<img
								src="/placeholder.svg"
								width="400"
								height="300"
								alt="UX Project 1"
								class="mx-auto aspect-video overflow-hidden object-cover"
							/>
							<div class="space-y-1 p-4">
								<h3 class="text-lg font-bold">A mobile app design for a fitness tracking app.</h3>
								<p class="text-muted-foreground">liteHouse</p>
							</div>
						</div>
					</div>
					<div
						class="border bg-card text-card-foreground shadow-sm overflow-hidden rounded-lg"
						data-v0-t="card"
					>
						<div class="p-6 space-y-2">
							<img
								src="/placeholder.svg"
								width="400"
								height="300"
								alt="UX Project 2"
								class="mx-auto aspect-video overflow-hidden object-cover"
							/>
							<div class="space-y-1 p-4">
								<h3 class="text-lg font-bold">A website redesign for an e-commerce platform.</h3>
								<p class="text-muted-foreground">Wholer Foods</p>
							</div>
						</div>
					</div>
					<div
						class="border bg-card text-card-foreground shadow-sm overflow-hidden rounded-lg"
						data-v0-t="card"
					>
						<div class="p-6 space-y-2">
							<img
								src="/placeholder.svg"
								width="400"
								height="300"
								alt="UX Project 3"
								class="mx-auto aspect-video overflow-hidden object-cover"
							/>
							<div class="space-y-1 p-4">
								<h3 class="text-lg font-bold">A dashboard design for a project management tool.</h3>
								<p class="text-muted-foreground">Zen: Dojo Inventory Management System</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="skills" class="w-full py-12 md:py-24 lg:py-32 bg-slate-800">
			<div class="grid gap-6 px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2 text-neutral-300">
						<h2 class="text-xl font-bold tracking-wide sm:text-3xl">
							Here are some of the technologies I'm proficient in.
						</h2>
						<p class="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							My Skills
						</p>
					</div>
				</div>
				<div
					class="mx-auto grid max-w-5xl grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
				>
					{#each skills as skill}
						<Badge title={skill} />
					{/each}
				</div>
			</div>
		</section>
		<section id="contact" class="w-full py-12 md:py-24 lg:py-32 bg-muted">
			<div class="grid gap-6 px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
						<p
							class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Have a project in mind? Let's discuss how I can help.
						</p>
					</div>
				</div>
				<form class="mx-auto w-full max-w-md space-y-4">
					<input
						class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
						type="text"
						placeholder="Name"
					/>
					<input
						class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
						type="email"
						placeholder="Email"
					/>
					<textarea
						class="flex min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
						placeholder="Message"
					></textarea>
					<button
						class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		</section>
	</main>
</div>
