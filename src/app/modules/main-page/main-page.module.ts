import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { GraphComponent } from './components/graph/graph.component';
import { ControlComponent } from './components/control/control.component';
import { MainPageService } from "./main-page.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainPageComponent,
    GraphComponent,
    ControlComponent
  ],
  providers: [
    MainPageService
  ]
})
export class MainPageModule { }
