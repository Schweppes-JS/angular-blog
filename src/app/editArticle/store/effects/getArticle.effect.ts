import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { tap } from 'rxjs/operators';
import { catchError, map, switchMap } from "rxjs/operators";
import { EditArticleService } from "src/app/editArticle/services/editArticle.service";
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from "src/app/editArticle/store/actions/createArticle.action";
import { ArticleInterface } from "src/app/shared/types/article.interface";

@Injectable()
export class UpdateArticleEffect {

  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router
  ) { }

  updateArticle$ = createEffect(() => this.actions$.pipe(
    ofType(updateArticleAction),
    switchMap(({ articleInput, slug }) => {
      return this.editArticleService.updateArticle(slug, articleInput).pipe(
        map((article: ArticleInterface) => {
          return updateArticleSuccessAction({ article });
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(updateArticleFailureAction({ errors: errorResponse.error.errors }));
        })
      );
    })
  ))

  redirectAfterUpdate$ = createEffect(() => this.actions$.pipe(
    ofType(updateArticleSuccessAction),
    tap(({article}) => {
      this.router.navigate(['/articles', article.slug]);
    })
  ), { dispatch: false })
}