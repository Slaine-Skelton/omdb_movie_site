import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TvShowComponent } from './tv-show/tv-show.component';

@NgModule({
  declarations: [
    AppComponent,
    TvShowListComponent,
    TvShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
