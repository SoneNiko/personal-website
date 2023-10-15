<script>
	import { page } from '$app/stores';

	export let open = true;

	let routes = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Stuff I can do', path: '/skills' },
		{ name: 'Stuff I did do', path: '/projects' },
		{ name: 'Contact', path: '/contact' }
	];

	// let socials: Social[] = [
	// 	// TODO: Add links
	// 	{ name: 'linkedin', url: '' },
	// 	{ name: 'github', url: '' },
	// 	{ name: 'instagram', url: '' },
	// 	{ name: 'mailto', url: '' },
	// 	{ name: 'twitch', url: '' },
	// 	{ name: 'twitter', url: '' },
	// 	{ name: 'youtube', url: '' }
	// ];
</script>

<aside
	class="fixed min-w-[300px] w-[300px] h-full flex border-r-2 border-gray-400 p-4 flex-col !backdrop-blur-sm"
	class:open
>
	<div class="border-b-2 border-gray-400 h-[130px]">
		<div class="flex justify-center glitched transition-all">
			<div class="text-9xl mr-4">N</div>
			<div class="text-5xl flex flex-col justify-center">
				<div>IKOLAS</div>
				<div class="flex">
					<div>HEISE</div>
					<span>.</span>
				</div>
			</div>
		</div>
	</div>

	<div class="flex-1" />

	<div class="text-center flex flex-col">
		{#each routes as route}
			<a
				class="m-3 text-lg font-bold transition-all flex {route.path === $page.url.pathname
					? 'brightness-100 translate-x-2 underline'
					: 'brightness-50 hover:translate-x-1'}"
				href={route.path}
			>
				<div class="flex-1 text-2xl">{route.name}</div>
				<div>
					{route.path === $page.url.pathname ? '>' : ''}
				</div>
			</a>
		{/each}
	</div>

	<div class="flex-1" />

	<div class=" border-gray-400 h-[130px]" />
</aside>

<div class="min-w-[300px] h-full sidebar-bg hidden lg:block" class:open />

<style>
	aside {
		/* offscreen by default */
		left: -300px;
	}

	.open {
		/* slide on screen */
		left: 0;
	}

	.sidebar-bg:not(.open) {
		display: none;
	}
</style>
