import Image from "next/image";
import Link from "next/link";

export default function Podcast() {
  return (
    <div className="relative text-black">
      {/* Hero Section */}
      <div
        className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-4 text-center"
        style={{
          background:
            "linear-gradient(108deg, rgba(128, 23, 48, 1) 0%, rgba(245, 241, 241, 1) 50%, rgba(255, 164, 0, 1) 100%)",
        }}
      >
        <Image
          src={"/Images/CSDPODCASTCOVERART.png"}
          alt="Podcast Logo"
          width={500}
          height={500}
          className="w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
        />
        <h2 className="mt-5 text-lg sm:text-xl md:text-2xl font-medium">
          Scroll Down To See Available Platforms
        </h2>
      </div>

      {/* Spotify */}
      <div
        className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-4"
        style={{
          background: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
        }}
      >
        <div className="w-full max-w-xl">
          <iframe
            data-testid="embed-iframe"
            src="https://open.spotify.com/embed/show/1YCxDWLjM9lxR03E1nLYRs?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: "12px" }}
          />
        </div>
      </div>

      {/* Apple Podcasts */}
      <div
        className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-4"
        style={{
          background: "linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)",
        }}
      >
        <iframe
          title="Apple Podcasts Player"
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          height="450"
          className="w-full max-w-xl rounded-lg"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.podcasts.apple.com/us/podcast/lets-tech-about-it-ihcc-csd-podcast/id1838353457"
        />
      </div>

      {/* Amazon Music */}
      <div
        className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-4 text-black"
        style={{
          background: "linear-gradient(to top, #88d3ce 0%, #6e45e2 100%)",
        }}
      >
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-5 flex flex-col items-center space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-[#232f3e] text-center">
            🎧 Listen on Amazon Music
          </h3>
          <p className="text-center text-sm font-medium text-gray-700">
            Let&apos;s Tech About It - IHCC CSD Podcast
          </p>
          <Link
            href="https://music.amazon.com/podcasts/36e51d01-a334-4b1e-9527-1e194489de95/lets-tech-about-it-ihcc-csd-podcast"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <div className="relative w-full h-12 sm:h-16">
              <Image
                src={"/Images/amazonMusicLogo.png"}
                alt="Amazon Music Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Link>
          <Link
            href="https://music.amazon.com/podcasts/36e51d01-a334-4b1e-9527-1e194489de95/lets-tech-about-it-ihcc-csd-podcast"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ff9900] text-[#111] font-semibold text-sm px-4 py-2 rounded hover:bg-[#e88c00] transition w-full text-center"
          >
            🎧 Listen Now
          </Link>
        </div>
      </div>
    </div>
  );
}
