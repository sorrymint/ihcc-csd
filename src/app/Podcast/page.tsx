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
        <h2 className="text-4xl font-bold">
          Let&apos;s Tech About It | CSD Podcast
        </h2>
        <p className="mt-2">Scroll Down to see available platforms</p>
      </div>

      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800"
        style={{
          background: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
        }}
      >
        <h2 className="text-4xl font-bold">Spotify</h2>
      </div>

      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800"
        style={{
          background: "linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)",
        }}
      >
        <h2 className="text-4xl font-bold">Apple Podcast</h2>
      </div>

      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black"
        style={{
          background: "linear-gradient(to top, #88d3ce 0%, #6e45e2 100%)",
        }}
      >
        <h2 className="text-4xl font-bold">Amazon Podcast</h2>
      </div>
    </div>
  );
}
