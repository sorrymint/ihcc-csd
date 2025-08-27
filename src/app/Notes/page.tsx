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
    <div className="mx-auto p-6 flex justify-center items-center flex-col">
      <h1 className="text-nowrap !mt-[15%]  md:!mt-[10%] !text-5xl">Notes by Year</h1>
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
              className="bg-(--yellow) px-5 py-5 rounded-full shadow-lg shadow-neutral-400">
                <MoveRight 
                color="white"
                strokeWidth={3}/>
                
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// <li className='text-yellow-500 underline italic text-2xl m-4 text-center hover:text-yellow-600 bg-var(--gray-750)' key={year}>
//   <Link href={`/Notes/${year}`}>{year}</Link>
// </li>
