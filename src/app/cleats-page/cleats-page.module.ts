import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CleatsPageService } from './cleats-page.service';
import { CleatsPageComponent } from './cleats-page.component';
import { CleatComponent } from './cleat/cleat.component';



@NgModule({
  declarations: [CleatsPageComponent, CleatComponent],
  providers:[CleatsPageService],
  imports: [CommonModule],
  exports:[CleatsPageComponent]
})
export class CleatsPageModule { }
