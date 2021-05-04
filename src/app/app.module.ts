import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {FormsModule} from '@angular/forms';

import { DetallesComponent } from './detalles/detalles.component';

import { VillainComponent } from './villain/villain.component';

@NgModule({
  declarations: [
    AppComponent,
    VillainComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
