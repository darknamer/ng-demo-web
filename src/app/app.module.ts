import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './coms/app/app.component';
import { TopHeaderComponent } from './coms/top-header/top-header.component';
import { AsideComponent } from './coms/aside/aside.component';
import { IsOddPipe } from './pipes/is-odd.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    AsideComponent,
    IsOddPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
