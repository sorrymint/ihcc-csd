import Image from "next/image";

export default function Alumni() {
  const group1 = ["Josef Bausch", "Alex Cassady", "Landon Riddick"];
  const group2 = ["Lucas Borton", "Ashley Abongwa", "Caden Epp"];

  const leaderShip = ["President", "Vice-President", "Secretary"];

  return (
    <div className="flex flex-col justify-center text-center">
      <div className="mt-42">
        <h1 className="mb-[55px] text-[#701730] !text-4xl md:!text-6xl">
          LEADERSHIP
        </h1>
        <h2 className="mb-[15px]">2024 - 2025</h2>
      </div>

      {group1.map((name, index) => (
        <div id="24-25" key={name} className="flex flex-col items-center">
          <h1 className="text-[#701730] !mt-[35px] mb-[30px] !text-3xl md:!text-6xl">
            {leaderShip[index]}
          </h1>
          <Image
            src={"/alumni/" + name.replace(/\s+/g, "") + ".png"}
            alt="Leadership Image"
            className="w-[350px] h-[350px] rounded-full border-4"
            width={100}
            height={100}
          />
          <h2 className="text-black font-matrix text-4xl !mt-[30px] mb-[65px]">
            {name}
          </h2>
          <hr className="w-[325px] md:w-[450px] mb-[55px] border-2 rounded-full border-yellow-500" />
        </div>
      ))}

      <h2 className="font-matrix text-3xl md:text-5xl mb-[15px]">
        2025 - 2026
      </h2>

      {group2.map((name, index) => (
        <div id="24-25" key={name} className="flex flex-col items-center">
          <h1 className="text-[#701730] font-matrix !mt-[25px] mb-[30px] !text-3xl md:!text-6xl">
            {leaderShip[index]}
          </h1>
          <Image
            src={"/alumni/" + name.replace(/\s+/g, "") + ".png"}
            alt="Leadership Image"
            className="w-[350px] h-[350px] rounded-full border-4"
            width={100}
            height={100}
          />
          <h2 className="text-black font-matrix !mt-[30px] mb-[65px] !text-4xl md:!text-6xl]">
            {name}
          </h2>
          <hr className="w-[325px] md:w-[450px] mb-[55px] border-2 rounded-full border-yellow-500" />
        </div>
      ))}
    </div>
  );
}
