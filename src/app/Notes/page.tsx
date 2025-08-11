import fs from 'fs'
import path from 'path'
import Link from 'next/link'

const contentDir = path.join(process.cwd(), 'src/content')

function getYearFolders() {
  return fs.readdirSync(contentDir).filter((file) =>
    fs.statSync(path.join(contentDir, file)).isDirectory()
  )
}

export default function NotesIndexPage() {
  const years = getYearFolders()

  return (
    <div className="prose mx-auto p-6 flex justify-center items-center flex-col">
      <h1 className='text-nowrap'>Notes by Year</h1>
      <ul className='bg-gray-100 p-20 m-10 border'>
        {years.map((year) => (
            <li className='text-yellow-500 underline italic text-2xl m-4 text-center hover:text-yellow-600' key={year}>
              <Link href={`/Notes/${year}`}>{year}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

