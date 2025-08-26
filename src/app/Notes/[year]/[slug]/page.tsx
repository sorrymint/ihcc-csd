import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";

import { notFound } from "next/navigation";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const contentDir = path.join(process.cwd(), "src/content");

function getYearFolders() {
  return fs
    .readdirSync(contentDir)
    .filter((file) => fs.statSync(path.join(contentDir, file)).isDirectory());
}

function getSlugsForYear(year: string) {
  const yearDir = path.join(contentDir, year);
  if (!fs.existsSync(yearDir)) return [];
  return fs
    .readdirSync(yearDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => path.basename(file, ".md"));
}

export async function generateStaticParams() {
  const years = getYearFolders();
  const params: { year: string; slug: string }[] = [];

  years.forEach((year) => {
    const slugs = getSlugsForYear(year);
    slugs.forEach((slug) => params.push({ year, slug }));
  });

  return params;
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ year: string; slug: string }>;
}) {
  const { year, slug } = await params;

  const years = getYearFolders();
  if (!years.includes(year)) notFound();

  const validSlugs = getSlugsForYear(year);
  if (!validSlugs.includes(slug)) notFound();

  const filePath = path.join(contentDir, year, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

    function addSpacesToCamelCase(camelCaseString: string) {
    // The 'g' flag ensures all occurrences are replaced.
    // The '$1 $2' in the replacement string inserts a space between the captured groups.
    return (
      camelCaseString
        // Add space before capital letters (but not at start)
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        // Add space before numbers (but not at start)
        .replace(/([a-zA-Z])(\d+)/g, "$1 $2")
        // Add space between numbers followed by letters
        .replace(/(\d+)([a-zA-Z])/g, "$1 $2")
    );
  }

  const { content, data } = matter(fileContent);
  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();

  return (
    <article className="flex flex-col items-center mx-auto">
        <p className="text-lg font-medium mt-24 !text-(--text-base)/75">
          {addSpacesToCamelCase(data.title ?? slug)} — Club Leaders, Instructors
        </p>
        <div
          className="
    max-w-screen mb-20
    [&_h1]:!mb-8 [&_h1]:text-center  [&_h1]:!text-5xl

    [&_h2]:!font-(family-name:--font-ff) !text-(--text-base)/95 [&_h2]:!text-4xl  [&_h2]:!my-5 [&_h2]:!mt-20

    [&_h3]:text-(--purple) [&_h3]:!mb-2 [&_h3]:!mt-6

    [&_h4]:text-xl

    [&_p]:text-xl [&_p]:font-normal [&_p]:!font-(family-name:--font-ff) [&_p]:text-(--text-base)/85 

    [&_ul]:mt-2 [&_ul]:mb-4

    [&_ol]:

    [&_li]:list-disc [&_li]:mx-5

    [&_a]:text-yellow-500 [&_a]:underline [&_a]:italic [&_a:hover]:text-yellow-600


    "
        >
          <div
            className="flex flex-col items-center[&>ol]:list-decimal [&>ol]:pl-6 px-8 md:px-16 lg:px-20"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
    </article>
  );
}
