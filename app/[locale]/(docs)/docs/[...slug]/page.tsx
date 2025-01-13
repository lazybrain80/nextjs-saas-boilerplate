import { MdxDoc } from "@/design/features/docs";
import { MdxDocContent } from "@/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";

export default async function DocumentsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  let urlPath = path.join(`api/docs`, ...slug);
  console.log('urlPath', urlPath);
  const mdx : MdxDocContent = await fetch(`http://localhost:3000/${urlPath}`).then((res) => res.json());

  return (
    <MdxDoc mdxContent={mdx.content} />
  );
}
