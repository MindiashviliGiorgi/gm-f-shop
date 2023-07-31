import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CleatsPageComponent } from './cleats-page/cleats-page.component';
import { BallsPageComponent } from './balls-page/balls-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { JerseyPageComponent } from './jersey-page/jersey-page.component';
import { ShortsPageComponent } from './shorts-page/shorts-page.component';
import { BaseLayersPageComponent } from './base-layers-page/base-layers-page.component';

const routes: Routes = [
  {
    path : '',
    component : HomePageComponent
  },
  {
    path : 'cleatsPage',
    component : CleatsPageComponent
  },
  {
    path : 'ballsPage',
    component : BallsPageComponent
  },
  {
    path : 'itemPage',
    component : ItemPageComponent
  },
  {
    path : 'jerseyPage',
    component : JerseyPageComponent
  },
  {
    path : 'shortsPage',
    component : ShortsPageComponent
  },
  {
    path : 'baseLayersPage',
    component : BaseLayersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
