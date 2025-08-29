import fs from "fs";
import path from "path";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const contentDir = path.join(process.cwd(), "src/content");

function getYearFolders() {
  return fs
    .readdirSync(contentDir)
    .filter((file) => fs.statSync(path.join(contentDir, file)).isDirectory());
}

export default function NotesIndexPage() {
  const years = getYearFolders();

  return (
    <main>
      <div className="mx-auto p-6 flex justify-center items-center flex-col h-screen">
        <h1 className="text-nowrap !mt-[15%]  md:!mt-[10%] !text-5xl">
          Notes by Year
        </h1>
        <ul className=" mt-[5%] mb-[5%] w-full ">
          {years.map((year) => (
            <li
              className="!text-(--text-base) text-4xl m-4 text-center bg-var(--gray-750) flex justify-center"
              key={year}
            >
              <div className="bg-(--bg-base) w-[90%] flex items-center justify-between py-12 px-16 rounded-xl font-extrabold shadow-lg">
                <Link href={`/Notes/${year}`}>{year}</Link>

                <Link
                  href={`/Notes/${year}`}
                  className="bg-(--yellow) px-5 py-5 rounded-full shadow-lg cursor-pointer tracking-[1px] uppercase transition-all duration-150 ease-linear hover:tracking-[2px] hover:bg-(--yellow2) hover:shadow-[0_5px_16px_0px_var(--yellow2)] active:tracking-[3px] active:bg-(--yellow2) active:shadow-[0_0px_0px_0px_var(--yellow2)] active:translate-y-[5px] active:duration-100"
                >
                  <MoveRight color="white" strokeWidth={3} />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

// <li className='text-yellow-500 underline italic text-2xl m-4 text-center hover:text-yellow-600 bg-var(--gray-750)' key={year}>
//   <Link href={`/Notes/${year}`}>{year}</Link>
// </li>
