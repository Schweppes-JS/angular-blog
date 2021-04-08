import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PopularTagsStateInteface } from "src/app/shared/modules/popularTags/types/popularTagsState.inteface";
import { AppStateInterface } from "src/app/shared/types/appState.interface";

export const popularTagsFeatureSelector = createFeatureSelector<AppStateInterface, PopularTagsStateInteface>('popularTags');

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagState: PopularTagsStateInteface) => popularTagState.data
);

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagState: PopularTagsStateInteface) => popularTagState.isLoading
);

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagState: PopularTagsStateInteface) => popularTagState.error
);