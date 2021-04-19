import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { url } from "node:inspector";
import { tap } from "rxjs/operators";
import { PersistanceService } from "src/app/shared/services/persistence.service";
import { logoutAction } from "../sync.action";

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () => this.actions$.pipe(
      ofType(logoutAction),
      tap(() => {
        this.persistanceService.set("accessToken", "");
        this.router.navigateByUrl("/");
      })
    ),
    {dispatch: false}
  );
  constructor(private actions$: Actions, private persistanceService: PersistanceService, private router: Router) {}
}