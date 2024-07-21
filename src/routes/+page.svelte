<script>
	import { gsap } from 'gsap';

	gsap.to('#box', { rotation: 27, x: 100, duration: 1 });
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div class="card w-96 bg-base-100 shadow-xl">
	<figure>
		<img
			src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
			alt="Shoes"
		/>
	</figure>
	<div class="card-body" id="box">
		<h2 class="card-title">Shoes!</h2>
		<p>If a dog chews shoes whose shoes does he choose?</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Buy Now</button>
		</div>
	</div>
</div>
