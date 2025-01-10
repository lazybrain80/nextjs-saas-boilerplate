import { MdxDoc } from "@/design/features/docs";
import { MdxDocContent } from "@/types";

export default async function DocumentsPage() {

  const mdx : MdxDocContent = await fetch(`http://localhost:3000/api/docs/index`).then((res) => res.json());

  return (
    <MdxDoc mdxContent={mdx.content} />
  );
}