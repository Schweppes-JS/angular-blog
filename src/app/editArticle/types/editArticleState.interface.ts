import { ArticleInterface } from "src/app/shared/types/article.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";

export interface EditArticleStateInterface {
  isLoading: boolean;
  article: ArticleInterface | null;
  validationErrors: BackendErrorsInterface | null;
  isSubmitting: boolean;
}