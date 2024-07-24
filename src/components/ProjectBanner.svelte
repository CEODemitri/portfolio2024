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

<section class="w-full relative overflow-hidden rounded-t-lg">
	<div class="absolute inset-0 bg-gradient-to-r from-[#5f6caf] to-[#49a09d] opacity-80"></div>
	<Carousel {images} />
	<div class="py-4 md:py-8 relative z-10 text-white/80">
		<div class="max-w-2xl mx-auto text-center space-y-4">
			<h1 class="text-2xl font-bold sm:text-3xl md:text-4xl">{leading}</h1>
			<p class="text-lg md:text-xl bg-slate-700/20">{projectName}</p>
			<div class="flex items-center justify-center gap-4">
				<a
					href={viewCodeUrl}
					class="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
					prefetch={false}
				>
					View Code
				</a>
				<a
					href={liveViewUrl}
					class="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
					prefetch={false}
				>
					Live View
				</a>
			</div>
		</div>

		<div class="flex items-start justify-between gap-8 p-6 bg-background rounded-lg shadow-sm">
			<div class="space-y-2 max-w-[60%]">
				<h3 class="text-lg font-semibold">{descriptionTitle}</h3>
				<p class="text-muted-foreground">{description}</p>
			</div>
			<div class="flex flex-col items-end gap-4">
				<div class="bg-muted rounded-md p-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-4 h-4 text-muted-foreground"
					>
						<path d="m12 14 4-4"></path>
						<path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
					</svg>
				</div>
				<div class="bg-muted rounded-md p-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-4 h-4 text-muted-foreground"
					>
						<path
							d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
						></path>
						<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
						<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
					</svg>
				</div>
				<div class="bg-muted rounded-md p-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-4 h-4 text-muted-foreground"
					>
						<path
							d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
						></path>
						<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
						<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
					</svg>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Add your section styles here */
</style>
