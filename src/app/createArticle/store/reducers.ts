import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { createArticleAction, createArticleFailureAction, createArticleSuccessAction } from "src/app/createArticle/store/actions/createArticle.action";
import { CreateArticleStateInterface } from "src/app/createArticle/store/types/createArticleState.interface";

const intialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null
}

const createArticleReducer = createReducer(
  intialState,
  on(
    createArticleAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    createArticleSuccessAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    createArticleFailureAction,
    (state, action): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
)

export const reducers = (state: CreateArticleStateInterface, action: Action) => {
  return createArticleReducer(state, action);
}