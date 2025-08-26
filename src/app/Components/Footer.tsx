import Image from "next/image";
import Link from "next/link";

export default function Footer() {
 
 
    return (

        <div className=" bg-[#DEDEDE]">


            <h2 className = "font-bold flex items-center justify-center text-center text-4xl text-[#701730]">Interested In Joining?</h2>

            <p className = "hidden md:block text-sm text-center text-[#000000] mt-5">
                Everyone is welcome to join, <a className="underline text-sm text-[000000]" href="/Events">Click Here</a> to view upcoming events.
            </p>

            <div>
                <br></br>
                <Link href="/Contact" className='flex items-center justify-center'>
                    <p className='rounded-full p-3 pr-6 pl-6 bg-yellow-400 text-sm text-[#000000] hover:bg-yellow-500 shadow-2xl font-bold'>Join Here</p>
                </Link>
            </div>


            <div className = "md:flex md:items-center md:justify-evenly">

                <div className='hidden md:block'>
                    <Link href="/">
                    <img className = "h-25 w-20"src="../images/CSDClubLogoGray.png" alt="IHCC logo"></img>
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row md:max-sm:inline-block md:max-sm:pl-15 md:pl-20 my-8">
                    <hr className='w-11/12 ml-4 md:hidden' />
                    <Link href="/Our-Mission"><p className="font-bold text-[000000] m-3 ml-4">OUR MISSION</p></Link>
                    <hr className='w-11/12 ml-4 md:hidden' />
                    <Link href="/Contact" className='md:pr-9 md:pl-9 font-bold text-[000000] m-3 ml-4'>CONTACT US</Link>
                    <hr className='w-11/12 ml-4 md:hidden' />
                    <Link href="/AboutCSD"><p className="font-bold text-[000000] m-3 ml-4">ABOUT CSD</p></Link>
                    <hr className='w-11/12 ml-4 md:hidden' />
                </div>

                <div className="flex flex-row justify-evenly mb-15 md:mb-0">
                    <a href="https://www.facebook.com/" target='_blank'><img className="h-7 mx-2"src="../images/FaceBookNew.png" alt="FaceBook"></img></a>
                    <a href="https://www.instagram.com/" target='_blank'><img className="h-7 mx-2"src="../images/InstagramNew.png" alt="Instagram"></img></a>
                    <a href="https://x.com/" target='_blank'><img className="h-7 mx-2" src="../images/TwitterNew.png" alt="Twitter"></img></a>
                    <a href="https://github.com/sorrymint/ihcc-csd" target='_blank'><img className="h-7 mx-2" src="../images/gitHubLogo.png" alt="GitHub"></img></a>
                    <a href="https://www.linkedin.com/" target='_blank'><img className="h-7 mx-2" src="../images/LinkedInNew.png" alt="LinkedIn"></img></a>
                </div>


                <p className = "text-sm text-center text-[#000000] px-5 mb-10 md:hidden">
                    Everyone is welcome to join, <a className="underline text-sm text-[000000]" href="/Events">Click Here</a> to view upcoming events.
                </p>

            </div>
        </div>
    );
}
