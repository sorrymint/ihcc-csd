// This is the Homepage
"use client";

import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function HomeContent() {
    const [today, setToday] = useState("");

    useEffect(() => {
        setToday("Wed");
    }, []);

    return (
        <section
            className="px-6 sm:px-8 py-16 md:flex items-center justify-between bg-black text-white relative"
            style={{ minHeight: "600px" }}
        >
            <div className="max-w-xl relative z-10">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                    <span className="block">COMPUTER</span>
                    <span className="block text-pink-800 italic">SOFTWARE</span>
                    <span className="block">DEVELOPMENT</span>
                </h1>
                <div className="mt-10 flex items-center space-x-4 bg-gray-200 text-black p-4 rounded-xl w-fit shadow-lg">
                    <div className="bg-white rounded-lg px-4 py-2 text-center shadow-md">
                        <p className="text-sm font-semibold text-gray-500">{today}</p>
                        <p className="text-xl font-bold">12:00</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-pink-800">Bi-weekly Meeting</h3>
                        <p className="text-sm">
                            Advance Technology Center
                            <br />
                            Room: 200
                        </p>
                    </div>
                </div>
            </div>

            {/* Modified image only */}
            <div
                className="relative z-10 mt-10 md:mt-0 md:ml-[-40px]"
                style={{
                    width: "480px",
                    maxWidth: "100%",
                    height: "auto",
                }}
            >
                <img
                    src="/Images/computer%20image.jpg"
                    alt="Macbook"
                    className="rounded-lg shadow-2xl w-full h-full object-contain animate-rotateY"
                />
            </div>
        </section>
    );
}

function UpcomingSection() {
    const [today, setToday] = useState("");

    useEffect(() => {
        setToday("Wed");
    }, []);

    return (
        <section className="bg-gray-50 px-6 py-16 text-black">
            <h2 className="text-4xl font-extrabold text-center mb-12">
                **EVENTS PAGE AND FEATURES COMING SOON**
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((_, index) => (
                    <div
                        key={index}
                        className="bg-white text-black rounded-2xl shadow-md overflow-hidden"
                    >
                        <img
                            src="/Images/event%20image.png"
                            alt="Event"
                            className="w-full h-48 object-cover"
                        />
                        <div className="flex items-start p-4">
                            <div className="bg-pink-100 text-black px-3 py-2 rounded-lg shadow-sm text-center mr-4">
                                <p className="text-xs font-semibold text-gray-600">{today}</p>
                                <p className="text-xl font-bold">12:00</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-pink-800">Bi-weekly Meeting</h3>
                                <p className="text-sm text-gray-700">
                                    Advance Technology Center
                                    <br />
                                    Room: 200
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8">
                <Link href="/Events" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-200">
                    View Events
                </Link>
            </div>
        </section>
    );
}

function FAQSection() {
    const faqs = [
        "How is your day?",
        "How is your energy?",
        "What are you learning?",
        "Did you sleep well?",
        "Are you motivated?",
        "What challenges today?",
        "What excites you?",
        "What do you need?",
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className="bg-gray-100 max-w-6xl mx-auto mt-8 rounded-lg shadow-lg p-6 pb-20">
            <h2 className="text-4xl font-extrabold text-center mb-10">
                FREQUENTLY ASKED QUESTIONS **COMING SOON**
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((question, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm">
                        <button
                            type="button"
                            className="w-full flex justify-between items-center p-5 rounded-lg text-left hover:bg-gray-100 transition"
                            onClick={() => toggle(index)}
                        >
                            <span className="text-base font-medium text-gray-800">{question}</span>
                            <ChevronDownIcon
                                className={`h-5 w-5 text-black transition-transform duration-300 ${
                                    openIndex === index ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="px-5 pb-4 text-sm text-gray-700">
                                This is where the dropdown answer will appear. **COMING SOON**
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function HomePage() {
    return (
        <div className="bg-black">
            <main className="flex-1 pb-8">
                <HomeContent />
                <UpcomingSection />
                <FAQSection />
            </main>
        </div>
    );
}
