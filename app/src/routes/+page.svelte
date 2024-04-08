<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import type { PageData } from './$types';
	import { PortableText } from '@portabletext/svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="flex-1" />

<h1 class="flex font-normal">
	<div class="mr-4 h-[2ch]">{'>'}</div>

	<Typewriter keepCursorOnFinish showCursorOnDelay={true} interval={150} delay={800}
		>Hello, World!</Typewriter
	>
	<div class="ml-4 h-[2ch]">;</div>
</h1>

<h1 class="font-normal">I'm Nikolas.</h1>
<h2 class="font-normal">I build things using code.</h2>

<p class="text-gray-400 text-sm">Hopefully never again for the internet.</p>

<div class="flex-1" />

<div class="w-11/12 2xl:!w-[1060px] border-t-[1px] border-gray-400">
	<div class="xl:w-3/4 2xl:!w-[800px]">
		<PortableText value={data.home.body} components={{}} />
	</div>
</div>

<div class="flex items-center">
	<a class="btn lg:glitched" href="/cv">Check out my CV</a>

	<div>or</div>

	<a class="btn lg:glitched" href="https://github.com/SoneNiko/">My GitHub</a>
</div>

<div class="flex-1" />
<div class="flex-1" />
