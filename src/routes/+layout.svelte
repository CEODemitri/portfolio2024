<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navigation from '../components/Navigation.svelte';
</script>

<div class="bg-black">
	<Navigation />
	<slot></slot>
</div>

<Footer />
