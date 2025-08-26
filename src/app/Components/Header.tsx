"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  // For moblie
  const [menuOpen, setMenuOpen] = useState(false);
  // For on Scoll
  const [isVisible, setVisible] = useState(true);
  // Directing to the certain pages
  const pathname = usePathname();

  // PURPOSE: check if the user has scroll, depeding of the result it will hid the navbar or diplay it when scolled up.
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 20) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlHeader);

    return () => window.removeEventListener("scroll", controlHeader);
  }, []);

  const headerLinks = [
    { href: "/", label: "Home" },
    { href: "/Blog", label: "Blog" },
    { href: "/Notes", label: "Notes" },
    { href: "/Events", label: "Events" },
    { href: "/Contact", label: "Contact" },
    { href: "/Alumni", label: "Alumni" },
  ];

  return (
    <nav
      className={`fixed w-full  transition-transform duration-300 z-50 ${
        isVisible ? "transition-y-0" : "-translate-y-full"
      }  `}
    >
      <div
        className={`px-4 sm:px-6 md:px-14 lg:px-18 bg-(--bg-light) rounded-2xl mx-3 mt-3 h-18 shadow-md`}
      >
        <div className="flex h-full w-full items-center">
          <div className="flex gap-2 items-center w-full justify-between ">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className=" md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hovergray-900 hover:bg-gray-100 focus:outline-none "
              >
                {!menuOpen ? (
                  <Menu className="text-3xl " strokeWidth={3} color={"#0D0D0D"} />
                ) : (
                  <X className="text-3xl " strokeWidth={3} color={"#0D0D0D"} />
                )}
              </button>
              <div className="flex items-cente ">
                <Link href="/">
                  <Image
                    className=""
                    src="/images/CSDClubLogo-removebg-preview.png"
                    alt="Computer Software Development Club Logo"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>

            </div>

            <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
              {headerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-(--text-dark) hover:text-neutral-800 px-2 py-2 text-md font-semibold transition-colors ${
                    pathname === link.href ? ` border-b-2 text-(--yellow)` : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              className={`bg-(--yellow) hover:bg-(--yellow)/70 text-(--text-base) font-semibold  rounded-3xl h-fit  px-[20px] py-[4px] mr-4`}
            >
              <Link href="/Login"> Login </Link>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "  max-h-84 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        } `}
      >
        <div
          className={`px-2 pt-8 pb-3 space-y-1 sm:px-3 bg-(--bg-light) mx-3 -mt-4 rounded-b-2xl`}
        >
          {headerLinks.map((h) => (
            <Link
              key={h.href}
              href={h.href}
              onClick={() => setMenuOpen(false)}
              className={` block px-3 py-3 text-base font-medium ${
                pathname === h.href
                  ? `text-(--yellow) bg-(--bg-base) rounded-xl`
                  : ` text-(--text-base) hover:text-gray-900 hover:bg-gray-100`
              }`}
            >
              {" "}
              {h.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );

  //   return (
  //     <div>
  //       <div className="md:w-full h-20 flex flex-row md:gap-30 items-center justify-evenly md:justify-between md:px-10 relative">
  //         <div>
  //           <Link href="/">
  //             <img
  //               className="max-w-none"
  //               src="../images/CSDClubLogo.png"
  //               alt="somgthing"
  //               width={50}F
  //               height={100}
  //             />
  //           </Link>
  //         </div>

  //         <ul className="hidden md:flex gap-6 text-[20px] font-medium font-matrix">
  //           <li>
  //             <Link href="/" className="hover:text-yellow-500 font-bold">
  //               Home
  //             </Link>
  //           </li>
  //           <li>
  //             <Link href="/Blog" className="hover:text-yellow-500 font-bold">
  //               Blog
  //             </Link>
  //           </li>
  //           <li>
  //             <Link href="/Notes" className="hover:text-yellow-500 font-bold">
  //               Notes
  //             </Link>
  //           </li>
  //           <li>
  //             <Link href="/Events" className="hover:text-yellow-500 font-bold">
  //               Events
  //             </Link>
  //           </li>
  //           <li>
  //             <Link href="/Contact" className="hover:text-yellow-500 font-bold">
  //               Contact
  //             </Link>
  //           </li>
  //           <li>
  //             <Link href="/Alumni" className="hover:text-yellow-500 font-bold">
  //               Alumni
  //             </Link>
  //           </li>
  //         </ul>

  //         <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-xl">
  //           <Link href="/Login"> Login </Link>
  //         </button>

  //         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
  //           <img
  //             className="w-[50px] max-w-none"
  //             src="../images/HamburgerMenuIcon.webp"
  //             alt="Menu Icon"
  //           />
  //         </button>

  //         {menuOpen && (
  //           <div className="absolute top-20 left-0 w-full bg-white rounded-b-lg pb-[50px] z-[100] md:hidden">
  //             <div className="flex flex-col gap-6 text-[20px] font-medium font-matrix ml-[25px]">
  //               <Link
  //                 href="/"
  //                 className="hover:text-yellow-500 font-bold w-full"
  //                 onClick={() => setMenuOpen(false)}
  //               >
  //                 Home
  //               </Link>
  //               <Link
  //                 href="/Blog"
  //                 className="hover:text-yellow-500 font-bold"
  //                 onClick={() => setMenuOpen(false)}
  //               >
  //                 Blog
  //               </Link>
  //               <Link
  //                 href="/Notes"
  //                 className="hover:text-yellow-500 font-bold"
  //                 onClick={() => setMenuOpen(false)}
  //               >
  //                 Notes
  //               </Link>
  //               <Link
  //                 href="/Events"
  //                 className="hover:text-yellow-500 font-bold"
  //                 onClick={() => setMenuOpen(false)}
  //               >
  //                 Events
  //               </Link>
  //               <Link
  //                 href="/Contact"
  //                 className="hover:text-yellow-500 font-bold"
  //                 onClick={() => setMenuOpen(false)}
  //               >
  //                 Contact
  //               </Link>
  //               <Link
  //                 href="/Alumni"
  //                 className="hover:text-yellow-500 font-bold"
  //                 onClick={() => setMenuOpen(false)}
  //               >
  //                 Alumni
  //               </Link>
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   );
}
