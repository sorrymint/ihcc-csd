import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'

import { notFound } from 'next/navigation'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

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
  const years = getYearFolders()
  const params: { year: string; slug: string }[] = []

  years.forEach((year) => {
    const slugs = getSlugsForYear(year)
    slugs.forEach((slug) => params.push({ year, slug }))
  })

  return params
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ year: string; slug: string }>
}) {
  const { year, slug } = await params

  const years = getYearFolders()
  if (!years.includes(year)) notFound()

  const validSlugs = getSlugsForYear(year)
  if (!validSlugs.includes(slug)) notFound()

  const filePath = path.join(contentDir, year, `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')

  const { content, data } = matter(fileContent)
  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content)

  const contentHtml = processedContent.toString()

  return (
  <article className="flex flex-col items-center mx-auto p-4 ">
    <h1 className="text-4xl font-bold mb-4 underline">{data.title ?? slug}</h1>
    <div className="
    max-w-screen-lg text-center
    [&_p]:m-1 [&_p]:mb-4 md:[&_p]:ml-20 md:[&_p]:mr-20
    [&_h2]:underline  [&_h2]:m-5
    [&_h3]:text-[#701730] [&_h3]:underline
    [&_h4]:text-xl
    [&_ul]:bg-gray-200 [&_ul]:shadow-lg [&_ul]:border  [&_ul]:rounded-md [&_ul]:p-2 [&_ul]:max-w-full
    [&_ol]:bg-gray-200 [&_ol]:shadow-lg [&_ol]:border  [&_ol]:rounded-md [&_ol]:p-2  [&_ol]:m-4
    [&_li]:bg-white [&_li]:p-2 [&_li]:text-center
    [&_a]:text-yellow-500 [&_a]:underline [&_a]:italic
    ">
      <div className = "flex flex-col items-center p-6 mr-20 ml-20 [&>ol]:list-decimal [&>ol]:pl-6" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  </article>
  )
}




