

export default function Alumni() {

    const group1 = ["Josef Bausch", "Alex Cassady", "Landon Riddick"];
    const group2 = ["Lucas Borton", "Ashley Abongwa", "Caden Epp"];

    const leaderShip = ["President", "Vice-President", "Secratary"];



    return (
        <div className="flex flex-col justify-center text-center mt-[35px]">

            <h4 className="font-matrix text-6xl mb-[55px]">LEADERSHIP</h4>

            <h4 className="font-matrix text-5xl mb-[15px]">2024 - 2025</h4>

            {group1.map((name, index) => (
                <div id="24-25" key={name} className="flex flex-col items-center">
                    <h4 className="text-[#701730] font-matrix text-3xl mt-[25px] mb-[30px]">
                        {leaderShip[index]}
                    </h4>
                    <img 
                        src={"alumni/" + name.replace(/\s+/g, '') + ".png"}
                        alt="Leadership Image" 
                        className="w-[350px] h-[350px] rounded-full border-4"
                    />
                    <h4 className="text-[#701730] font-matrix text-4xl mt-[30px] mb-[65px]">
                        {name}
                    </h4>
                    <hr className="w-[450px] mb-[55px] border-2 rounded-full border-yellow-500"/>
                </div>
            ))}
            

            <h4 className="font-matrix text-5xl mb-[15px]">2025 - 2026</h4>

            {group2.map((name, index) => (
                <div id="24-25" key={name} className="flex flex-col items-center">
                    <h4 className="text-[#701730] font-matrix text-3xl mt-[25px] mb-[30px]">
                        {leaderShip[index]}
                    </h4>
                    <img 
                        src={"alumni/" + name.replace(/\s+/g, '') + ".png"}
                        alt="Leadership Image" 
                        className="w-[350px] h-[350px] rounded-full border-4"
                    />
                    <h4 className="text-[#701730] font-matrix text-4xl mt-[30px] mb-[65px]">
                        {name}
                    </h4>
                    <hr className="w-[450px] mb-[55px] border-2 rounded-full border-yellow-500"/>
                </div>
            ))}

        </div>
    )
}