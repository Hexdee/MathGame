import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathgameComponent } from './mathgame/mathgame.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxSemanticModule } from 'ngx-semantic';

@NgModule({
  declarations: [
    AppComponent,
    MathgameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSemanticModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

