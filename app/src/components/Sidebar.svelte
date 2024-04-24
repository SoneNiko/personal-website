<script>
	import { page } from '$app/stores';

	export let open = true;

	let routes = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Stuff I did', path: '/projects' },
		{ name: 'Contact', path: '/contact' },
		{ name: 'CV', path: '/cv' }
	];

	const isPrideMonth = new Date().getMonth() === 5;
</script>

<aside
	class="fixed min-w-[300px] w-[300px] h-full flex border-r-2 border-gray-400 p-4 flex-col !backdrop-blur-sm"
	class:open
>
	<div class="border-b-2 border-gray-400 p-8 flex justify-center items-center">
		<img src={isPrideMonth ? '/logo-pride.png' : '/logo-white.png'} alt="Logo" class="h-[80px]" />
	</div>

	<div class="flex-1" />

	<div class="text-center flex flex-col">
		{#each routes as route}
			<a
				class="m-3 text-lg font-bold transition-all flex {route.path === $page.url.pathname
					? 'text-white translate-x-2 underline'
					: 'hover:translate-x-1'}"
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
