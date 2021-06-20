import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature-a',
    loadChildren: () => import('./feature-a/feature-a.module').then(value => value.FeatureAModule)
  },
  {
    path: 'feature-b',
    loadChildren: () => import('./feature-b/feature-b.module').then(value => value.FeatureBModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
