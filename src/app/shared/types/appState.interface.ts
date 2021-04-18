import { ArticleStateInterface } from "src/app/article/types/articleState.inteface";
import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import { CreateArticleStateInterface } from "src/app/createArticle/store/types/createArticleState.interface";
import { FeedStateInterface } from "src/app/shared/modules/feed/types/feedState.inteface";
import { PopularTagsStateInteface } from "src/app/shared/modules/popularTags/types/popularTagsState.inteface";

export interface AppStateInterface {
  auth?: AuthStateInterface;
  feed?: FeedStateInterface;
  popularTags?: PopularTagsStateInteface;
  article?: ArticleStateInterface;
  createArticle?: CreateArticleStateInterface; 
}