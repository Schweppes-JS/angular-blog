import { isLoggedInSelector } from './../../../../../auth/store/selectors';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "mc-feed-toggler",
    templateUrl: "./feedToggler.component.html"
})
export class FeedTogglerComponent implements OnInit {
    @Input("tagName") tagNameProps!: string | null;

    isLoggedIn$!: Observable<boolean | null>;

    constructor( private store: Store) {}

    initializeValue(): void {
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    }

    ngOnInit() :void {
        this.initializeValue();
    }
}