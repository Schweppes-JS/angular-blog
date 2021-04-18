import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { reducers } from "src/app/editArticle/store/reducers";
import { EditArticleService } from "src/app/editArticle/services/editArticle.service";
import { UpdateArticleEffect } from "src/app/editArticle/store/effects/getArticle.effect";
import { GetArticleEffect } from "src/app/editArticle/store/effects/updateArticle.effect";
import { ArticleFormModule } from "src/app/shared/modules/articleForm/articleForm.module";
import { ArticleService as SharedArticleService } from "src/app/shared/services/article.service";
import { LoadingModule } from "src/app/shared/modules/loading/loading.module";
import { EditArticleComponent } from "src/app/editArticle/components/editArticle/editArticle.component";

const routes = [
  {
    path: "articles/:slug/edit",
    component: EditArticleComponent
  }
]

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
    StoreModule.forFeature("editArticle", reducers),
    LoadingModule
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService]
})
export class EditArticleModule {}