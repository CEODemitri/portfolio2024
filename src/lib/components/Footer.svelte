<script>
	import Twitter from './SVG/Twitter.svelte';
	import Github from './SVG/Github.svelte';
	import Linkedin from './SVG/Linkedin.svelte';

	let year = new Date();
	year = year.getFullYear();
</script>

<footer class="text-gray-100 p-6 md:py-12 w-full">
	<div class="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
		<div class="grid gap-4">
			<h3 class="font-semibold">Social</h3>
			<div class="flex gap-4">
				<a
					class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
					href="#"
				>
					<Twitter />
					<span class="sr-only">Twitter</span>
				</a>
				<a
					class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
					href="#"
				>
					<Github />
					<span class="sr-only">GitHub</span>
				</a>
				<a
					class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
					href="#"
				>
					<Linkedin />
					<span class="sr-only">LinkedIn</span>
				</a>
				<!-- may use, may not or may replace -->
				<!-- <a class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
            
            <span class="sr-only">Instagram</span>
          </a> -->
			</div>
		</div>
		<div class="grid gap-1">
			<h3 class="font-semibold">Site</h3>
			<a class="hover:underline" href="#"> Home </a>
			<a class="hover:underline" href="#"> About </a>
			<a class="hover:underline" href="#"> Services </a>
			<a class="hover:underline" href="#"> Contact </a>
		</div>
		<div class="grid gap-1">
			<h3 class="font-semibold">Legal</h3>
			<a class="hover:underline" href="#"> Privacy Policy </a>
			<a class="hover:underline" href="#"> Terms of Service </a>
			<a class="hover:underline" href="#"> Cookie Policy </a>
		</div>
	</div>
	<div class="container max-w-7xl mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
		© {year} ceoDemitri. All rights reserved.
	</div>
</footer>
