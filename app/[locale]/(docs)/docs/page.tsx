import { MdxDoc } from "@/design/features/docs";
import { MdxDocContent } from "@/types";

export default async function DocumentsPage({
  params,
}: Readonly<{
  params: { locale: string };
}>) {
  const { locale } = await params;
  const mdx : MdxDocContent = await fetch(
    `http://localhost:3000/api/docs?locale=${locale}`
  ).then((res) => res.json());

  return (
    <MdxDoc mdxContent={mdx.content} />
  );
}