import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "src/app/app-routing.module";
import { AppComponent } from "src/app/app.component";
import { AuthModule } from "src/app/auth/auth.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { TopBarModule } from "src/app/shared/modules/topBar/topBar.module";
import { PersistanceService } from "src/app/shared/services/persistence.service";
import { AuthInterceprot } from "src/app/shared/services/authInterceprot.service";
import { GlobalFeedModule } from "src/app/globalFeed/globalFeed.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    TopBarModule,
    GlobalFeedModule
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceprot,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
