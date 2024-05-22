<script>
	import Card from '../lib/components/Card.svelte';
import Footer from '../lib/components/Footer.svelte';
	import Form from '../lib/components/Form.svelte';
	import HeroTitle from '../lib/components/HeroTitle.svelte';
	import Projects from '../lib/components/Projects.svelte';
	import IWeb from '../lib/components/SVG/IWeb.svelte';
	import Software from '../lib/components/SVG/Software.svelte';
	import Ui from '../lib/components/SVG/Ui.svelte';
	import Section from '../lib/components/Section.svelte';
	import SectionHeader from '../lib/components/SectionHeader.svelte';
	import { onMount } from 'svelte';
	import {
		CloudMoon,
		Mortarboard,
		ClockHistory,
		Airplane,
		Speedometer2,
		Binoculars
	} from 'svelte-bootstrap-icons';

	// section headers
	const about = {
		sectionTitle: 'About Me',
		subheading:
			'I design creative solutions with the ability to bring to life with Full Stack Development.'
	};

	const featured = {
		sectionTitle: 'Featured Projects',
		subheading: 'A selection of my most recent projects.'
	};

	const services = {
		sectionTitle: 'Services',
		subheading:
			'Full Stack Developer with a wide range of skills. I Specialize in designing and coding Web Applications.'
	};

	const contact = {
		sectionTitle: 'Contact Me',
		subheading: "Let's get in touch!"
	};

	const fakeJob =  {
		title: "Hero",
		descrip: "Oh yeah"
	}

	let jobSpace;
	const jobs = ['Creative Developer', 'Software Developer', 'Father', 'UX/UI Designer', 'Artist'];

	onMount(() => {
		setInterval(() => {
			switchJob();
		}, 3000);
	});

	function switchJob() {
		jobSpace.innerHTML = jobs[Math.floor(Math.random() * jobs.length)];
	}
</script>

<div class="flex flex-col min-h-[100dvh] text-eerie-100">
	<!-- body -->
	<main>
		<!-- hero section -->
		<section class="w-full py-12 md:py-24 lg:py-32 bg-[#1A2223] shadow-lg">
			<div class="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div class="space-y-4 md:pl-5">
					<HeroTitle />
					<p class="text-sm md:text-lg h-lg leading-6 h-md">
						<span
							bind:this={jobSpace}
							id="job"
							class="text-xl bg-grape-500 px-3 py-1 rounded-md underline inline-block -skew-y-3"
							>Creative Developer</span
						> on a journey exploring the amazing realm of technology. On the learning path for two years
						in November, I have decided to specialize in Full Stack Web Dev and UI/UX Design. Also skilled
						with Ruby, Python and NodeJs: I can be impactful for any team.
					</p>
					<div class="flex flex-col sm:flex-row gap-2">
						<a
							class="inline-flex h-10 items-center justify-center rounded-md bg-sapphire-400/70 text-gray-950 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
							href="#projects"
						>
							View Work
						</a>
						<a
							class="inline-flex h-10 items-center justify-center rounded-md border border-red-400 bg-transparent px-8 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-50/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
							href="#contact"
						>
							Contact Me
						</a>
					</div>
				</div>
				<div class="grid grid-cols-3 gap-4">
					<div class="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
						<Ui />
						<span class="text-sm font-medium text-gray-50">UI/UX</span>
					</div>

					<div class="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
						<IWeb />
						<span class="text-sm font-medium text-gray-50">Web</span>
					</div>

					<div class="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
						<Software />
						<span class="text-sm font-medium text-gray-50">Software</span>
					</div>
				</div>
			</div>
			<img
				src="src/lib/assets/tiger.png"
				alt="tiger"
				height="250"
				class="hidden w-[525px] h-[300px] md:block absolute right-4 top-96 lg:top-80"
			/>
		</section>

		<!-- projects section -->
		<section class="container py-7" id="projects">
			<div class="grid gap-4 md:gap-8 lg:grid-cols-3 md:px-6">
				<Section>
					<div class="px-4">
						<SectionHeader {...featured} />
					</div>
					<Projects />
				</Section>
			</div>
		</section>

		<!-- about section -->
		<div class="bg-sapphire-900/40 px-6 py-2 rounded-lg">
			<Section>
				<SectionHeader {...about} />

				<div class="w-[80%] h-[70%] grid grid-rows-4 grid-cols-2 my-5 font-bold shadow-lg">
					<!-- education -->
					<section class="row-span-4 col-span-1 bg-moonstone-800 rounded-tl-lg">
						<section class="flex items-center">
							<h3 class="p-1">Education</h3>
							<span class="bg-white p-1 block rounded-full"><Mortarboard /></span>
						</section>
						<ul class="flex flex-col gap-4 mx-2 my-1">
							<li>
								<h4 class="text-xs">Dec 2023 - Current</h4>
								<p class="text-sm">Full Stack Cloud Development</p>
								<p class="text-[0.6rem]">IBM/edX MicroBachelor Degree</p>
							</li>
							<li>
								<h4 class="text-xs">Oct 2023 - Current</h4>
								<p class="text-sm">UX Design</p>
								<p class="text-[0.6rem]">Google Certificate</p>
							</li>
							<li>
								<h4 class="text-xs">July 2023 - Dec 2023</h4>
								<p class="text-sm">Full Stack Development</p>
								<p class="text-[0.6rem]">+220 LinkedIn Certificates</p>
							</li>
							<li>
								<h4 class="text-xs">Nov 2022 - Feb 2023</h4>
								<p class="text-sm">Full Stack Development</p>
								<p class="text-[0.6rem]">62hr Udemy Course</p>
							</li>
						</ul>
					</section>

					<!-- experience -->
					<section class="row-span-2 bg-eerie-600">
						<section class="flex items-center">
							<h3 class="p-1">Experience</h3>
							<span class="bg-white p-1 rounded-full"><ClockHistory /></span>
						</section>

						<ul class="flex flex-col gap-4 mx-2 my-1">
							<li>
								<h4 class="text-xs">Feb 2024 - Current</h4>
								<p class="text-sm">Full Stack Development</p>
								<p class="text-[0.6rem]">62hr Udemy Course</p>
							</li>
							<li>
								<h4 class="text-xs">July 2023 - Dec 2023</h4>
								<p class="text-sm">Full Stack Development</p>
								<p class="text-[0.6rem]">+220 LinkedIn Certificates</p>
							</li>
						</ul>
					</section>
					<section class="row-span-2 bg-sapphire-900 text-sm">
						<section class="flex items-center">
							<h3 class="p-1">Goals</h3>
							<span class="inline-block bg-white p-1 rounded-full"><CloudMoon /></span>
						</section>

						<p class="mx-2">
							Become a Professional Software Developer, assisting launching society into the future.
						</p>
					</section>
				</div>
			</Section>
		</div>

		<!-- service section -->
		<div class="section p-2 m-5 bg-[#1A2223] rounded-lg">
			<Section>
				<SectionHeader {...services} />

				<section class="mt-5 p-1 flex flex-wrap gap-5">
					<article>
						<div class="icon">
							<Airplane width={40} height={40} />
						</div>
						<h3>Creative Web Design</h3>
						<p class="text-sm w-[40ch]">
							Lorem ipsum suscipit tenetur magnam ullam veniam velit unde fugit totam, voluptas fuga
							itaque similique sapiente error non at! Quidem.
						</p>
					</article>
					<article>
						<Speedometer2 width={40} height={40} />
						<h3>Speedy Development</h3>
						<p class="text-sm w-[40ch]">
							Quo laborum suscipit tenetur magnam ullam veniam velit unde fugit totam, voluptas fuga
							itaque similique sapiente error non at! Quidem.
						</p>
					</article>
					<article>
						<Binoculars width={40} height={40} />
						<h3>Special Perspective</h3>
						<p class="text-sm w-[40ch]">
							Voluptatum, porro quo laborum suscipit tenetur magnam ullam veniam velit unde fugit
							totam, voluptas fuga itaque similique sapiente error non at! Quidem.
						</p>
					</article>
				</section>
			</Section>
		</div>

		<!-- contact section -->
		<div class="section p-2 m-5 bg-moonstone-900/80 rounded-lg" id="contact">
			<Section>
				<SectionHeader {...contact} />

				<div class="p-2 md:flex md:m-5 bg-eerie-900 w-fit rounded-md">
					<img
						src="https://images.unsplash.com/photo-1716040313180-aa8df510ccfb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						class="col-span-2"
						width="175"
						height="50"
					/>
					<section class="p-1">
						<Form />
					</section>
				</div>
			</Section>
		</div>

		<!-- footer -->
		<footer class="bg-eerie-900 dark:bg-eerie-100">
			<Footer />
		</footer>
	</main>
</div>
