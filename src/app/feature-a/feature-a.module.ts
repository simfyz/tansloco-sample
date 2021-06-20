import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureACompComponent} from './feature-a-comp/feature-a-comp.component';
import {RouterModule} from "@angular/router";
import {TRANSLOCO_SCOPE, TranslocoModule} from "@ngneat/transloco";
import {SharedModule} from "../shared/shared.module";

const loader = ['en', 'es'].reduce((acc, lang) => {
  acc[lang] = () => import(`./i18n/${lang}.json`);
  return acc;
}, {} as any);

@NgModule({
  declarations: [
    FeatureACompComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: FeatureACompComponent
    }]),
    TranslocoModule,
    SharedModule
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'featA',
        loader
      }
    }
  ]
})
export class FeatureAModule {
}
