<script>
	let group1 = ['Josef Bausch', 'Alex Cassady', 'Landon Riddick'];
	let group2 = ['Lucas Borton', 'Ashley Abongwa', 'Caden Epp'];
	let leaderShip = ['President', 'Vice-President', 'Secretary'];
</script>

<!-- TODO convert this to load from JSON -->
<!-- TODO update with 2026-2027 -->
<!-- TODO reverse the order -->

<div class="flex flex-col justify-center text-center">
	<div class="mt-42">
		<h1 class="font-matrixtype mb-[55px] text-[#701730] !text-4xl md:!text-6xl">LEADERSHIP</h1>
		<h2 class="font-matrixtype text-3xl md:text-5xl mb-[15px]">2024 - 2025</h2>
	</div>

	{#each group1 as name, index}
		<div id="24-25" class="flex flex-col items-center">
			<h1 class="font-matrixtype text-[#701730] !mt-[35px] mb-[30px] !text-3xl md:!text-6xl">
				{leaderShip[index]}
			</h1>
			<img
				src={'/alumni/' + name.replace(/\s+/g, '') + '.webp'}
				alt="Leadership"
				class="w-[350px] h-[350px] rounded-full border-4"
				width={100}
				height={100}
			/>
			<h2 class="font-matrixtype text-black font-matrix text-4xl !mt-[30px] mb-[65px]">
				{name}
			</h2>
			<hr class="w-[325px] md:w-[450px] mb-[55px] border-2 rounded-full border-yellow-500" />
		</div>
	{/each}

	<h2 class="font-matrix text-3xl md:text-5xl mb-[15px]">2025 - 2026</h2>

	{#each group2 as name, index}
		<div id="25-26" class="flex flex-col items-center">
			<h1 class="font-matrixtype text-[#701730] font-matrix !mt-[25px] mb-[30px] !text-3xl md:!text-6xl">
				{leaderShip[index]}
			</h1>
			<img
				src={'/alumni/' + name.replace(/\s+/g, '') + '.webp'}
				alt="Leadership"
				class="w-[350px] h-[350px] rounded-full border-4"
				width={100}
				height={100}
			/>
			<h2 class="font-matrixtype text-black font-matrix !mt-[30px] mb-[65px] !text-4xl md:!text-6xl]">
				{name}
			</h2>
			<hr class="w-[325px] md:w-[450px] mb-[55px] border-2 rounded-full border-yellow-500" />
		</div>
	{/each}
</div>
