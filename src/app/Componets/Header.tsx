"use client";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
            <div className="w-full h-20 flex gap-30 items-center justify-between px-10">
                <div>
                    <Link href="/">
                        <img src="../images/CSDClubLogo.png" alt="somgthing" width={50} height={100}/>
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
                <div className="nd:hidden">
                    <button onClick ={() => setMenuOpen(!menuOpen)}>
                        <img className="md:hidden" src="../images/HamburgerMenuIcon.webp" alt="Menu Icon" />
                    </button>
                </div>

                {menuOpen && (
                    <div className= "absolute top-full left-0 w-full bg-white shadow-lg rounded-lg pb-[50px] md:hidden">
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
                    </div>
                )

                }
            
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-xl">
                    <Link href="/Login"> Login </Link>
                </button>
          </div>
        </div>
    )
}