<script>
	import '../app.css';
	import ExLogo from '../lib/components/SVG/ExLogo.svelte';
</script>

<header class="bg-eerie-900 text-gray-50 px-4 lg:px-6 h-14 flex justify-center items-center">
	<a class="flex items-center justify-center" href="/">
		<ExLogo />
		<span class="sr-only">Demitri Echols' Portfolio</span>
	</a>
	<nav class="ml-auto md:flex gap-4 sm:gap-6 justify-center items-center hidden">
		<a class="text-sm font-light hover:underline underline-offset-4" href="/Design"> UX/UI </a>
		<a class="text-sm font-light hover:underline underline-offset-4" href="/Web"> Web </a>
		<a class="text-sm font-light hover:underline underline-offset-4" href="/Software"> Software </a>
		<a class="text-sm font-light hover:underline underline-offset-4" href="/About"> About </a>

		<a href="#" class="bg-sapphire-700 px-7 py-1 rounded-sm ml-20">Resume</a>
	</nav>
</header>
<slot />
