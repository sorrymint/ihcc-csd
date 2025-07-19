import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { notFound } from 'next/navigation'

// ADD SLUGS HERE (new .md files)
const validSlugs = ['welcome', 'about']

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }))
}

export const dynamicParams = false

export default async function NotesPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  if (!validSlugs.includes(slug)) notFound()

  const filePath = path.join(process.cwd(), 'src/content', `${slug}.md`)
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