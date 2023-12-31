import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HueyLayoutComponent } from './coms/huey-layout/huey-layout.component';
import { HueyListComponent } from './coms/huey-list/huey-list.component';
import { RouterModule, Routes } from '@angular/router';
import { GloService } from './services/glo.service';
import { HttpClientModule } from '@angular/common/http';
import { HueyCheckComponent } from './coms/huey-check/huey-check.component';

const routes: Routes = [
  {
    path: '', component: HueyLayoutComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: HueyListComponent },
      { path: 'check', component: HueyCheckComponent },
    ]
  },
  { path: '**', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    HueyLayoutComponent,
    HueyListComponent,
    HueyCheckComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  providers: [
    GloService,
  ]
})
export class HueyModule { }
