import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <div className=" bg-(--bg-base) py-8  space-y-10">
        <h2 className="font-bold flex items-center justify-center text-center text-4xl text-[#701730]">
          Interested In Joining?
        </h2>

        <p className="hidden md:block text-sm text-center text-[#000000] mt-5">
          Everyone is welcome to join,{" "}
          <a className="underline text-sm text-[000000]" href="/Events">
            Click Here
          </a>{" "}
          to view upcoming events.
        </p>

        <div 
        className="flex items-center justify-center mt-5">
          <br></br>
          <button 
          className="rounded-full p-3 pr-6 pl-6 bg-(--yellow) 0%, rgba(255, 164, 0, 1) 100%);] text-sm text-(--text-base)  font-bold shadow-lg cursor-pointer tracking-[1.5px] uppercase transition-all duration-150 ease-linear hover:tracking-[3px] hover:bg-(--yellow-light) ">
            <Link href="/Contact">Join Here</Link>
          </button>
        </div>

        <div className="md:flex md:items-center md:justify-evenly">
          <div className="hidden md:block">
            <Link href="/">
              <Image
                className="h-25 w-20"
                src="/images/CSDClubLogoGray.png"
                alt="IHCC logo"
                width={20}
                height={25}
              />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:max-sm:inline-block md:max-sm:pl-15 md:pl-20 my-8">
            <hr className="w-11/12 ml-4 md:hidden" />
            <Link href="/Our-Mission">
              <p className="font-bold text-[000000] m-3 ml-4">OUR MISSION</p>
            </Link>
            <hr className="w-11/12 ml-4 md:hidden" />
            <Link
              href="/Contact"
              className="md:pr-9 md:pl-9 font-bold text-[000000] m-3 ml-4"
            >
              CONTACT US
            </Link>
            <hr className="w-11/12 ml-4 md:hidden" />
            <Link href="/AboutCSD">
              <p className="font-bold text-[000000] m-3 ml-4">ABOUT CSD</p>
            </Link>
            <hr className="w-11/12 ml-4 md:hidden" />
          </div>

          <div className="flex flex-row justify-evenly mb-15 md:mb-0 items-center">
            <a href="https://www.facebook.com/" target="_blank">
              <Image
                className="h-7 mx-2"
                src="/images/FaceBookNew.png"
                alt="FaceBook"
                width={28}
                height={7}
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <Image
                className="h-7 mx-2"
                src="/images/InstagramNew.png"
                alt="Instagram"
                width={28}
                height={7}
              />
            </a>
            <a href="https://x.com/" target="_blank">
              <Image
                className="h-7 mx-2"
                src="/images/TwitterNew.png"
                alt="Twitter"
                width={28}
                height={7}
              />
            </a>
            <a href="https://github.com/sorrymint/ihcc-csd" target="_blank">
              <Image
                className="h-7 mx-2"
                src="/images/gitHubLogo.png"
                alt="GitHub"
                width={28}
                height={7}
              />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <Image
                className="h-7 mx-2"
                src="/images/LinkedInNew.png"
                alt="LinkedIn"
                width={28}
                height={7}
              />
            </a>
          </div>

          <p className="text-sm text-center text-[#000000] px-5 pb-5 md:hidden">
            Everyone is welcome to join,{" "}
            <a className="underline text-sm text-(--yellow)/80" href="/Events">
              Click Here
            </a>{" "}
            to view upcoming events.
          </p>
        </div>
      </div>
    </footer>
  );
}
