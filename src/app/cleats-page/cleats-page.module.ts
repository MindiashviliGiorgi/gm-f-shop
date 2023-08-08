import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CleatsPageService } from './cleats-page.service';
import { CleatsPageComponent } from './cleats-page.component';
import { CleatComponent } from './cleat/cleat.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [CleatsPageComponent, CleatComponent],
  providers:[CleatsPageService],
  imports: [CommonModule, FormsModule, AppRoutingModule],
  exports: [CleatsPageComponent]
})
export class CleatsPageModule { }
