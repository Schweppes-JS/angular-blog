import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { getArticleAction } from "src/app/article/store/actions/getArticle.action";
import { createArticleAction } from "src/app/createArticle/store/actions/createArticle.action";
import { isSubmittingSelector, validationErrorsSelector } from "src/app/createArticle/store/selectors";
import { updateArticleAction } from "src/app/editArticle/store/actions/createArticle.action";
import { articleSelector } from "src/app/editArticle/store/selectors";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";

@Component({
  selector: "mc-edit-article",
  templateUrl: "./editArticle.component.html"
})
export class EditArticleComponent implements OnInit {
  initialValues$!: Observable<ArticleInputInterface>;
  isSubmitting$!: Observable<boolean>;
  isLoading$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorsInterface | null>;
  slug!: string | null;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get("slug");
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter((article: ArticleInterface | null) => article !== null),
      map((article: ArticleInterface | null) => {
        return {
            title: article!.title,
            description: article!.description,
            body: article!.body,
            tagList: article!.tagList
        }
      }));
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}));
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(updateArticleAction({articleInput, slug: this.slug!}));
  }
}