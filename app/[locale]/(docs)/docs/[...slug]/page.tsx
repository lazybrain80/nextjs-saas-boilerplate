import { Suspense } from "react";
import { MDXRemote } from 'next-mdx-remote/rsc'
import matter from 'gray-matter';
import { MdxDoc } from "@/types";
import path from 'path';
import { Card } from "@/design/components/ui";


const MDXComponents = {
  blockquote: (props: any) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />,
  code: (props: any) => <code className="bg-gray-100 rounded p-1" {...props} />,
  div: (props: any) => <div className="grid grid-cols-2 gap-4" {...props} />, // Apply grid classes to div
  Card: Card
};

export default async function DocumentsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  let urlPath = path.join(`api/docs`, ...slug);
  console.log("urlPath: ", urlPath);
  const mdx : MdxDoc = await fetch(`http://localhost:3000/${urlPath}`).then((res) => res.json());
  const { content, data } = matter(mdx.content);

  return (
        <div className="relative py-6 lg:gap-10 lg:py-10 prose lg:prose-xl">
          <MDXRemote source={content} components={MDXComponents} />
        </div>
  );
}
