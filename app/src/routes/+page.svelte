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

<div class="w-11/12 2xl:!w-[1060px] border-t-[1px] border-gray-400">
	<div class="xl:w-3/4 2xl:!w-[800px]">
		<p class="mb-3">
			I am a German CompSci student at the University of Constance with an interest in
			Cyber-security, Back-end Development and Software Engineering
		</p>

		<p class="group transition-all">
			<span class="pr-4 transition-all">BTW: </span>

			<span><span>Th</span>e</span> <span><span>backg</span>round</span>
			<span><span>o</span>n</span>
			<span><span>th</span>is</span> <span><span>pa</span>ge</span> <span><span>i</span>s</span>
			<span><span>automat</span>ically</span> <span><span>gener</span>ated.</span>
			<span><span>I</span>t</span>
			<span><span>i</span>s</span> <span><span>usi</span>ng</span> <span><span>th</span>e</span>
			<span><span>diamond</span>-square</span><span><span> alg</span>orithm</span>
			<span><span>t</span>o</span>
			<span><span>gene</span>rate</span> <span><span>a</span></span>
			<span><span>heigh</span>tmap</span>
			<span><span>fr</span>om</span> <span><span>whi</span>ch</span> <span><span>on</span>e</span>
			<span><span>li</span>ne</span> <span><span>i</span>s</span> <span><span>us</span>ed</span>
			<span><span>whi</span>le</span> <span><span>th</span>e</span> <span><span>oth</span>ers</span>
			<span><span>ar</span>e</span> <span><span>blac</span>ked</span>
			<span><span>ou</span>t.</span><span><b /> The</span> <span><span>mid</span>dle</span>
			<span><span>o</span>f</span> <span><span>th</span>e</span>
			<span><span>li</span>ne</span> <span><span>i</span>s</span> <span><span>anim</span>ated</span>
			<span><span>i</span>n</span> <span><span>a</span></span> <span><span>si</span>n</span>
			<span><span>wav</span>e.</span>
			<span><span>yo</span>u</span> <span><span>mig</span>ht</span> <span><span>se</span>e</span>
			<span><span>so</span>me</span> <span><span>glitc</span>hing,</span>
			<span><span>cu</span>s</span>
			<span><span>i</span></span> <span><span>tu</span>rn</span> <span><span>do</span>wn</span><span
				><b />the</span
			>
			<span><span>mar</span>gin</span> <span><span>when</span>ever</span>
			<span><span>the</span>re</span>
			<span><span>i</span>s</span> <span><span>to</span>o</span> <span><span>ma</span>ny</span>
			<span><span>pix</span>els</span> <span><span>t</span>o</span> <span><span>dra</span>w.</span>
			<span><span>Other</span>wise</span> <span><span>i</span>t</span>
			<span><span>sta</span>rts</span>
			<span><span>lagg</span>ing.</span> <span><span>Als</span>o,</span>
			<span><span>optim</span>izing</span><span><span> t</span>his</span>
			<span><span>s</span>o</span> <span><span>i</span>t</span>
			<span><span>doe</span>snt</span> <span><span>tu</span>rn</span> <span><span>yo</span>ur</span>
			<span><span>ro</span>om</span> <span><span>in</span>to</span> <span><span>a</span></span>
			<span><span>wi</span>nd</span> <span><span>tun</span>nel</span> <span><span>wa</span>s</span>
			<span><span>a</span></span> <span><span>maj</span>or</span> <span><span>pa</span>in</span>
			<span><span>i</span>n</span> <span><span>th</span>e</span> <span><span>##</span>#.</span>
		</p>
	</div>
</div>

<div class="flex items-center">
	<a class="btn lg:glitched" href="/cv">Check out my CV</a>

	<div>or</div>

	<a class="btn lg:glitched" href="https://github.com/SoneNiko/personal-website">My GitHub</a>
</div>

<div class="flex-1" />
<div class="flex-1" />

<style>
	p span {
		@apply transition-all;
	}

	p span span {
		@apply transition-all;
	}

	p:hover span span {
		@apply font-extrabold text-white;
	}

	p:hover span {
		@apply text-gray-200;
	}
</style>
