import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallsPageComponent } from './balls-page.component';
import { BallComponent } from './ball/ball.component';
import { BallsPageService } from './balls-page.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [BallsPageComponent, BallComponent],
  providers : [BallsPageService],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports : [
    BallsPageComponent
  ]
})
export class BallsPageModule { }
