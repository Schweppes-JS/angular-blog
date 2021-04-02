import { Action, createReducer, on } from "@ngrx/store";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "src/app/shared/modules/feed/store/actions/getFeed.action";
import { FeedStateinterface } from "src/app/shared/modules/feed/types/feedState.inteface";

const initialState: FeedStateinterface = {
  isLoading: false,
  error: null,
  data: null
}

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateinterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateinterface => ({
      ...state,
      isLoading: false,
      data: action.feed
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateinterface => ({
      ...state,
      isLoading: false
    })
  )
);

export function reducers(state: FeedStateinterface, action: Action) {
  return feedReducer(state, action);
}