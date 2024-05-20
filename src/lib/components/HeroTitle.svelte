<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let heroText;

	onMount(() => {
		const text = heroText.textContent;
		heroText.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");

		const letters = heroText.querySelectorAll('.letter');

		gsap.from(letters, {
			duration: 2,
			opacity: 0,
			y: 50,
			stagger: 0.05, // Stagger animation for each letter
			ease: 'power4.out',
			onComplete: () => {
				// Animation for .o element after letters animation completes
				gsap.to(heroText.querySelector('.o'), { rotation: 95, x: 5, duration: 1 });
			}
		});
	});
</script>

<h1 bind:this={heroText} class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
	Hall<span class="o">o</span> ich bin Demitri.
</h1>
