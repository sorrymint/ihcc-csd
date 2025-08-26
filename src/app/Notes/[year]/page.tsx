import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MoveRight } from 'lucide-react'

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

  function addSpacesToCamelCase(camelCaseString : string) {
  
  // The 'g' flag ensures all occurrences are replaced.
  // The '$1 $2' in the replacement string inserts a space between the captured groups.
  return camelCaseString
  // Add space before capital letters (but not at start)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // Add space before numbers (but not at start)
    .replace(/([a-zA-Z])(\d+)/g, '$1 $2')
    // Add space between numbers followed by letters
    .replace(/(\d+)([a-zA-Z])/g, '$1 $2');
}

  console.log("Camel Casing Test\n")
slugs.map(s => {
  console.log(addSpacesToCamelCase(s))
});

  return (
    <div className="prose mx-auto p-6 flex justify-center items-center flex-col">
      <h3 className='mb-8 text-center text-nowrap !mt-[15%]  md:!mt-[10%] !text-5xl'>{year} Notes</h3>
      <ul className='mt-[3%] mb-[5%] w-full flex flex-wrap gap-4 justify-center'>
        {slugs.map((slug, index) => (
          <li
            className=" m-1 bg-var(--gray-750) flex justify-center w-[30%]"
            key={index}
          >
            <div 
            className="bg-(--bg-base) max-w-96 w-92 flex items-center justify-between py-12 px-16 rounded-xl  shadow-lg overflow-hidden text-ellipsis"
            key={slug}>
              <Link 
              href={`/Notes/${year}/${slug}`}
              className='!text-(--text-base) text-4xl font-bold line-clamp-1 text-center py-1 px-1'>{addSpacesToCamelCase(slug)}
              </Link>

              <Link 
              href={`/Notes/${year}/${slug}`}
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
  )
}
          // <div key={index} className='flex flex-col items-center'>
          //   <li className='text-yellow-500 underline italic text-2xl m-3 text-center hover:text-yellow-600' key={slug}>
          //     <Link  href={`/Notes/${year}/${slug}`}>{slug}</Link>
          //   </li>
          // </div>
