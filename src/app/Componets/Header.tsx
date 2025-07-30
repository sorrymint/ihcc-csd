import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <div>
            <div className="w-full h-20 flex gap-30 items-center justify-between px-10">
                <div>
                    <img src="../images/IHCClogoNew.png" alt="somgthing" width={50} height={100}/>
                </div>
                <ul className="flex gap-6 text-[20px] font-medium">
                    <li>
                        <Link href="/">home</Link>
                    </li>
                    <li>
                         <Link href="/Blog">blog</Link>
                    </li>
                    <li>
                         <Link href="/Notes">notes</Link>
                    </li>
                    <li>
                         <Link href="/Events">events</Link>
                    </li>
                    <li>
                         <Link href="/Contact">contact</Link>
                    </li>

                </ul>
            
                <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-xl">
                    <Link href="/login"> Login </Link>
                </button>
          </div>
        </div>
    )
}