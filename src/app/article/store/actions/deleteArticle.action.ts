import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { ArticleInterface } from "src/app/shared/types/article.interface";

export const deleteArticleAction = createAction(
  ActionTypes.DELETE_ARTICLE, 
  props<{slug: string | null}>()
)

export const deleteArticleSuccessAction = createAction(
  ActionTypes.DELETE_ARTICLE_SUCCESS
)

export const deleteArticleFailureAction = createAction(
  ActionTypes.DELETE_ARTICLE_FAILURE
)