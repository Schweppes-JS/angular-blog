import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { GetArticleEffect } from "src/app/article/store/effects/getArticle.effect";
import { ErrorMessageModule } from "src/app/shared/modules/errorMessage/errorMessage.module";
import { reducers } from "src/app/shared/modules/feed/store/reducers";
import { LoadingModule } from "src/app/shared/modules/loading/loading.module";
import { ArticleService as SharedArticleService } from "src/app/shared/services/article.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers)
  ],
  declarations: [],
  exports: [],
  providers: [SharedArticleService]
})
export class ArticleModule {

}