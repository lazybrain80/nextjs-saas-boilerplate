import { Suspense } from "react";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MdxCard } from "./MdxCard"

interface frontMatter {
  title: string;
  shortTitle: string;
  description: string;
}

export interface MdxDocProps {
  mdxContent: string;
}

const addtionalComponents = {
  blockquote: (props: any) => <blockquote className="border-l-4 pl-4 italic my-4" {...props} />,
  code: (props: any) => <code className='rounded p-1' {...props} />,
  Card: MdxCard
};

export default function MdxDoc({mdxContent}: MdxDocProps) {
  const { content, data } = matter(mdxContent);
  const frontmatter = data as frontMatter;
  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="relative py-6 lg:gap-10 lg:py-10">
        <div className="space-y-4">
          <h1 className="font-heading inline-block text-4xl lg:text-5xl">{frontmatter.title}</h1>
          <h2>{frontmatter.shortTitle}</h2>
          <p className="text-xl text-muted-foreground">{frontmatter.description}</p>
        </div>
        <hr className="my-4"/>
        <div className="prose lg:prose-xl">
          <MDXRemote source={content} components={addtionalComponents}/>
        </div>
      </div>
    </Suspense>
  );
}