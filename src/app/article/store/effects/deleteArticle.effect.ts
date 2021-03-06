import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { ArticleService } from "src/app/article/services/article.service";
import { deleteArticleAction, deleteArticleFailureAction, deleteArticleSuccessAction } from "src/app/article/store/actions/deleteArticle.action";

@Injectable()
export class DeleteArticleEffect {

  constructor(
    private router: Router,
    private actions$: Actions,
    private articleService: ArticleService
  ) { }

  deleteArticle$ = createEffect(() => this.actions$.pipe(
    ofType(deleteArticleAction),
    switchMap(({slug}) => {
      return this.articleService.deleteArticle(slug).pipe(
        map(() => {
          return deleteArticleSuccessAction();
        }),
        catchError(() => {
          return of(deleteArticleFailureAction());
        })
      );
    })
  ));

  redirectAfterDelete$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteArticleSuccessAction),
      tap(() => {
        this.router.navigate(["/"])
      })
    ),
    {dispatch: false}
  )
}