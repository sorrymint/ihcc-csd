"use client";

export default function Contact() {
    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center p-[55px]">
            <div className="text-center max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 text-gray-800 text-lg leading-relaxed">
                <h1 className="text-8xl font-bold text-pink-950 mb-8">Contact Us</h1>

                <p className="mb-6">
                    Contact for more information about the Computer Software Development Club.
                </p>

                <p className="mb-4 font-semibold">Club Advisor: Luke Matheis</p>

                <div className="flex justify-center mt-6">
                    <a
                        href="mailto:Luke.Matheis@indianhills.edu"
                        className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
                    >
                        Email Club Advisor
                    </a>
                </div>

                {/* Add more contacts here as needed */}
            </div>
        </div>
    );
}
