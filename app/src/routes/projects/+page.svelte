<script lang="ts">
	import Card from '../../components/Card.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<h1>Projects</h1>


<div class="grid xl:grid-cols-2 xl:w-full gap-10">
	{#each data.projects as project}
	<Card project={project}></Card>
{/each}
</div>


