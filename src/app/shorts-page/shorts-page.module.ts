import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortsPageComponent } from './shorts-page.component';
import { ShortComponent } from './short/short.component';
import { ShortsPageService } from './shorts-page.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [ShortsPageComponent, ShortComponent],
  providers : [ShortsPageService],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports : [
    ShortsPageComponent
  ]
})
export class ShortsPageModule { }
