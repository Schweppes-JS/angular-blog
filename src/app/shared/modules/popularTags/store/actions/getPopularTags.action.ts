import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "src/app/shared/modules/popularTags/store/actionTypes";
import { PopularTagType } from "src/app/shared/types/popularTag.type";

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TASGS);

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TASGS_SUCCESS,
  props<{popularTags: PopularTagType[]}>()
);

export const getPopularTagsFailureAction = createAction(ActionTypes.GET_POPULAR_TASGS_FAILURE);