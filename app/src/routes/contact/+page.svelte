<script lang="ts">
	function discordClick() {
		navigator.clipboard.writeText('keinoptifine');
		let btn = document.getElementById('discord-btn');
		if (btn) {
			btn.innerText = 'Copied!';
			btn.classList.add('bg-green-500');
			btn.classList.add('scale-105');
			btn.classList.remove('glitched');
			setTimeout(() => {
				if (btn) {
					btn.innerText = 'Discord';
					btn?.classList.remove('bg-green-500');
					btn?.classList.remove('scale-105');
					btn?.classList.add('glitched');
				}
			}, 1000);
		}
	}
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<h1>How to contact me?</h1>

<p>
	Hey, do you want to work with me? Or do you have a job offer? Below are all the ways to contact
	me:
</p>

<div class="flex flex-col sm:!flex-row sm:!gap-8 items-center border-b-[1px] pb-4 mb-4">
	<a href="/contact" class="btn lg:glitched w-fit" id="discord-btn" on:click={discordClick}
		>Discord</a
	>
	<a href="mailto:heisenikolas@gmail.com" class="btn lg:glitched w-fit">Email Me</a>
	<a href="https://www.linkedin.com/in/nikolas-heise-4a2a7b221/" class="btn lg:glitched w-fit"
		>LinkedIn</a
	>
</div>

<p>If you are just looking to find me on the internet, here you go:</p>

<div class="flex flex-col sm:!flex-row sm:!gap-8 items-center">
	<a href="https://github.com/soneniko" class="btn lg:glitched">GitHub</a>
	<a href="/cv" class="btn lg:glitched">CV. </a>
	<p class="btn lg:glitched brightness-50 cursor-not-allowed">My instagram is now private</p>
</div>
