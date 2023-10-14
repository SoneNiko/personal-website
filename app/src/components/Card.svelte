<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { Project } from '$lib/utils/sanity';

	export let project: Project;
</script>

<a class="" href={`/projects/${project.slug.current}`}>
<div class="border-2 border-gray-400 text-gray-400 hover:border-white hover:text-white transition-colors rounded-lg p-5 flex gap-8 items-center max-w-[600px] h-[200px]">
	{#if project.mainImage}
		<img
		class="w-fit h-fit max-w-[110px] max-h-[110px] min-w-[110px] min-h-[110px]"
			src={urlFor(project.mainImage).width(200).height(200).url()}
			alt="Cover image for {project.title}"
		/>
	{:else}
		<div class="" />
	{/if}

	<div class="w-full flex flex-col">
		<h3>{project.title}</h3>
		<p class="hidden sm:block">{project.description}</p>
		<div class="flex-1"></div>
		<p class="text-xs text-gray-400 border-t-[1px] border-gray-600 mt-3">
			{formatDate(project._createdAt)}
		</p>
	</div>
</div>
</a>