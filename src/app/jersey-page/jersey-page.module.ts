import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JerseyPageComponent } from './jersey-page.component';
import { JerseyComponent } from './jersey/jersey.component';
import { JerseyPageService } from './jersey-page.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [JerseyPageComponent, JerseyComponent],
  providers : [JerseyPageService],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports : [
    JerseyPageComponent
  ]
})
export class JerseyPageModule { }
