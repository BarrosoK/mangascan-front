export interface Manga {
  title: string;
  img: string;
  alternative: string;
  author: string;
  status: string;
  genres: Array<string>;
  updated: string;
  view: string;
  rating: number;
  description: string;
  chapters: Array<object>;
}
