import { HaberlerComponent } from './haberler/haberler.component';

import { UyeolComponent } from './uyeol/uyeol.component';
import { UyegirisComponent } from './uyegiris/uyegiris.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path: '', component: AppComponent },
 { path: 'uyegiris', component: UyegirisComponent },
{ path: 'uyeol', component: UyeolComponent },
{ path: 'haberler', component: HaberlerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
