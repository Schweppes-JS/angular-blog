import { ProfileInterface } from "src/app/shared/types/profile.interface";

export interface ArticleInterface {
  // author: {username: "auba", bio: null, image: "https://static.productionready.io/images/smiley-cyrus.jpg",…}
  author: ProfileInterface;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt: string
}