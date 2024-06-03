<script>
	export let sectionTitle = 'Section Title';
	export let subheading = 'Showcasing my expertise in user experience and interface design.';
</script>

<div class="space-y-4">
	<div class="space-y-2 flex flex-col">
		<h2
			class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-eerie-900 w-fit px-3 skew-y-1 rounded-sm self-end"
		>
			{sectionTitle}
		</h2>

		<!-- change to an icon. reading from right to left may be annoying -->
		<p class="md:text-xl self-end">
			{subheading}
		</p>
	</div>
</div>
