import { IFrontMatter } from "@/commons/types/types";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import { NextSeo } from "next-seo";

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
  return { props: { frontMatter: data, content, slug: params.slug } };
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
  slug,
}: {
  frontMatter: IFrontMatter;
  content: string;
  slug: string;
}) {
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          type: "website",
          url: `http:localhost:3000/posts/${slug}`,
          title: frontMatter.title,
          description: frontMatter.description,
        }}
      />
      <div className="prose prose-lg max-w-none">
        <h2 className="mt-12">{frontMatter.title}</h2>
        <time>{frontMatter.date}</time>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
    </>
  );
}
