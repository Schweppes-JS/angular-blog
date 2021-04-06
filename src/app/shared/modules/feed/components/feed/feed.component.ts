import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { getFeedAction } from "src/app/shared/modules/feed/store/actions/getFeed.action";
import { errorSelector, feedSelector, isLoadingSelector } from "src/app/shared/modules/feed/store/selectors";
import { GetFeedResponseInterface } from "src/app/shared/modules/feed/types/GetFeedResponse.interfece";
import { environment } from "src/environments/environment";

@Component({
  selector: "mc-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"]
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps!: string;

  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  feed$!: Observable<GetFeedResponseInterface | null>;
  limit = environment.limit;
  baseUrl!: string;
  queryParamsSubscription!: Subscription;
  currentPage!: number;

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params.page || "1");
    });
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}));
  }
}