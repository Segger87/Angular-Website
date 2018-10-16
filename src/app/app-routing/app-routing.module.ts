import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import{ AboutMeComponent } from '../about-me/about-me.component';
import { HobbiesComponent } from '../hobbies/hobbies.component';
import { HobbiesHomeComponent} from '../hobbies-home/hobbies-home.component';
import { PianoComponent } from '../piano/piano.component';
import  { GamingComponent } from '../gaming/gaming.component';
import {CodingComponent} from '../coding/coding.component';
import {GifComponent} from '../gif/gif.component';
import { ContactComponent } from '../contact/contact.component';;

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'hobbies',
     component: HobbiesComponent,
     children: [
      {
        path: '',
        component: HobbiesHomeComponent
      },
      {
        path: 'piano',
        component: PianoComponent
      },
       {
        path: 'coding',
        component: CodingComponent
      },
      {
        path: 'gaming',
        component: GamingComponent
      }
     ]
   }, 
   { path: 'gif', component: GifComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutMeComponent, HobbiesComponent, PianoComponent, GamingComponent, CodingComponent, ContactComponent] // this is a clean way of exporting all the components used in routing
