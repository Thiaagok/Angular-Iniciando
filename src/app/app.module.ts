import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CounterModule } from './counter/components/counter.module';

import { AppComponent } from './app.component';
import { heromodule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    heromodule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
