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
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { PageCleatsPageComponent } from './page-cleats-page/page-cleats-page.component';
import { PageBallsPageComponent } from './page-balls-page/page-balls-page.component';
import { PageJerseysPageComponent } from './page-jerseys-page/page-jerseys-page.component';
import { PageShortsPageComponent } from './page-shorts-page/page-shorts-page.component';
import { PageBaseLayersPageComponent } from './page-base-layers-page/page-base-layers-page.component';

const routes: Routes = [
  {
    path : '',
    component : HomePageComponent
  },
  {
    path : 'cleatsPage',
    component : PageCleatsPageComponent
  },
  {
    path : 'ballsPage',
    component : PageBallsPageComponent
  },
  {
    path : 'itemPage',
    component : ItemPageComponent
  },
  {
    path : 'jerseyPage',
    component : PageJerseysPageComponent
  },
  {
    path : 'shortsPage',
    component : PageShortsPageComponent
  },
  {
    path : 'baseLayersPage',
    component : PageBaseLayersPageComponent
  },
  {
    path : 'contactPage',
    component : ContactPageComponent
  },
  {
    path : 'aboutPage',
    component : AboutPageComponent
  },
  {
    path : 'cartPage',
    component : CartPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
