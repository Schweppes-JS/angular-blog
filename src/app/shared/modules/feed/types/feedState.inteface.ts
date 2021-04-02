import { GetFeedResponseInterface } from "src/app/shared/modules/feed/types/GetFeedResponse.interfece";

export interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetFeedResponseInterface | null;
}