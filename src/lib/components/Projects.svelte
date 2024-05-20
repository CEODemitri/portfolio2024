<script>
	import Card from './Card.svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	// Function to toggle active state
	function toggleActive(tabId) {
		activeTab.set(tabId);
	}

	// Store to manage active tab
	const activeTab = writable('ux-ui');

	let uxUiContentVisible = false;
	let webContentVisible = false;
	let softwareContentVisible = false;

	// Subscribe to activeTab changes
	activeTab.subscribe((value) => {
		uxUiContentVisible = value === 'ux-ui';
		webContentVisible = value === 'web';
		softwareContentVisible = value === 'software';
	});

	// Ensure the first tab is selected when component mounts
	onMount(() => {
		toggleActive('ux-ui');
	});
</script>

<div dir="ltr" data-orientation="horizontal" class="w-full">
	<div
		role="tablist"
		aria-orientation="horizontal"
		class="h-9 items-center justify-center py-8 text-muted-foreground flex border-b border-gray-200 dark:border-gray-700"
		tabindex="-1"
		data-orientation="horizontal"
		style="outline: none;"
	>
		<button
			type="button"
			role="tab"
			aria-selected={activeTab === 'ux-ui'}
			aria-controls="radix-:r1a:-content-ux-ui"
			on:click={() => toggleActive('ux-ui')}
			class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-[0.7rem] sm:text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 {activeTab ===
			'ux-ui'
				? 'bg-eerie-600 text-foreground shadow'
				: ''}"
			tabindex="-1"
			data-orientation="horizontal"
			data-radix-collection-item=""
		>
			UX/UI Design
		</button>
		<button
			type="button"
			role="tab"
			aria-selected={activeTab === 'web'}
			aria-controls="radix-:r1a:-content-web"
			on:click={() => toggleActive('web')}
			class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-[0.7rem] sm:text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 {activeTab ===
			'web'
				? 'bg-eerie-600 text-foreground shadow'
				: ''}"
			tabindex="-1"
			data-orientation="horizontal"
			data-radix-collection-item=""
		>
			Web Development
		</button>
		<button
			type="button"
			role="tab"
			aria-selected={activeTab === 'software'}
			aria-controls="radix-:r1a:-content-software"
			on:click={() => toggleActive('software')}
			class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-[0.7rem] sm:text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 {activeTab ===
			'software'
				? 'bg-eerie-600 text-foreground shadow'
				: ''}"
			tabindex="-1"
			data-orientation="horizontal"
			data-radix-collection-item=""
		>
			Software Development
		</button>
	</div>

	<!-- ux/ui projects -->
	<div
		data-orientation="horizontal"
		role="tabpanel"
		aria-labelledby="radix-:r1a:-trigger-ux-ui"
		id="radix-:r1a:-content-ux-ui"
		class="{uxUiContentVisible
			? ''
			: 'hidden'} mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
	>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<Card />
			<Card />
			<Card />
		</div>
	</div>

	<!-- web development projects -->
	<div
		data-orientation="horizontal"
		role="tabpanel"
		aria-labelledby="radix-:r1a:-trigger-web"
		class="{webContentVisible
			? ''
			: 'hidden'} mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
	></div>

	<!-- software development projects -->
	<div
		data-orientation="horizontal"
		role="tabpanel"
		aria-labelledby="radix-:r1a:-trigger-software"
		class="{softwareContentVisible
			? ''
			: 'hidden'} mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
	></div>
</div>
