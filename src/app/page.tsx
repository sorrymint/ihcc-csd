// This is the Homepage
"use client";

import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import CountdownTimer from "./Components/CountdownTimer";
import Image from "next/image";

// function HomeContent() {
//   const [today, setToday] = useState("");

//   useEffect(() => {
//     setToday("Wed");
//   }, []);

//   return (
//     <section
//       className="px-6 sm:px-8 py-16 md:flex items-center justify-between bg-black text-white relative"
//       style={{ minHeight: "600px" }}
//     >
//       <div className="max-w-xl relative z-10">
//         <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-center">
//           <span className="block">COMPUTER</span>
//           <span className="block text-pink-800 italic">SOFTWARE</span>
//           <span className="block">DEVELOPMENT</span>
//         </h1>
//         <div className="mt-10 flex items-center space-x-4 bg-gray-200 text-black p-4 rounded-xl w-fit shadow-lg">
//           <div className="bg-white rounded-lg px-4 py-2 text-center shadow-md">
//             <p className="text-sm font-semibold text-gray-500">{today}</p>
//             <p className="text-xl font-bold">12:00</p>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold text-pink-800">
//               Bi-weekly Meeting
//             </h3>
//             <p className="text-sm">
//               Advance Technology Center
//               <br />
//               Room: 200
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Modified image only */}
//       <div
//         className="relative z-10 mt-10 md:mt-0 md:ml-[-40px]"
//         style={{
//           width: "480px",
//           maxWidth: "100%",
//           height: "auto",
//         }}
//       >
//         <img
//           src="/Images/computer%20image.jpg"
//           alt="Macbook"
//           className="rounded-lg shadow-2xl w-full h-full object-contain animate-rotateY"
//         />
//       </div>
//     </section>
//   );
// }

function UpcomingSection() {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday("Wed");
  }, []);

  return (
    <section className="bg-gray-50 px-6 py-16 text-black h-screen flex items-center flex-col gap-5">
      <h3 className="!text-5xl !text-(--text-base) font-extrabold text-center mb-12">
        Upcoming Events
      </h3>
      <div className=" overflow-scroll px-5 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl shadow-md"
            >
              <Image
                src="/Images/event%20image.png"
                alt="Event"
                className="w-full h-48 object-cover"
                width={100}
                height={48}
              />
              <div className="flex items-center p-4">
                <div className="bg-pink-100 text-black px-3 py-2 rounded-lg shadow-sm text-center mr-4">
                  <p className="text-xs font-semibold text-gray-600">{today}</p>
                  <p className="text-xl font-bold">12:00</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-pink-800">
                    Bi-weekly Meeting
                  </h3>
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
      </div>

      <div className="text-center mt-8">
        <Link
          href="/Events"
          className="px-24 py-3 rounded-full bg-[#FFA400] text-sm text-gray-800 font-bold shadow-lg cursor-pointer tracking-[1.5px] uppercase transition-all duration-150 ease-linear hover:tracking-[2px] hover:bg-[#F77C00] hover:shadow-[0_7px_29px_0px_#F77C00] active:tracking-[2px] active:bg-[#F77C00] active:shadow-[0_0px_0px_0px_#F77C00] active:translate-y-[5px] active:duration-100"
        >
          View Events
        </Link>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    "Do I need prior coding experience to join the club?",
    "What type of projects will I work on in my first few terms?",
    "How much time should I expect to commit each week?",
    "Will I get help if I'm stuck on an assignment or project?",
    "What tools and software do I need to install?",
    "How can this club help me prepare for internships or future careers?",
    "Do I need an expensive computer to start programming?",
    "Who would win in a programmer-off, Susan and Luke or James and Jarrett????",
  ];

  const answers = [
    "No prior experience is required! Our club is designed to support students at all skill levels — whether you're starting from scratch or already have some background. We provide workshops and peer support to help you learn step-by-step.",
    "You'll typically work on small, hands-on projects such as personal websites, simple games, or basic web apps. These projects help you learn core programming concepts, teamwork, and practical problem-solving skills.",
    "Most students spend about 3-5 hours per week on club-related activities like workshops, coding meetups, and projects. You'll also want to set aside additional practice time outside of class, which can vary depending on how many courses you're taking and your personal schedule.",
    "Absolutely! We host office hours, peer coding sessions, and a Discord/Slack community where you can ask questions anytime. Upper-term members are happy to mentor and share tips. We also have tutors available from 12-1 PM for additional one-on-one help.",
    "You'll need a code editor (like VS Code), Git for version control, and a browser like Chrome or Firefox for testing web apps. Other classes will need other software but we'll walk you through setting everything up during classes intro sessions.",
    "Our club builds real-world skills by teaching collaborative development, object-oriented programming, version control (Git/GitHub), and portfolio-building projects that follow modern industry standards. We also host peer-led sessions — including projects like the one that built this website — and share resume tips, interview prep, and networking opportunities with alumni and industry professionals.",
    "Not at all! Most beginner programming work can be done on a basic laptop or desktop that can run a modern web browser and a code editor like VS Code. If your computer can handle everyday tasks like browsing the internet or streaming video, it's likely good enough for coding. As you progress into more advanced areas (like game development or machine learning), you might want more power, but for getting started, any reliable computer works.",
    "Ah, the Clash of the Semi-Colons™ — where Susan's clean code style meets Luke's lightning-fast debugging, going head-to-head with James' algorithm wizardry and Jarrett's relentless caffeine-fueled commits. Honestly? It'd probably end in a merge conflict… and a pizza party.",
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-gray-100 max-w-6xl mx-auto mt-8 rounded-lg shadow-lg p-6 pb-20">
      <h2 className="text-4xl font-extrabold text-center mb-10">
        FREQUENTLY ASKED QUESTIONS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((question, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm">
            <button
              type="button"
              className="w-full flex justify-between items-center p-5 rounded-lg text-left hover:bg-gray-100 transition"
              onClick={() => toggle(index)}
            >
              <span className="text-base font-medium text-gray-800">
                {question}
              </span>
              <ChevronDownIcon
                className={`h-5 w-5 text-black transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-sm text-gray-700">
                {answers[index]}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function HeroSection() {
  const countdownDate = new Date("2025-09-18T23:18:07");
  return (
    <div
      className={
        "bg-[url('/Images/LaptopBackground1.png')] h-[100vh] bg-no-repeat bg-contain bg-center "
      }
    >
      <div className="pl-[5%]">
        <h1 className="!m-0 !text-4xl text-[#E5E5E5] pt-[16vh] md:pt-[20vh] md:!text-5xl lg:pt-[24vh]">
          COMPUPTER <span className="block text-[#701730]">SOFTWARE</span>{" "}
          DEVELOPMENT
        </h1>

        <div className="pt-[12rem] md:pt-[20vh] lg:pt-[20vh] ">
          <CountdownTimer
            deadline={countdownDate}
            title="Club Meeting"
            category="Upcomming Events"
          />
        </div>
      </div>
    </div>
  );
}

// top-40 -right-40 bg-(--bg-black)

export default function HomePage() {
  return (
    <div className="bg-black">
      <main className="flex-1 pb-8">
        <HeroSection />
        {/* <HomeContent /> */}

        <UpcomingSection />
        <FAQSection />
      </main>
    </div>
  );
}
