import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" bg-[#DEDEDE]">
      <div className="">
        <h2 className="font-bold flex items-center justify-center text-center text-4xl text-[#701730]">
          Interested In Joining?
        </h2>
        <br></br>
        <p className="text-sm flex items-center justify-center text-[#000000]">
          Everyone is welcome to join,&nbsp;
          <a className="underline text-sm text-[000000]" href="/Events">
            {" "}
            Click Here{" "}
          </a>
          &nbsp; to view
        </p>
        <p className="flex items-center justify-center text-sm text-[#000000]">
          {" "}
          upcoming events.
        </p>
      </div>
      <div>
        <br></br>
        <Link href="/Contact" className="flex items-center justify-center">
          <p className="rounded-full p-3 pr-6 pl-6 bg-yellow-400 text-sm text-[#000000] hover:bg-yellow-500 shadow-2xl font-bold">
            Join Here
          </p>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className="flex items-center justify-evenly">
        <div>
          <Link href="/">
            <Image
              className="h-25 w-20"
              src="/images/CSDClubLogoGray.png"
              alt="IHCC logo"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row md:max-sm:inline-block md:max-sm:pl-15 md:pl-20">
          <Link href="/Our-Mission">
            <p className="font-semibold text-[000000] m-3">Our Mission</p>
          </Link>
          <Link
            href="/Contact"
            className="md:pr-9 md:pl-9 font-semibold text-[000000] m-3"
          >
            Contact Us
          </Link>
          <Link href="/AboutCSD">
            <p className="font-semibold text-[000000] m-3">About CSD</p>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row">
          <a href="https://www.facebook.com/" target="_blank">
            <Image
              className="md:mt-1 md:h-7 w-7"
              src="/images/FaceBookNew.png"
              alt="FaceBook"
              width={7} 
              height={0}
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <Image
              className="mt-[5px] md:max-sm:mr-2 md:max-sm:ml-2 md:mr-3 md:ml-3 md:mt-1 h-7 w-7"
              src="/images/InstagramNew.png"
              alt="Instagram"
              width={7}
              height={0}
            />
          </a>
          <a href="https://x.com/" target="_blank">
            <Image
              className="mt-[5px] max-sm:mr-2 md:max-sm:ml-2 md:mt-1 h-7 w-7"
              src="/images/TwitterNew.png"
              alt="Twitter"
              width={7}
              height={0}
            />
          </a>
          <a href="https://github.com/sorrymint/ihcc-csd" target="_blank">
            <Image
              className="mt-[5px] md:max-sm:mr-2 md:max-sm:ml-2 md:mr-3 md:ml-3 md:mt-1 h-7 w-7"
              src="/images/gitHubLogo.png"
              alt="GitHub"
              width={7}
              height={0}
            />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <Image
              className="mt-1 h-7 w-7"
              src="/images/LinkedInNew.png"
              alt="LinkedIn"
              width={7}
              height={0}
            />
          </a>
        </div>
      </div>
      <br></br>
    </div>
  );
}
