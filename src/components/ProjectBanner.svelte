<script>
	import Carousel from './Carousel.svelte'; // Import the Carousel component

	export let leading = 'A brief description of the project.';
	export let projectName = 'Project Name';
	export let viewCodeUrl = '';
	export let liveViewUrl = '';
	export let images = [
		'https://images.unsplash.com/photo-1721297015739-6737bb24089c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1721053039240-10d60807d374?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1721419336937-86dc7d479f2c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OHx8fGVufDB8fHx8fA%3D%3D'
	];
	export let descriptionTitle = 'Powerful Feat';
	export let description =
		'Our platform offers a wide range of powerful features to help you streamline your workflow and boost productivity.';
</script>

<section class="w-full relative overflow-hidden rounded-tl-xl">
	<!-- #282433 -->
	<div
		class="absolute inset-0 bg-gradient-to-tl from-orange-300/55 to-blue-800 rounded-bl-xl"
	></div>
	<Carousel {images} />
	<div class="py-2 md:py-4 relative z-10 text-white/80">
		<div class="text-center space-y-4 flex flex-col md:flex-row justify-between px-8">
			<div>
				<h1 class="text-2xl font-bold sm:text-3xl md:text-4xl">{leading}</h1>
				<p class="text-lg md:text-xl">{projectName}</p>
			</div>
			<div class="flex items-center justify-center gap-4 bg-orange-300/10 p-2 rounded-lg">
				<a
					href={viewCodeUrl}
					class="inline-flex h-9 items-center justify-center px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors rounded-md"
					prefetch={false}
				>
					View Code
				</a>
				<a
					href={liveViewUrl}
					class="inline-flex h-9 items-center justify-center px-4 py-2 text-sm font-medium shadow-sm transition-colors rounded-full"
					prefetch={false}
				>
					Live View
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	/* Add your section styles here */
</style>
