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
    <Suspense fallback={<>Loading...</>}>
        <div className="relative py-6 lg:gap-10 lg:py-10 prose lg:prose-xl">
          <div className="space-y-4">
            <h1 className="font-heading inline-block text-4xl lg:text-5xl">{frontmatter.title}</h1>
            <h2>{frontmatter.shortTitle}</h2>
            <p className="text-xl text-muted-foreground">{frontmatter.description}</p>
          </div>
          <hr className="my-4"/>
          <div className="mdx">
            <MDXRemote source={content} components={components}/>
          </div>
        </div>
        </Suspense>
  );
}