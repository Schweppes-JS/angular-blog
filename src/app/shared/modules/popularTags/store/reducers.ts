import { Action, createReducer, on } from "@ngrx/store";
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from "src/app/shared/modules/popularTags/store/actions/getPopularTags.action";
import { PopularTagsStateInteface } from "src/app/shared/modules/popularTags/types/popularTagsState.inteface";

const initialState: PopularTagsStateInteface = {
  data: null,
  isLoading: false,
  error: null
}

const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInteface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsStateInteface => ({
      ...state,
      isLoading: false,
      data: action.popularTags
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state): PopularTagsStateInteface => ({
      ...state,
      isLoading: false
    })
  ),
);

export function reducers(state: PopularTagsStateInteface, action: Action) {
  return popularTagsReducer(state, action);
}