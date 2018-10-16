import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { fromEventPattern } from 'rxjs';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ContactComponent } from './contact/contact.component';
import { PianoComponent } from './piano/piano.component';
import { CodingComponent } from './coding/coding.component';
import { GamingComponent } from './gaming/gaming.component';
import { GifComponent } from './gif/gif.component';
import { HobbiesHomeComponent } from './hobbies-home/hobbies-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    routingComponents,
    GifComponent,
    HobbiesHomeComponent //see app-routing module
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
