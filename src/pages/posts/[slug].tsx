import { IFrontMatter } from "@/commons/types/types";
import fs from "fs";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { NextSeo } from "next-seo";
import remarkToc from "remark-toc";
import remarkPrism from "remark-prism";
import { createElement, Fragment, ReactNode } from "react";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import Link from "next/link";

const MyLink = ({ children, href }: { children: ReactNode; href: string }) => {
  if (href === "") href = "/";
  return href.startsWith("/") || href.startsWith("#") ? (
    <Link href={href}>{children}</Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const toReactNode = (content: string) => {
  return (
    unified()
      .use(rehypeParse, {
        fragment: true,
      })
      // @ts-ignore
      .use(rehypeReact, {
        createElement,
        Fragment,
        components: {
          a: MyLink,
        },
      })
      .processSync(content).result
  );
};

interface IParams {
  slug: string;
}

export async function getStaticProps({ params }: { params: IParams }) {
  const file = fs.readFileSync(`posts/${params.slug}.md`, "utf-8");
  const { data, content } = matter(file);

  const result = await unified()
    .use(remarkParse)
    .use(remarkPrism, {
      plugins: ["line-numbers"],
    })
    .use(remarkToc, {
      heading: "목차",
    })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);

  return {
    props: { frontMatter: data, content: result.toString(), slug: params.slug },
  };
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
        {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
        {toReactNode(content)}　
      </div>
    </>
  );
}
