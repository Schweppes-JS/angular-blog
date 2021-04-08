import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, filter, map, switchMap } from "rxjs/operators";
import { PopularTagsService } from "src/app/shared/modules/popularTags/services/popularTags.service";
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from "src/app/shared/modules/popularTags/store/actions/getPopularTags.action";
import { PopularTagType } from "src/app/shared/types/popularTag.type";

@Injectable()
export class GetPopularTagsEffect {

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) { }
 
  getPopularTags$ = createEffect(() => this.actions$.pipe(
    ofType(getPopularTagsAction),
    switchMap(() => {
      return this.popularTagsService.getPopularTags().pipe(
        // filter((tag: any) => {
        //   console.log(tag);
        //   return !!tag
          
        // }),
        map((popularTags: PopularTagType[]) => {
          return getPopularTagsSuccessAction({ popularTags });
        }),
        catchError(() => {
          return of(getPopularTagsFailureAction());
        })
      );
    })
  ));
}