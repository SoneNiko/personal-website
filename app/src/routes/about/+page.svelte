<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';
	import { Icon, Star } from 'svelte-hero-icons';

	export let data: PageData;
</script>

<svelte:head>
	<title>About Me</title>
</svelte:head>

<h1>About Me</h1>

<PortableText value={data.about.body} components={{}} />

<div class="flex-1" />

<div class=" flex flex-col sm:!flex-row gap-4 items-center">
	<img
		src="https://github-readme-stats.vercel.app/api/top-langs?username=soneniko&show_icons=true&locale=en&layout=compact&theme=vision-friendly-dark"
		alt="ovi"
		class="h-[160px] w-[288px]"
	/>

	<div
		class=" w-[288px] h-[160px] border-[1px] border-gray-400 py-3 px-5 rounded-md font-sans animate-fade bg-black"
	>
		<p class="font-bold text-yellow-500">Strengths:</p>

			<p class="mb-0">Creativity</p>
			<p class="mb-0">Documentation</p>
			<p class="mb-0">Analytical Thinking</p>
			<p class="mb-0">Abstraction</p>
	</div>
</div>
