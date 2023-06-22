export interface IFrontMatter {
  title: string;
  date: string;
  description: string;
  image: string;
  categories: string[];
}
export interface IPost {
  frontMatter: IFrontMatter;
  slug?: string;
}

export interface IParams {
  slug: string;
  category: string;
}
