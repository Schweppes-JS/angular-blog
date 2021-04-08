import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import { FeedStateInterface } from "src/app/shared/modules/feed/types/feedState.inteface";
import { PopularTagsStateInteface } from "src/app/shared/modules/popularTags/types/popularTagsState.inteface";

export interface AppStateInterface {
  auth?: AuthStateInterface;
  feed?: FeedStateInterface;
  popularTags?: PopularTagsStateInteface;
}