import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { combineLatest, Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { currentUserSelector } from "src/app/auth/store/selectors";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { ProfileInterface } from "src/app/shared/types/profile.interface";
import { getUserProfileAction } from "src/app/userProfile/store/actions/getUserProfile.action";
import { isLoadingSelector, userProfileSelector } from "src/app/userProfile/store/selectors";

@Component({
  selector: "mc-user-profile",
  templateUrl: "./userProfile.component.html"
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile!: ProfileInterface;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  userProfileSubscription!: Subscription;
  slug!: string;
  apiUrl!: string;
  isCurrentUserProfile$!: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store.pipe(select(userProfileSelector)).subscribe((userProfile: ProfileInterface | null) => {
      this.userProfile = userProfile!;
    });

    this.route.params.subscribe((params: Params) => {
      this.slug = params.slug;
      this.fetchUserProfile();
      console.log(params)
    })
  }

  initializeValues(): void {
    const isFavorites = this.router.url.includes("favorites");
    this.slug = this.route.snapshot.paramMap.get("slug")!;
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.apiUrl = isFavorites ? `/articles?favorited=${this.slug}` : `/articles?author=${this.slug}`;
    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(select(currentUserSelector)),
      this.store.pipe(select(userProfileSelector))
    ]).pipe(map(([currentUser, userProfile]: [CurrentUserInterface | null, ProfileInterface | null]) => {
        return currentUser?.username === userProfile?.username;
    }))
  }

  fetchUserProfile(): void {
    this.store.dispatch(getUserProfileAction({slug: this.slug}));
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes("favorites");
    return this.apiUrl = isFavorites ? `/articles?favorited=${this.slug}` : `/articles?author=${this.slug}`;
  }

}