import { PopularTagType } from "src/app/shared/types/popularTag.type";

export interface PopularTagsStateInteface {
  data: PopularTagType[] | null;
  error: string | null;
  isLoading: boolean;
}