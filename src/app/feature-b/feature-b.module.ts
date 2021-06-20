import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureBCompComponent} from './feature-b-comp/feature-b-comp.component';
import {RouterModule} from "@angular/router";
import {TRANSLOCO_SCOPE, TranslocoModule} from "@ngneat/transloco";

const loader = ['en', 'es'].reduce((acc, lang) => {
  acc[lang] = () => import(`./i18n/${lang}.json`);
  return acc;
}, {} as any);

@NgModule({
  declarations: [
    FeatureBCompComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: FeatureBCompComponent
    }]),
    TranslocoModule
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'featB',
        loader
      }
    }
  ]
})
export class FeatureBModule {
}
