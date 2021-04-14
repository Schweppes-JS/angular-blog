import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BannerModule } from "src/app/shared/modules/banner/banner.module";
import { FeedModule } from "src/app/shared/modules/feed/feed.module";
import { PopularTagsModule } from "src/app/shared/modules/popularTags/popularTags.module";
import { YourFeedComponent } from "src/app/yourFeed/components/yourFeed/youtFeed.component";

const routes = [
  {
    path: "feed",
    component: YourFeedComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule
  ],
  declarations: [YourFeedComponent]
})
export class YourFeedModule {

}