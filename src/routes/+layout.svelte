<script>
	import '../app.css';
	import ExLogo from '../lib/components/SVG/ExLogo.svelte';
</script>

<header class="bg-eerie-900 text-gray-50 px-4 lg:px-6 h-14 flex items-center">
	<a class="flex items-center justify-center" href="/">
		<ExLogo />
		<span class="sr-only">Demitri Echols' Portfolio</span>
	</a>
	<nav class="ml-auto flex gap-4 sm:gap-6">
		<a class="text-sm font-medium hover:underline underline-offset-4" href="/Design"> UX/UI </a>
		<a class="text-sm font-medium hover:underline underline-offset-4" href="/Web"> Web </a>
		<a class="text-sm font-medium hover:underline underline-offset-4" href="/Software">
			Software
		</a>
		<a class="text-sm font-medium hover:underline underline-offset-4" href="/About"> About </a>
	</nav>
</header>
<slot />
