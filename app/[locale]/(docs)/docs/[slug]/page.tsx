import { Suspense } from "react";
import { MDXRemote } from 'next-mdx-remote/rsc'
import matter from 'gray-matter';

interface MdxDoc {
  content: string
}

export default async function DocumentsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  const mdx : MdxDoc = await fetch(`http://localhost:3000/api/docs/index`).then((res) => res.json());
  const { content, data } = matter(mdx.content);

  return (
        <div className="relative py-6 lg:gap-10 lg:py-10">
          <Suspense fallback={<>Loading...</>}>
            <MDXRemote source={content} />
          </Suspense>
        </div>
  );
}
