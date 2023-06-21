import { IFrontMatter } from "@/commons/types/types";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

marked.setOptions({
  mangle: false,
  headerIds: false,
});

interface IParams {
  slug: string;
}

export async function getStaticProps({ params }: { params: IParams }) {
  const file = fs.readFileSync(`posts/${params.slug}.md`, "utf-8");
  const { data, content } = matter(file);
  return { props: { frontMatter: data, content } };
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default function Post({
  frontMatter,
  content,
}: {
  frontMatter: IFrontMatter;
  content: string;
}) {
  return (
    <div>
      <h2>{frontMatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
  );
}
