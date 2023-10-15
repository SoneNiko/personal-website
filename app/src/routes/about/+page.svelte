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

<div class="sm:!flex gap-4">
	<img
		src="https://github-readme-stats.vercel.app/api/top-langs?username=soneniko&show_icons=true&locale=en&layout=compact&theme=vision-friendly-dark"
		alt="ovi"
		class="min-h-[160px] min-w-[288px] max-h-[160px] max-w-[288px]"
	/>

	<div
		class=" w-[288px] h-[160px] border-[1px] border-gray-400 py-3 px-5 rounded-md font-sans animate-fade"
	>
		<p class="font-bold text-yellow-500">Skills:</p>

		<div class="flex justify-between">
			<p class="mb-0">Creativity</p>
			<div class="flex gap-0">
				<span class="flex gap-0 text-yellow-500">
					<Icon src={Star} size="20" solid mini />
					<Icon src={Star} size="20" solid mini />
					<Icon src={Star} size="20" solid mini />
					<Icon src={Star} size="20" solid mini />
				</span>
				<Icon src={Star} size="20" solid mini />
			</div>
		</div>

		<div class="flex justify-between">
			<p class="mb-0">Teamwork</p>
			<div class="flex gap-0">
				<span class="flex gap-0 text-yellow-500">
					<Icon src={Star} size="20" solid mini />
					<Icon src={Star} size="20" solid mini />
					<Icon src={Star} size="20" solid mini />
					<Icon src={Star} size="20" solid mini />
				</span>
				<Icon src={Star} size="20" solid mini />
			</div>
		</div>

		<div class="flex justify-between">
			<p class="mb-0">Analytical Thinking</p>
			<div class="flex gap-0">
				<span class="flex gap-0 text-yellow-500">
					<Icon src={Star} size="20" solid mini />
					<Icon src={Star} size="20" solid mini />
					<Icon src={Star} size="20" solid mini />
				</span>
				<Icon src={Star} size="20" solid mini />

				<Icon src={Star} size="20" solid mini />
			</div>
		</div>

		<div class="flex justify-between">
			<p class="mb-0">Self assessment</p>
			<div class="flex gap-0">
				<span class="flex gap-0 text-yellow-500">
					<Icon src={Star} size="20" solid mini />
					<Icon src={Star} size="20" solid mini />
					<Icon src={Star} size="20" solid mini />
					<Icon src={Star} size="20" solid mini />
					<Icon src={Star} size="20" solid mini />
				</span>
			</div>
		</div>
	</div>
</div>
