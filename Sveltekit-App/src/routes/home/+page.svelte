<script lang="ts">
	import { reports } from '$lib/sidebar/reports';
</script>

<div class="flex flex-row flex-wrap gap-4 p-4 justify-center">
	{#each reports as report (report.url)}
		<a
			class="card card-hover overflow-hidden w-modal-slim"
			data-sveltekit-preload-data="hover"
			href={report.url}
		>
			<header>
				<div class="w-full aspect-[21/9] relative bg-[#526bf8] overflow-hidden">
					<div
						class="text font-bold text-white uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[24px]"
					>
						{report.name}
					</div>
				</div>
			</header>
			<div class="p-4 space-y-4">
				<h3 class="h3" data-toc-ignore>Summary</h3>
				<article>
					<p>
						{report.description}
					</p>
				</article>
			</div>
			<hr class="opacity-50" />
		</a>
	{/each}
</div>
