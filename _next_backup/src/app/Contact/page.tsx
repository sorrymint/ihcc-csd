'use client';

export default function Contact() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-black p-[55px]">
			<div className="w-full max-w-3xl rounded-2xl bg-white p-8 text-center text-lg leading-relaxed text-gray-800 shadow-lg">
				<h1 className="mb-8 text-8xl font-bold text-pink-950">Contact Us</h1>

				<p className="mb-6">
					Contact for more information about the Computer Software Development Club.
				</p>

				<p className="mb-4 font-semibold">Club Advisor: Luke Matheis</p>

				<div className="mt-6 flex justify-center">
					<a
						href="mailto:Luke.Matheis@indianhills.edu"
						className="rounded-lg bg-yellow-400 px-6 py-3 text-black transition hover:bg-yellow-500"
					>
						Email Club Advisor
					</a>
				</div>

				{/* Add more contacts here as needed */}
			</div>
		</div>
	);
}
