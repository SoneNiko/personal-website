<script lang="ts">
  import {PortableText} from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	<div class="flex gap-4 mb-8">
		{#if data.mainImage}
			<img class="max-h-[200px] max-w-[200px]" src={urlFor(data.mainImage).height(200).width(200).url()} alt="Cover image for {data.title}" />
		
		{/if}

		<div class="w-full border-b-2 flex flex-col">
			<div class="flex gap-8 ">
				<h1>{data.title}</h1>
				{#if data.link}
				<a href={data.link} class="btn glitched w-fit h-fit">Visit{'>'}</a>
				{/if}
			</div>
			
			<p>{data.description}</p>
			
			<div class="flex-1"></div>
			<p class="mb-0 text-gray-400">
				{formatDate(data._createdAt)}
			</p>
		</div>
	</div>
	
	<div>
		
		<div>
			<PortableText value={data.body} components={{}}/>
		</div>
	</div>
</section>
