// src/app/Notes/page.tsx

import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export default function NotesIndex() {

  const contentDir = path.join(process.cwd(), 'src/content')
  const files = fs.readdirSync(contentDir)

  const slugs = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Notes</h1>
      <ul className="list-disc list-inside space-y-2">
        {slugs.map((slug) => (
          <li key={slug}>
            <Link href={`/Notes/${slug}`} className="text-blue-600 hover:underline">
              {slug}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )

}