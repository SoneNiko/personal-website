<script lang="ts">
	import '../app.css';
	import Hamburger from '../components/Hamburger.svelte';
	import Sidebar from '../components/Sidebar.svelte';

	let sidebarOpen = true;

	const currentDate = new Date();
	const isPrideMonth = currentDate.getMonth() === 5;
</script>

<svelte:head>
	<script src="/canvas.js"></script>
	<script src="/clarity.js"></script>

	{@html `<link rel="icon" href="${
		isPrideMonth ? '/pride-favicon.ico' : '/favicon.ico'
	}">`}
</svelte:head>

<canvas id="backgroundCanvas" class="fixed top-0 left-0 w-full h-full -z-10" />

<div class="flex min-h-screen">
	<Sidebar bind:open={sidebarOpen} />

	<div class="min-h-screen">
		<div class="left-[300px] fixed" class:!left-0={!sidebarOpen}>
			<Hamburger bind:open={sidebarOpen} />
		</div>
		<div class="p-5 sm:p-10 flex flex-col min-h-screen">
			<slot class="z-10" />
		</div>
	</div>
</div>
