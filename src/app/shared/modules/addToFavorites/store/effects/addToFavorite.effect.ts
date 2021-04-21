import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { AddToFavoritesService } from "src/app/shared/modules/addToFavorites/services/addToFavorites.service";
import { addToFavoritesActions, addToFavoritesFailureAction, addToFavoritesSuccessAction } from "src/app/shared/modules/addToFavorites/store/actions/addToFavorites.action";
import { ArticleInterface } from "src/app/shared/types/article.interface";

@Injectable()
export class AddToFavoritesEffect {

  constructor(
    private actions$: Actions,
    private addToFavoritesService: AddToFavoritesService
  ) { }

  addToFavorites$ = createEffect(() => this.actions$.pipe(
    ofType(addToFavoritesActions),
    switchMap(({isFavorited, slug}) => {
      const article$ = isFavorited ?
        this.addToFavoritesService.removeFromFavorites(slug) :
        this.addToFavoritesService.addToFavorites(slug)
      return article$.pipe(
        map((article: ArticleInterface) => {
          return addToFavoritesSuccessAction({ article });
        }),
        catchError(() => {
          return of(addToFavoritesFailureAction());
        })
      );
    })
  ));
}