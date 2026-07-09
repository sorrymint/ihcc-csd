<script lang="ts">
	const today = 'Wed';
	const countdownDate = new Date('2025-09-18T23:18:07');

	//TODO combine these into a single array of objects with question and answer properties
	const faqs = [
		'Do I need prior coding experience to join the club?',
		'What type of projects will I work on in my first few terms?',
		'How much time should I expect to commit each week?',
		"Will I get help if I'm stuck on an assignment or project?",
		'What tools and software do I need to install?',
		'How can this club help me prepare for internships or future careers?',
		'Do I need an expensive computer to start programming?',
		'Who would win in a programmer-off, Susan and Luke or James and Jarrett????'
	];

	const answers = [
		"No prior experience is required! Our club is designed to support students at all skill levels - whether you're starting from scratch or already have some background. We provide workshops and peer support to help you learn step-by-step.",
		"You'll typically work on small, hands-on projects such as personal websites, simple games, or basic web apps. These projects help you learn core programming concepts, teamwork, and practical problem-solving skills.",
		"Most students spend about 3-5 hours per week on club-related activities like workshops, coding meetups, and projects. You'll also want to set aside additional practice time outside of class, which can vary depending on how many courses you're taking and your personal schedule.",
		'Absolutely! We host office hours, peer coding sessions, and a Discord/Slack community where you can ask questions anytime. Upper-term members are happy to mentor and share tips. We also have tutors available from 12-1 PM for additional one-on-one help.',
		"You'll need a code editor (like VS Code), Git for version control, and a browser like Chrome or Firefox for testing web apps. Other classes will need other software but we'll walk you through setting everything up during classes intro sessions.",
		'Our club builds real-world skills by teaching collaborative development, object-oriented programming, version control (Git/GitHub), and portfolio-building projects that follow modern industry standards. We also host peer-led sessions - including projects like the one that built this website - and share resume tips, interview prep, and networking opportunities with alumni and industry professionals.',
		"Not at all! Most beginner programming work can be done on a basic laptop or desktop that can run a modern web browser and a code editor like VS Code. If your computer can handle everyday tasks like browsing the internet or streaming video, it's likely good enough for coding. As you progress into more advanced areas (like game development or machine learning), you might want more power, but for getting started, any reliable computer works.",
		"Ah, the Clash of the Semi-Colons(TM) - where Susan's clean code style meets Luke's lightning-fast debugging, going head-to-head with James' algorithm wizardry and Jarrett's relentless caffeine-fueled commits. Honestly? It'd probably end in a merge conflict... and a pizza party."
	];

	let openIndex = $state<number | null>(null);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<div class="bg-black">
	<main class="flex-1 pb-8">
		<div
			class="bg-[url('/Images/LaptopBackground1.png')] h-[100vh] bg-no-repeat bg-contain bg-center"
		>
			<div class="pl-[5%]">
				<h1 class="!m-0 !text-4xl text-[#E5E5E5] pt-[16vh] md:pt-[20vh] md:!text-5xl lg:pt-[24vh]">
					COMPUPTER <span class="block text-[#701730]">SOFTWARE</span>
					DEVELOPMENT
				</h1>

				<div class="pt-[12rem] md:pt-[20vh] lg:pt-[20vh]">
					<!-- CountdownTimer is a React component; comment out until a Svelte version exists. -->
					<!-- <CountdownTimer deadline={countdownDate} title="Club Meeting" category="Upcomming Events" /> -->
				</div>
			</div>
		</div>

		<section class="bg-gray-50 px-6 py-16 text-black h-screen flex items-center flex-col gap-5">
			<h3 class="!text-5xl !text-(--text-base) font-extrabold text-center mb-12">
				Upcoming Events
			</h3>
			<div class="overflow-scroll px-5 py-5">
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each [1, 2, 3] as _, index}
						<div class="rounded-2xl bg-white text-black shadow-md">
							<img
								src="/Images/event%20image.png"
								alt="Event"
								class="h-48 w-full object-cover"
								width="100"
								height="48"
							/>
							<div class="flex items-center p-4">
								<div class="mr-4 rounded-lg bg-pink-100 px-3 py-2 text-center text-black shadow-sm">
									<p class="text-xs font-semibold text-gray-600">{today}</p>
									<p class="text-xl font-bold">12:00</p>
								</div>
								<div>
									<h3 class="text-lg font-bold text-pink-800">Bi-weekly Meeting</h3>
									<p class="text-sm text-gray-700">
										Advance Technology Center
										<br />
										Room: 200
									</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="mt-8 text-center">
				<a
					href="/Events"
					class="cursor-pointer rounded-full bg-[#FFA400] px-24 py-3 text-sm font-bold uppercase tracking-[1.5px] text-gray-800 shadow-lg transition-all duration-150 ease-linear hover:bg-[#F77C00] hover:tracking-[2px] hover:shadow-[0_7px_29px_0px_#F77C00] active:translate-y-[5px] active:bg-[#F77C00] active:tracking-[2px] active:shadow-[0_0px_0px_0px_#F77C00] active:duration-100"
				>
					View Events
				</a>
			</div>
		</section>

		<section class="mx-auto mt-8 max-w-6xl rounded-lg bg-gray-100 p-6 pb-20 shadow-lg">
			<h2 class="mb-10 text-center text-4xl font-extrabold">FREQUENTLY ASKED QUESTIONS</h2>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each faqs as question, index}
					<div class="rounded-lg bg-white shadow-sm">
						<button
							type="button"
							class="flex w-full items-center justify-between rounded-lg p-5 text-left transition hover:bg-gray-100"
							onclick={() => toggle(index)}
						>
							<span class="text-base font-medium text-gray-800">{question}</span>
							<span
								class="h-5 w-5 text-black transition-transform duration-300"
								class:rotate-180={openIndex === index}
							>
								v
							</span>
						</button>
						{#if openIndex === index}
							<div class="px-5 pb-4 text-sm text-gray-700">{answers[index]}</div>
						{/if}
					</div>
				{/each}
			</div>
		</section>
	</main>
</div>
