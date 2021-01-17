import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UyegirisComponent } from './uyegiris/uyegiris.component';
import { UyeolComponent } from './uyeol/uyeol.component';
import { HaberlerComponent } from './haberler/haberler.component';



@NgModule({
  declarations: [			
    AppComponent,
    UyegirisComponent,
    UyeolComponent,
    HaberlerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
