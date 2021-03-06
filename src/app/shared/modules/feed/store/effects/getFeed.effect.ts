import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { FeedService } from "src/app/shared/modules/feed/services/feed.service";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "src/app/shared/modules/feed/store/actions/getFeed.action";
import { GetFeedResponseInterface } from "src/app/shared/modules/feed/types/getFeedResponse.interfece";

@Injectable()
export class GetFeedEffect {

  constructor(
    private actions$: Actions,
    private feedService: FeedService
  ) { }

  getFeed$ = createEffect(() => this.actions$.pipe(
    ofType(getFeedAction),
    switchMap(({url}) => {
      return this.feedService.getFeed(url).pipe(
        map((feed: GetFeedResponseInterface) => {
          return getFeedSuccessAction({ feed });
        }),
        catchError(() => {
          return of(getFeedFailureAction());
        })
      );
    })
  ));
}