import { Action, createReducer, on } from "@ngrx/store";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "src/app/article/store/actions/getArticle.action";
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from "src/app/editArticle/store/actions/createArticle.action";
import { EditArticleStateInterface } from "src/app/editArticle/types/editArticleState.interface";

const intialState: EditArticleStateInterface = {
  isLoading: false,
  article: null,
  isSubmitting: false,
  validationErrors: null
}

const editArticleReducer = createReducer(
  intialState,
  on(
    updateArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    updateArticleSuccessAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    updateArticleFailureAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    getArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
      article: action.article
    })
  ),
  on(
    getArticleFailureAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: false
    })
  )
)

export const reducers = (state: EditArticleStateInterface, action: Action) => {
  return editArticleReducer(state, action);
}