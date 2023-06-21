import PostCard from "@/components/posts/PostCard";
import { IPost } from "@/commons/types/types";
import fs from "fs";
import matter from "gray-matter";

export const getStaticProps = () => {
  const files = fs.readdirSync("posts");
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(`posts/${filename}`, "utf-8");
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

export default function Home({ posts }: { posts: IPost[] }) {
  return (
    <section className="my-8">
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
