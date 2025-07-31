import Link from 'next/link'
 
export default function Footer() {
 
 
    return (
        <div className=" bg-[#DEDEDE]">
            <div className= "">
                <h2 className = "font-bold flex items-center justify-center text-4xl text-[#701730]">Interested In Joining</h2>
                 <br></br>
                 <p className = "text-sm flex items-center justify-center text-[#000000]">Everyone is welcome to join,&nbsp;
                     <a className="underline text-sm text-[000000]" href="/Events"> Click Here </a>&nbsp; to view</p>
                  <p className ="flex items-center justify-center text-sm text-[#000000]"> upcoming events.</p>
             </div>
            <div>
                <br></br>
                <Link href="/Contact" className='flex items-center justify-center'>
                    <p className='rounded-full p-3 pr-6 pl-6 bg-[#FFA400] text-sm  text-[#000000] hover:bg-yellow-500'>Join Here</p>
                </Link>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div className = " flex items-center justify-evenly">
                <div>
                    <Link href="/">
                    <img className = "h-25 w-20"src="../images/CSDClubLogoGray.png" alt="IHCC logo"></img>
                    </Link>
                </div>
                <div className="max-sm:inline-block max-sm:pl-15 flex pl-20">
                    <Link href="/Our-Mission"><p className="font-semibold text-[000000]">Our Mission</p></Link>
                    <Link href="/Contact" className='pr-9 pl-9 font-semibold text-[000000]'>Contact Us</Link>
                    <Link href="/AboutCSD"><p className="font-semibold text-[000000]">About CSD</p></Link>
                </div>
                <div className=" flex">
                    <a href="https://www.facebook.com/" target='_blank'><img className = "mt-1 h-7 w-7"src="../images/FaceBookNew.png" alt="FaceBook"></img></a>
                    <a href="https://www.instagram.com/" target='_blank'><img className = "max-sm:mr-2 max-sm:ml-2 mr-3 ml-3 mt-1 h-7 w-7"src="../images/InstagramNew.png" alt="Instagram"></img></a>
                    <a href="https://x.com/" target='_blank'><img className = "max-sm:mr-2 max-sm:ml-2 mr-3 ml-3 mt-1 h-7 w-7"src="../images/TwitterNew.png" alt="Twitter"></img></a>
                    <a href="https://github.com/sorrymint/ihcc-csd" target='_blank'><img className = "max-sm:mr-2 max-sm:ml-2 mr-3 ml-3 mt-1 h-7 w-7"src="../images/gitHubLogo.png" alt="GitHub"></img></a>
                    <a href="https://www.linkedin.com/" target='_blank'><img className = "mt-1 h-7 w-7"src="../images/LinkedInNew.png" alt="LinkedIn"></img></a>
                </div>
            </div>
            <br></br>
        </div>
    );
}