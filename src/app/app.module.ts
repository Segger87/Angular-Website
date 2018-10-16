import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { GifComponent } from './gif/gif.component';
import { HobbiesHomeComponent } from './hobbies-home/hobbies-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    routingComponents,
    GifComponent,
    HobbiesHomeComponent // see app-routing module
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
