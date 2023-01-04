# SvelteKit + TailwindCSS + TW Zen Example

This example shows how to use [TailwindCSS](https://tailwindcss.com/) and [TW Zen](https://github.com/patoi/tw-zen) animation plugin with SvelteKit.

Try it: `pnpm install && pnpm dev`, open: http://localhost:5173 and shrink the page to scrolling.

## Create animation

1. Add `plugin` and `safelist` in TailwindCSS configuration [TailwindCSS Config](https://github.com/patoi/tw-zen-example-nextjs/blob/main/tailwind.config.js) :

```text
  plugins: [require('tw-zen')],
  safelist: ['zen--suspend', 'zen--animate', 'zen--reduced']
```

2. Initialize TW Zen zero-dependency intersection handler with `onMount` on the page:

```typescript
<script>
	...
	import { onMount } from 'svelte';
	import twZenInit from 'tw-zen/init.js';

	onMount(() => {
		twZenInit();
	});
</script>
```

3. Add TW classes, for example:

https://github.com/patoi/tw-zen-example-sveltekit/blob/main/src/routes/Header.svelte

https://github.com/patoi/tw-zen-example-sveltekit/blob/main/src/routes/%2Bpage.svelte

```html

<!-- page.svelte -->
<div id="example-zen-fade" class="zen-fade ...">
<div id="example-zen-pop-up-always" class="zen-pop-up">
<div id="example-zen-pop-up-only-once" class="zen-once zen-pop-up">
<p id="example-zen-from-left" class="zen-from-left ...">
<p id="example-zen-from-left" class="zen-from-right ...">
<!-- Header.svelte -->
<div id="example-zen-spin-forever" class="... zen-spin-forever">
<div id="example-zen-spin-with-pause" class="... zen-pause zen-spin-forever">
```

Read more about classes: https://github.com/patoi/tw-zen/blob/master/README.md
