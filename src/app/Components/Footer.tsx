import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <div className=" bg-[#E5E5E5] py-8  space-y-10">
        <h2 className="font-bold flex items-center justify-center text-center text-4xl text-[#701730]">
          Interested In Joining?
        </h2>

        <p className="hidden md:block text-sm text-center text-gray-800 mt-5">
          Everyone is welcome to join,{" "}
          <Link
            className="underline text-sm text-[#F77C00]/90"
            href="/Events"
          >
            Click Here
          </Link>{" "}
          to view upcoming events.
        </p>

        <div className="flex items-center justify-center mt-5">
          <br></br>
          <button
            className="rounded-full p-3 pr-6 pl-6 bg-[#FFA400] text-sm text-gray-800 font-bold shadow-lg cursor-pointer tracking-[1.5px] uppercase transition-all duration-150 ease-linear hover:tracking-[3px] hover:bg-[#F77C00] hover:shadow-[0_7px_29px_0px_#F77C00] active:tracking-[3px] active:bg-[#F77C00] active:shadow-[0_0px_0px_0px_#F77C00] active:translate-y-[5px] active:duration-100"
            title="Join"
          >
            <Link href="/Contact">Join Here</Link>
          </button>
        </div>

        <div className="md:flex md:items-center md:justify-evenly">
          <div className="hidden md:block">
            <Link href="/">
              <Image
                className=""
                src="/images/CSDClubLogo-removebg-preview.svg"
                alt="Computer Software Development Club Logo"
                width={95}
                height={25}
                title="Home"
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
            <Link href="https://www.facebook.com/" target="_blank">
              <Image
                className="h-7 mx-2"
                src="/images/FaceBookNew.png"
                alt="FaceBook"
                width={28}
                height={7}
                title="Facebook"
              />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <Image
                className="h-7 mx-2"
                src="/images/InstagramNew.png"
                alt="Instagram"
                width={28}
                height={7}
                title="Instagram"
              />
            </Link>
            <Link href="https://x.com/" target="_blank">
              <Image
                className="h-7 mx-2"
                src="/images/TwitterNew.png"
                alt="Twitter"
                width={28}
                height={7}
                title="Twitter"
              />
            </Link>
            <Link href="https://github.com/sorrymint/ihcc-csd" target="_blank">
              <Image
                className="h-7 mx-2"
                src="/images/gitHubLogo.png"
                alt="GitHub"
                width={28}
                height={7}
                title="Github"
              />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank">
              <Image
                className="h-7 mx-2"
                src="/images/LinkedInNew.png"
                alt="LinkedIn"
                width={28}
                height={7}
                title="LinkedIn"
              />
            </Link>
          </div>

          <p className="text-sm text-center text-gray-800 px-5 pb-5 md:hidden">
            Everyone is welcome to join,{" "}
            <span
            title="View Events">
              <Link
                className="underline text-sm text-[#F77C00]/90"
                href="/Events"
                title="View Events"
              >
                Click Here
              </Link>
            </span>{" "}
            to view upcoming events.
          </p>
        </div>
      </div>
    </footer>
  );
}
