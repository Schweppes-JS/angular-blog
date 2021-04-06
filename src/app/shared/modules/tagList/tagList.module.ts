import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingComponent } from "src/app/shared/modules/loading/components/loading/loading.component";
import { TagListComponent } from "src/app/shared/modules/tagList/components/tagList/tagList.component";

@NgModule({
  imports: [CommonModule],
  declarations: [TagListComponent],
  exports: [TagListComponent]
})

export class TagListModule {
  
}