import { ArticleStateInterface } from "src/app/article/types/articleState.inteface";
import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import { CreateArticleStateInterface } from "src/app/createArticle/types/createArticleState.interface";
import { EditArticleStateInterface } from "src/app/editArticle/types/editArticleState.interface";
import { SettingsStateInterface } from "src/app/settings/types/settingsState.interface";
import { FeedStateInterface } from "src/app/shared/modules/feed/types/feedState.inteface";
import { PopularTagsStateInteface } from "src/app/shared/modules/popularTags/types/popularTagsState.inteface";
import { UserProfileStateInterface } from "src/app/userProfile/types/userProfileState.interface";

export interface AppStateInterface {
  auth?: AuthStateInterface;
  feed?: FeedStateInterface;
  popularTags?: PopularTagsStateInteface;
  article?: ArticleStateInterface;
  createArticle?: CreateArticleStateInterface; 
  editArticle?: EditArticleStateInterface; 
  settings?: SettingsStateInterface; 
  userProfile?: UserProfileStateInterface;
}