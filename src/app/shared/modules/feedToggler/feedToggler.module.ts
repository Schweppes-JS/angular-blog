import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedTogglerComponent } from 'src/app/shared/modules/feedToggler/components/feedToggler/feedToggler.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [FeedTogglerComponent],
    exports: [FeedTogglerComponent],
})
export class FeedTogglerModule {}