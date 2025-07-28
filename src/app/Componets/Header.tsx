import Image from "next/image"

export default function Header() {
    return (
        <div>
            <div className="w-full h-20 bg-green-200 flex gap-30 items-center">
                <div>
                    <img src="../images/IHCClogoNew.png" alt="somgthing" width={50} height={100}/>
                </div>
                <ul className="flex gap-6 text-[20px] font-medium">
                    <li>home</li>
                    <li>Blog</li>
                    <li>Notes</li>
                    <li>Events</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}