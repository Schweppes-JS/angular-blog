import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import { FeedStateInterface } from "src/app/shared/modules/feed/types/feedState.inteface";

export interface AppStateInterface {
  auth?: AuthStateInterface;
  feed?: FeedStateInterface;
}