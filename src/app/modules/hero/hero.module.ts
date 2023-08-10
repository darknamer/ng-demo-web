import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroHuckComponent } from './coms/hero-huck/hero-huck.component';
import { HeroIronManComponent } from './coms/hero-iron-man/hero-iron-man.component';
import { HeroCapAmericaComponent } from './coms/hero-cap-america/hero-cap-america.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './coms/hero-list/hero-list.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

const routes: Routes = [
  { path: '', redirectTo: 'iron-man', pathMatch: 'full' },
  { path: 'list', component: HeroListComponent },
  { path: 'iron-man', component: HeroIronManComponent },
  { path: 'huck', component: HeroHuckComponent },
  { path: 'cap-america', component: HeroCapAmericaComponent },
  { path: '**', redirectTo: 'iron-man', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    HeroHuckComponent,
    HeroIronManComponent,
    HeroCapAmericaComponent,
    HeroListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule.forRoot(),
  ]
})
export class HeroModule { }
