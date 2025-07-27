import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
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
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return (
    <article className="prose mx-auto p-4">
      <h1>{data.title ?? slug}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  )
}




