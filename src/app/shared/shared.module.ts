import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedComponent} from './shared/shared.component';
import {TRANSLOCO_SCOPE, TranslocoModule} from "@ngneat/transloco";


@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule
  ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule {
}
