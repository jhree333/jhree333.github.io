export interface IFrontMatter {
  title: string;
  date: string;
  description: string;
  image: string;
}
export interface IPost {
  frontMatter: IFrontMatter;
  slug?: string;
}
