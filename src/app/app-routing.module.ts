import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  { path: 'hero', loadChildren: () => import('./modules/hero/hero.module').then(m => m.HeroModule) },
  { path: 'huey', loadChildren: () => import('./modules/huey/huey.module').then(m => m.HueyModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
