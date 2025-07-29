"use client";

import { useEffect, useState } from "react";

function HomeContent() {
    const [today, setToday] = useState("");

    useEffect(() => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: "short",
        };
        const currentDate = new Date().toLocaleDateString(undefined, options);
        setToday(currentDate);
    }, []);

    return (
        <section
            className="px-8 py-16 md:flex items-center justify-between
                       bg-[url('/images/background.png')] bg-cover bg-center text-white relative"
            style={{ minHeight: "600px" }}
        >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

            <div className="max-w-xl relative z-10">
                <h1 className="text-[60px] md:text-[80px] font-extrabold leading-tight">
                    <span className="block">COMPUTER</span>
                    <span className="block text-pink-800 italic">SOFTWARE</span>
                    <span className="block">DEVELOPMENT</span>
                </h1>

                <div className="mt-10 flex items-center space-x-4 bg-gray-200 text-black p-4 rounded-xl w-fit shadow-lg relative z-10">
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

            <div className="mt-10 md:mt-0 md:ml-12 max-w-md relative z-10">
                <img
                    src="/Images/computer%20image.jpg"
                    alt="Macbook"
                    className="rounded-lg shadow-2xl"
                />
            </div>
        </section>
    );
}

function UpcomingSection() {
    const [today, setToday] = useState("");

    useEffect(() => {
        const options: Intl.DateTimeFormatOptions = { weekday: "short" };
        const currentDate = new Date().toLocaleDateString(undefined, options);
        setToday(currentDate);
    }, []);

    return (
        <section className="bg-gray-50 px-6 py-16 text-black">
            <h2 className="text-4xl font-extrabold text-center mb-12">UPCOMING</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[1, 2, 3].map((_, index) => (
                    <div key={index} className="bg-white text-black rounded-2xl shadow-md overflow-hidden">
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
                                    Advance Technology Center<br />Room: 200
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-200">
                    View Events
                </button>
            </div>
        </section>
    );
}

export default function HomePage() {
    return (
        <div className="bg-[url(/images/background.png)]">
            <main className="flex-1">
                <HomeContent />
                <UpcomingSection /> {/* ✅ FIXED: Now it's used */}
            </main>
        </div>
    );
}


