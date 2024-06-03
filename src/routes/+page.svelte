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

	const skills = {
		sectionTitle: 'Skills',
		subheading:
			'Full Stack Developer with a wide range of skills. I Specialize in designing and coding Web Applications.'
	};

	const contact = {
		sectionTitle: 'Contact Me',
		subheading: "Let's get in touch!"
	};

	const fakeJob = {
		title: 'Hero',
		descrip: 'Oh yeah'
	};

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

<div class="flex flex-col text-eerie-100">
	<!-- body -->
	<main>
		<!-- hero section -->
		<section class="w-full py-2 md:py-4 lg:py-8 bg-eerie-900 shadow-lg h-[65vh] md:h-[40vh]">
			<div class="container px-4 md:px-6">
				<div class="space-y-4 md:pl-5">
					<HeroTitle />
					<p class="text-sm h-lg leading-6 h-md w-full">
						<span
							bind:this={jobSpace}
							id="job"
							class="text-xl bg-grape-500 px-3 py-1 rounded-md underline inline-block -skew-y-3"
							>Creative Developer</span
						> on a journey exploring the amazing realm of technology. On the learning path for two years
						in November, I have decided to specialize in Full Stack Web Dev and UI/UX Design. Also skilled
						with Ruby, Python and NodeJs: I can be impactful for any team.
					</p>
				</div>

				<div
					class="h-80 mt-6 bg-white bg-[url('src/lib/assets/codeface.png')] bg-no-repeat bg-center bg-cover rounded-lg"
				></div>
			</div>
		</section>

		<!-- projects section -->
		<div class="container py-7 mt-20" id="projects">
			<div class="grid gap-4 md:gap-8 lg:grid-cols-3 md:px-6">
				<Section>
					<div class="px-4">
						<SectionHeader {...featured}></SectionHeader>
					</div>
					<Projects />
				</Section>
			</div>
		</div>

		<!-- about section -->
		<div class="px-6 py-2 rounded-lg m-auto">
			<Section>
				<div class="w-full flex justify-center items-center">
					<div class="h-96 w-48 bg-eerie-900 shadow"></div>
					<div class="h-[700px] w-96 bg-eerie-500 shadow-lg rounded-t-xl">
						<h2>ABOUT ME</h2>
					</div>
					<div class="h-[425px] w-96 bg-sapphire-700/30 shadow-2xl">
						<SectionHeader {...skills} />
					</div>
				</div>
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
