<script>
	export let title = 'Default Title';
	export let descrip =
		'Redesigning the user experience and interface for a leading enterprise software company.';
	export let source = './project_test.jpeg';
	export let href  = '/';
</script>

<div class="dad rounded-lg border shadow-sm">
	<div>
		<img
			src = {source}
			width="400"
			height="300"
			alt="E-commerce Website"
			class="rounded-md object-cover w-full projects"
			style="aspect-ratio: 400 / 300; object-fit: cover;"
		/>
	</div>
	<div class="flex flex-col space-y-1.5 p-4 backdrop-brightness-50">
		<h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
			{title}
		</h3>
		<p class="text-sm text-muted-foreground">
			{descrip}
		</p>
	</div>
	<div class="p-6">
		<div class="flex gap-5 items-center justify-center h-full">
			<!-- for ux, find a way to omit one of these buttons.  -->
			<button
				class="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 bg-black rounded-full px-2 flex items-center gap-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-5 w-5"
				>
					<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
					<circle cx="12" cy="12" r="3"></circle>
				</svg>
				View Live
			</button>
			<button
				class="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-black underline-offset-4 hover:underline h-10 outline rounded-full px-2 bg-teal-500/70 flex items-center gap-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-5 w-5"
				>
					<polyline points="16 18 22 12 16 6"></polyline>
					<polyline points="8 6 2 12 8 18"></polyline>
				</svg>
				<a href="{href}">View Live</a>
			</button>
		</div>
	</div>
</div>

<style>
	@media (max-width: 525px) {
		.dad {
			width: 80%;
			margin: auto;
		}

		img {
			width: 325px;
			height: 200px;
		}
	}
</style>
