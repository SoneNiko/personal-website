<script>
	export let open = true;
</script>

<!-- defines a CSS class `.open` when `open == true` -->
<button class:open class="p-2" on:click={() => (open = !open)}>
	<!-- svg with 3 lines -->
	<svg width="32" height="24">
		<line id="top" x1="0" y1="2" x2="32" y2="2" />
		<line id="middle" x1="0" y1="12" x2="32" y2="12" />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
	</svg>
</button>
