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
			// why not working?
			onComplete: () => {
				// Animation for .o element after letters animation completes
				// Re-query for elements with class "o" and animate them
				const toRotate = heroText.querySelector('.rotate');
            	gsap.to(toRotate, { rotation: 95, duration: 2 });
			}
		});
	});
</script>

<h1 bind:this={heroText} class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
	Hallo ich bin <span class="rotate">D</span>emitri.
</h1>
