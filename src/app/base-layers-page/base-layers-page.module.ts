import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayersPageComponent } from './base-layers-page.component';
import { BaseLayerComponent } from './base-layer/base-layer.component';
import { BaseLayersPageService } from './base-layers-page.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [BaseLayersPageComponent, BaseLayerComponent],
  providers : [BaseLayersPageService],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports : [BaseLayersPageComponent]
})
export class BaseLayersPageModule { }
