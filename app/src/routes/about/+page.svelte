<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>About Me</title>
</svelte:head>

<h1>About Me</h1>

<PortableText value={data.about.body} components={{}} />
