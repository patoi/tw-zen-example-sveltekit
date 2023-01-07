<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { onMount } from 'svelte';
	import twZenInit from '@patoi/tw-zen-plugin/init.js';

	onMount(() => {
		twZenInit();
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col">
	<h1>
		<div id="example-zen-fade" class="zen-fade text-6xl font-bold">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</div>

		<div id="example-zen-pop-up-always" class="zen-pop-up">
			to your new<br />SvelteKit app
		</div>
	</h1>

	<h2 class="text-center mt-12">
		<div id="example-zen-pop-up-only-once" class="zen-once zen-pop-up">
			try editing <strong>src/routes/+page.svelte</strong>
		</div>
	</h2>

	<div class="mt-12 h-96">
		<p id="example-zen-from-left" class="zen-from-left w-1/3 text-center m-auto">
			Vivamus pharetra sed erat dignissim scelerisque. Fusce dapibus libero feugiat, porta quam ut,
			aliquet turpis. Nunc faucibus arcu ac viverra suscipit.
		</p>
		<p id="example-zen-from-left" class="zen-from-right w-1/3 text-center m-auto mt-8">
			Aenean euismod vel diam quis tristique. Praesent et pulvinar nisi. Aliquam erat volutpat. Nunc
			felis purus, lacinia in finibus eget, consectetur eu augue.
		</p>
	</div>
</section>
