import { Suspense } from "react";
import { MDXRemote } from 'next-mdx-remote/rsc'
import matter from 'gray-matter';
import { MdxDoc } from "@/types";
import path from 'path';

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
          <MDXRemote source={content} />
        </div>
  );
}
