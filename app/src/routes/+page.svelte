<script>
	import Typewriter from 'svelte-typewriter';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="flex-1" />

<h1 class="flex">
	<div class="mr-4 h-[2ch]">{'>'}</div>

	<Typewriter keepCursorOnFinish showCursorOnDelay={true} interval={150} delay={800}
		>Hello, World!</Typewriter
	>
	<div class="ml-4 h-[2ch]">;</div>
</h1>

<h1>I'm Nikolas.</h1>
<h2>I build things using code.</h2>

<p class="text-gray-400 text-sm">Hopefully never again for the internet.</p>

<div class="flex-1" />

<div class="w-11/12 2xl:!w-[1060px] border-t-2">
	<div class="lg:w-3/4 2xl:!w-[800px]">
		<p class="mb-3">
			I am a German CompSci student at the University of Constance with an interest in
			Cyber-security, Back-end Development and Software Engineering
		</p>

		<p>
			BTW: The background on this page is automatically generated. It is using the diamond-square
			algorithm to generate a heightmap from which one line is used while the others are blacked
			out. The middle of the line is animated in a sin wave. you might see some glitching, cus i
			turn down the margin whenever there is too many pixels to draw. Otherwise it starts lagging.
		</p>
	</div>
</div>

<div class="flex items-center">
	<a class="btn lg:glitched" href="https://google.com">Check out my CV</a>

	<div>or</div>

	<a class="btn lg:glitched" href="https://google.com">My GitHub</a>
</div>

<div class="flex-1" />
<div class="flex-1" />
