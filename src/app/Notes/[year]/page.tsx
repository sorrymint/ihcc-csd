import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const contentDir = path.join(process.cwd(), 'src/content')

function getYearFolders() {
  return fs.readdirSync(contentDir).filter((file) =>
    fs.statSync(path.join(contentDir, file)).isDirectory()
  )
}

function getSlugsForYear(year: string) {
  const yearDir = path.join(contentDir, year)
  if (!fs.existsSync(yearDir)) return []
  return fs
    .readdirSync(yearDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => path.basename(file, '.md'))
}

export async function generateStaticParams() {
  return getYearFolders().map((year) => ({ year }))
}

export default async function YearPage({
  params,
}: {
  params: Promise<{ year: string }>
}) {
  const { year } = await params

  const years = getYearFolders()
  if (!years.includes(year)) notFound()

  const slugs = getSlugsForYear(year)

  return (
    <div className="prose mx-auto p-6 flex flex-col items-center">
      <h1 className='underline mb-8 text-center'>{year} Notes</h1>
      <ul className='bg-gray-100 p-15 m-10 border'>
        {slugs.map((slug) => (
          <div className='flex flex-col items-center'>
            <li className='text-yellow-500 underline italic text-2xl m-3 text-center hover:text-yellow-600' key={slug}>
              <Link  href={`/Notes/${year}/${slug}`}>{slug}</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}
