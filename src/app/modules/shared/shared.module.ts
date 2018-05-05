import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from "./components/nav/nav.component";
import {AppRoutingModule} from "../../app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent
  ]
})
export class SharedModule { }
