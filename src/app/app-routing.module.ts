import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from "./modules/main-page/main-page.component"
import { AboutComponent } from "./modules/about/about.component"

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainPageComponent  },
  { path: 'about', component: AboutComponent }
]
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }
