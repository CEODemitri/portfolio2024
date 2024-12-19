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
	import '@fontsource/livvic';
	import ProjectBanner from '../components/ProjectBanner.svelte';
	import Badge from '../components/Badge.svelte';
	import Github from '../components/icons/Github.svelte';
	import Arrow from '../components/icons/Arrow.svelte';
	import Dribbble from '../components/icons/Dribbble.svelte';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Blitz from '../components/icons/Blitz.svelte';

	onMount(() => {
		try {
			gsap.from('.name', { scrollTrigger: '.name', scale: 0.5, opacity: 0, x: 100, duration: 2 });
			gsap.to('.name', { color: 'white', duration: 5 });

			let tween = gsap.to('.name', {
				x: 300,
				scrollTrigger: '.name'
			});
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
		leading: 'Portfolio & Blog',
		projectName: 'Shoe Show',
		techStack: 'FIGMA | SVELTEKIT | GSAP',
		viewCodeUrl: 'https://github.com/CEODemitri/Shoe-Show-V3',
		liveViewUrl: 'https://shoe-show-v3.vercel.app/',
		images: ['/projects/shoe1.png', '/projects/shoe2.png', '/projects/shoe3.png'],
		descriptionTitle: 'Full Stack Application',
		description:
			'Combination of Appwrite and NextJS to create a powerful App for an Up and Coming Brand Name Shoe Enthusiast.'
	};

	const toCode = {
		leading: 'Author Time',
		projectName: 'To Code',
		viewCodeUrl: 'https://github.com/CEODemitri/To-Code',
		liveViewUrl: 'https://to-code.netlify.app/',
		images: ['/projects/to_code1.png'],
		descriptionTitle: 'New Age Blog',
		description:
			'Learning the Template framework Eleventy on a marvelous ride taught by Kevin Powell.'
	};

	const burgerBrothers = {
		leading: 'E-Commerce',
		projectName: 'Burger Brothers',
		viewCodeUrl: 'https://github.com/CEODemitri/To-Code',
		liveViewUrl: 'https://burger-brothers.vercel.app/',
		images: ['/projects/burger1.png'],
		descriptionTitle: 'Fresh Food and Service',
		description:
			'Eating like we want in this life, why not? Under construction but over excited about completing.'
	};

	const jobs = ['UX/UI Design', 'Full Stack Cloud Development', 'Web Developer', 'Artist'];

	const projectCounts = [
		{ id: 3, name: 'UX Projects' },
		{ id: 4, name: 'Web Projects' }
	];
</script>

<div class="flex flex-col min-h-[100dvh]">
	<main class="font-['Josefin_Sans_Variable'] text-white">
		<!-- hero section -->
		<div class="flex flex-col md:h-[80vh] md:grid grid-cols-12 grid-rows-12 gap-8 p-4 bg-center">
			<!-- <div class="relative bg-[url('./bg/lgCloud.png')] bg-cover"></div> -->
			<p class="absolute text-xs text-slate-400/80">Web Portfolio: Demitri Echols</p>
			<article
				class="hidden md:flex col-start-2 col-span-3 row-start-5 row-span-4 bg-gray-200/5 rounded-lg flex-col justify-center shadow-md shadow-pink-500/20"
			>
				{#each jobs as job}
					<ul>
						<li class="p-2 text-lg text-slate-600 hover:text-white hover:animate-bounce">{job}</li>
					</ul>
				{/each}
			</article>

			<article class="col-start-6 col-span-2 row-start-2 row-span-6 hidden md:flex">
				<img src="/freefloat1.png" alt="" class="md:absolute left-80" />
				<img src="/smBg.png" alt="" class="w-40" />
			</article>

			<article
				class="mt-48 md:mt-0 col-start-8 col-span-5 row-start-4 row-span-6 bg-black/30 p-4 flex flex-col gap-6 md:flex-col-reverse justify-between items-end md:items-center rounded-xl backdrop-blur-sm"
			>
				<div class="flex w-[200px] h-[200px] justify-center items-center relative">
					<div class="w-[110%] h-[110%] bg-transparent rounded-xl absolute"></div>
				</div>

				<h1 class="text-7xl font-extralight text-right tracking-wider">
					Creative Designer & <span class="font-bold">Developer</span>
				</h1>
				<p class="w-4/5 md:place-self-end tracking-widest">
					Ich heiBe Demitri Echols. On a journey of Coding, Learning and Creating Beautiful
					Products.
				</p>
			</article>
			<article class="col-start-2 row-start-9 col-span-3 row-span-3">
				<section class="flex justify-between">
					<h2 class="text-2xl">Meine Work</h2>
					<button class="animate-bounce"><a href="./Projects">All Work <Arrow /></a></button>
				</section>
				<section
					class="bg-gradient-to-br from-slate-700 to-purple-800/50 backdrop-blur-sm py-12 rounded-xl"
				>
					{#each projectCounts as projectCount}
						<ul>
							<li class="flex justify-around mb-4">
								<p>{projectCount.id}</p>
								<p>{projectCount.name}</p>
							</li>
						</ul>
					{/each}
				</section>
			</article>

			<article class="col-start-9 col-span-3 bg-black/30 row-start-11 row-span-1 rounded-md">
				<section class="flex flex-col md:flex-row justify-around items-center text-4xl gap-6">
					<a href="https://github.com/CEODemitri"><Github /></a>
					<Blitz />
					<Dribbble />
				</section>
			</article>
			<p class="absolute top-[1060px] md:top-[90vh] md:left-[90vw] text-slate-200 text-xs">
				updated 24.12.18
			</p>
		</div>

		<section id="projects" class="w-full py-12 md:py-24 lg:py-32 mt-24 bg-muted">
			<div class="gap-6 px-4 md:px-6">
				<section class="flex">
					<p>Featured Projects</p>
					<div class="flex flex-col space-y-4 w-3/5 text-right ml-auto">
						<div class="space-y-2">
							<h2 class="text-3xl font-extralight tracking-tighter sm:text-5xl">
								<span class="font-bold">Crafting</span> Seamless Digital Experiences with Design and
								Development
							</h2>
							<p
								class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
							>
								Check out some of my recent projects.
							</p>
						</div>
					</div>
				</section>
				<section class="flex justify-end my-8">
					<button class=""><a href="#projects">All Work <Arrow /></a></button>
				</section>
				<div class=" flex flex-col gap-24">
					<ProjectBanner {...shoeShow} />
					<ProjectBanner {...toCode} />
					<ProjectBanner {...burgerBrothers} />

					<button class="btn btn-block">More Projects</button>
				</div>
			</div>
		</section>
		<!-- uncomment when complete -->
		<!-- <section id="ux-portfolio" class="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
		</section> -->
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
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Build Together</h2>
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
						class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-600/60 text-primary-foreground hover:bg-gradient-to-tl from-slate-700 to-purple-800/50 transition-colors hover:duration-700 hover:ease-in-out h-10 px-4 py-2 w-full"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		</section>
	</main>
</div>
