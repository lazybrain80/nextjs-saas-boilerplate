import { Suspense } from "react";
import { MdxDoc } from "@/types";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function DocumentsPage() {

  const mdx : MdxDoc = await fetch(`http://localhost:3000/api/docs/index`).then((res) => res.json());
  const { content, data } = matter(mdx.content);

  return (
        <div className="relative py-6 lg:gap-10 lg:py-10 prose lg:prose-xl">
          <Suspense fallback={<>Loading...</>}>
            <MDXRemote source={content} />
          </Suspense>
        </div>
  );
}