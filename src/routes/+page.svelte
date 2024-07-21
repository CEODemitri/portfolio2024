<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Carousel from '../components/Carousel.svelte';

	onMount(() => {
		try {
			gsap.to('.box', { rotation: 27, x: 100, scale: 0.8, duration: 1 });
		} catch (error) {
			console.error('Error in GSAP animation:', error);
		}
	});
</script>

<!-- hero section -->
<div
	class="hero min-h-screen"
	style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);"
>
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-neutral-content text-center">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Hello there</h1>
			<p class="mb-5">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>
<!-- hero section -->

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div class="card w-96 bg-base-100 shadow-xl box">
	<figure>
		<img
			src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
			alt="Shoes"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title">Shoes!</h2>
		<p>If a dog chews shoes whose shoes does he choose?</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Buy Now</button>
		</div>
	</div>
</div>

<!-- projects section -->
<Carousel />
<!-- projects section -->
