"use client";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <div className="md:w-full h-20 flex flex-row md:gap-30 items-center justify-evenly md:justify-between md:px-10 relative">

                <div>
                    <Link href="/">
                        <img className="max-w-none" src="../images/CSDClubLogo.png" alt="somgthing" width={50} height={100}/>
                    </Link>
                </div>

                <ul className="hidden md:flex gap-6 text-[20px] font-medium font-matrix">
                    <li>
                        <Link href="/" className="hover:text-yellow-500 font-bold">Home</Link>
                    </li>
                    <li>
                         <Link href="/Blog" className="hover:text-yellow-500 font-bold">Blog</Link>
                    </li>
                    <li>
                         <Link href="/Notes" className="hover:text-yellow-500 font-bold">Notes</Link>
                    </li>
                    <li>
                         <Link href="/Events" className="hover:text-yellow-500 font-bold">Events</Link>
                    </li>
                    <li>
                         <Link href="/Contact" className="hover:text-yellow-500 font-bold">Contact</Link>
                    </li>
                    <li>
                         <Link href="/Alumni" className="hover:text-yellow-500 font-bold">Alumni</Link>
                    </li>
                </ul>

                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-xl">
                    <Link href="/Login"> Login </Link>
                </button>

                <button onClick ={() => setMenuOpen(!menuOpen)} className="md:hidden">
                    <img className="w-[50px] max-w-none" src="../images/HamburgerMenuIcon.webp" alt="Menu Icon" />
                </button>

                {menuOpen && (
                    <div className= "absolute top-20 left-0 w-full bg-white rounded-b-lg pb-[50px] z-[100] md:hidden">
                         <div className="flex flex-col gap-6 text-[20px] font-medium font-matrix ml-[25px]">
                                <Link href="/" className="hover:text-yellow-500 font-bold w-full" onClick={() => setMenuOpen(false)}>Home</Link>
                                <Link href="/Blog" className="hover:text-yellow-500 font-bold" onClick={() => setMenuOpen(false)}>Blog</Link>
                                <Link href="/Notes" className="hover:text-yellow-500 font-bold" onClick={() => setMenuOpen(false)}>Notes</Link>
                                <Link href="/Events" className="hover:text-yellow-500 font-bold" onClick={() => setMenuOpen(false)}>Events</Link>
                                <Link href="/Contact" className="hover:text-yellow-500 font-bold" onClick={() => setMenuOpen(false)}>Contact</Link>
                                <Link href="/Alumni" className="hover:text-yellow-500 font-bold" onClick={() => setMenuOpen(false)}>Alumni</Link>
                        </div>
                    </div>
                )
                }
        
          </div>

        </div>
    )
}