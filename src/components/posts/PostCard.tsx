import Link from "next/link";
import Image from "next/image";
import { IPost } from "../../commons/types/types";

export default function PostCard({ post }: { post: IPost }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article>
        <Image
          className="border rounded-lg"
          src={`/${post.frontMatter.image}`}
          width={1200}
          height={700}
          alt={post.frontMatter.title}
        />
        <div className="px-2 py-4">
          <h2 className="font-bold text-lg">{post.frontMatter.title}</h2>
          <time>{post.frontMatter.date}</time>
        </div>
      </article>
    </Link>
  );
}
