<script>
	// GSAP EXAMPLE
	// import { onMount } from 'svelte';
	// import { gsap } from 'gsap';
	// import Carousel from '../components/Carousel.svelte';

	// onMount(() => {
	// 	try {
	// 		gsap.to('.box', { rotation: 27, x: 100, scale: 0.8, duration: 1 });
	// 	} catch (error) {
	// 		console.error('Error in GSAP animation:', error);
	// 	}
	// });

	import ProjectBanner from '../components/ProjectBanner.svelte';
	import Badge from '../components/Badge.svelte';

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
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/opiuijVeWTy
-->

<div class="flex flex-col min-h-[100dvh]">
	<header class="px-4 lg:px-6 h-14 flex items-center">
		<a class="flex items-center justify-center" href="/">
			Demitri Echols
			<span class="sr-only">Demitri Echols' Portfolio</span>
		</a>
		<nav class="ml-auto flex gap-4 sm:gap-6">
			<a class="text-sm font-medium hover:underline underline-offset-4" href="#"> About </a>
			<a class="text-sm font-medium hover:underline underline-offset-4" href="#"> Projects </a>
			<a class="text-sm font-medium hover:underline underline-offset-4" href="#"> UX Portfolio </a>
			<a class="text-sm font-medium hover:underline underline-offset-4" href="#"> Skills </a>
			<a class="text-sm font-medium hover:underline underline-offset-4" href="#"> Contact </a>
		</nav>
	</header>
	<main class="">
		<section class="w-full py-12 md:py-24 lg:py-32">
			<div class="grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
				<div class="space-y-4 bg-slate-800 px-4 py-8 rounded-lg">
					<h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
						Demitri Echols
					</h1>
					<p
						class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						I'm a passionate creative developer with expertise in building modern, responsive web
						applications.
					</p>
					<a
						class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
						href="#"
					>
						View Projects
					</a>
				</div>
				<div class="flex items-center justify-center">
					<img
						src="/placeholder.svg"
						width="400"
						height="400"
						alt="Hero"
						class="mx-auto aspect-square overflow-hidden rounded-full object-cover"
					/>
				</div>
			</div>
		</section>
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
				<div class="">
					<ProjectBanner />
				</div>
			</div>
		</section>
		<section id="ux-portfolio" class="w-full py-12 md:py-24 lg:py-32 bg-muted">
			<div class="grid gap-6 px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">UX Portfolio</h2>
						<p
							class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Check out some of my UX design work.
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
								<h3 class="text-lg font-bold">UX Project 1</h3>
								<p class="text-muted-foreground">A mobile app design for a fitness tracking app.</p>
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
								<h3 class="text-lg font-bold">UX Project 2</h3>
								<p class="text-muted-foreground">A website redesign for an e-commerce platform.</p>
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
								<h3 class="text-lg font-bold">UX Project 3</h3>
								<p class="text-muted-foreground">
									A dashboard design for a project management tool.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="skills" class="w-full py-12 md:py-24 lg:py-32">
			<div class="grid gap-6 px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-xl font-bold tracking-wide sm:text-3xl">
							Here are some of the technologies I'm proficient in.
						</h2>
						<p
							class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
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
