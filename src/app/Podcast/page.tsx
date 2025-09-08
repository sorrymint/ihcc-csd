import Image from 'next/image';
import Link from 'next/link';

export default function Podcast() {
  return (
    <div className="relative text-black">
      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center"
        style={{
          background:
            "linear-gradient(108deg, rgba(128, 23, 48, 1) 0%, rgba(245, 241, 241, 1) 50%, rgba(255, 164, 0, 1) 100%)",
        }}
      >
        <Image src={'/Images/CSDPODCASTCOVERART.png'} alt={'Podcast Logo'} width={500} height={500}></Image>
        <h2 className="!mt-5 !text-[25px]">Scroll Down To See Available Platforms</h2>
      </div>

      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800"
        style={{
          background: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
        }}
      >
        <div className="w-3xl">
          <iframe
            data-testid="embed-iframe"
            src="https://open.spotify.com/embed/show/1YCxDWLjM9lxR03E1nLYRs?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: '12px' }}
          />
        </div>    
      </div>

      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800"
        style={{
          background: "linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)",
        }}
      >
        <iframe
          title="Apple Podcasts Player"
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          height="450"
          style={{
            width: "100%",
            maxWidth: "660px",
            overflow: "hidden",
            borderRadius: "10px",
          }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.podcasts.apple.com/us/podcast/lets-tech-about-it-ihcc-csd-podcast/id1838353457"
        />
      </div>

      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black"
        style={{
          background: "linear-gradient(to top, #88d3ce 0%, #6e45e2 100%)",
        }}
      >
        <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md p-5 flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold text-[#232f3e] text-center">🎧 Listen on Amazon Music</h3>
          <p className="text-center text-sm font-medium text-gray-700">
            Let&apos;s Tech About It - IHCC CSD Podcast
          </p>
          <Link
            href="https://music.amazon.com/podcasts/36e51d01-a334-4b1e-9527-1e194489de95/lets-tech-about-it-ihcc-csd-podcast"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <div className="relative w-full h-16">
              <Image
                src="data:image/jpeg;base64,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"
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
            className="inline-block bg-[#ff9900] text-[#111] font-semibold text-sm px-5 py-2 rounded hover:bg-[#e88c00] transition"
          >
            🎧 Listen Now
          </Link>
        </div>
      </div>
    </div>
  );
}
