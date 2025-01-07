import { Suspense } from "react";
import { MdxDoc } from "@/types";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Card } from "@/design/components/ui";

const components = { Card }

interface frontMatter {
  title: string;
  shortTitle: string;
  description: string;
}

export default async function DocumentsPage() {

  const mdx : MdxDoc = await fetch(`http://localhost:3000/api/docs/index`).then((res) => res.json());
  const { content, data } = matter(mdx.content);
  const frontmatter = data as frontMatter;

  return (
        <div className="relative py-6 lg:gap-10 lg:py-10 prose lg:prose-xl">
          <Suspense fallback={<>Loading...</>}>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.shortTitle}</h2>
          <h3>{frontmatter.description}</h3>
            <MDXRemote source={content} components={components}/>
          </Suspense>
        </div>
  );
}