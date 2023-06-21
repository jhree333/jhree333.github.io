export interface IPost {
  frontMatter: {
    title: string;
    date: string;
    description: string;
    image: string;
  };
  slug: string;
}
