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
      <h1>Notes by Year</h1>
      <ul>
        {years.map((year) => (
          <li key={year}>
            <Link href={`/Notes/${year}`}>{year}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

