<script>
	export let images = [];

	// Logic for carousel navigation (optional)
	let currentSlide = 0;

	const nextSlide = () => {
		currentSlide = (currentSlide + 1) % images.length;
	};

	const prevSlide = () => {
		currentSlide = (currentSlide - 1 + images.length) % images.length;
	};
</script>

<div class="carousel relative">
	{#if images.length > 0}
		<button
			on:click={prevSlide}
			class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md z-10"
		>
			Previous
		</button>
		<img
			src={images[currentSlide]}
			alt="Slide {currentSlide + 1}"
			class="w-full h-[300px] object-cover object-center"
		/>
		<button
			on:click={nextSlide}
			class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md z-10"
		>
			Next
		</button>
	{:else}
		<p>No images to display.</p>
	{/if}
</div>

<style>
	/* Add your carousel styles here */
	.carousel {
		position: relative;
		overflow: hidden;
	}

	.carousel img {
		transition: transform 0.5s ease;
	}
</style>
