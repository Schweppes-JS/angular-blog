import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from "src/app/auth/components/login/login.component";

import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { AuthService } from "src/app/auth/services/auth.service";
import { reducers } from "src/app/auth/store/reducers";
import { GetCurrentUserEffect } from "src/app/auth/store/effects/getCurrentUser.effect";
import { LoginEffect } from "src/app/auth/store/effects/login.effect";
import { RegisterEffect } from "src/app/auth/store/effects/register.effect";
import { UpdateCurrentUserEffect } from "src/app/auth/store/effects/updateCurrentUser.effect";
import { BackendErrorMessagesModule } from "src/app/shared/modules/backendErrorMessages/backendErrorMessages.module";
import { PersistanceService } from "src/app/shared/services/persistence.service";
import { LogoutEffect } from "./store/effects/logout.effect";

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      UpdateCurrentUserEffect,
      LogoutEffect
    ]),
    BackendErrorMessagesModule
  ],
  providers: [AuthService, PersistanceService],
  declarations: [RegisterComponent, LoginComponent]
})

export class AuthModule {

}