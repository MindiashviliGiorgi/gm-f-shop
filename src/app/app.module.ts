import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { CleatsPageComponent } from './cleats-page/cleats-page.component';
import { BallsPageComponent } from './balls-page/balls-page.component';
import { JerseyPageComponent } from './jersey-page/jersey-page.component';
import { ShortsPageComponent } from './shorts-page/shorts-page.component';
import { BaseLayersPageComponent } from './base-layers-page/base-layers-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ContainerComponent } from './container/container.component';
import { CleatComponent } from './cleats-page/cleat/cleat.component';
import { CleatsPageService } from './cleats-page/cleats-page.service';
import { CleatsPageModule } from './cleats-page/cleats-page.module';
import { PageCleatsPageComponent } from './page-cleats-page/page-cleats-page.component';
import { CartLengthComponent } from './cart-length/cart-length.component';
import { BallComponent } from './balls-page/ball/ball.component';
import { BallsPageModule } from './balls-page/balls-page.module';
import { PageBallsPageComponent } from './page-balls-page/page-balls-page.component';
import { PageJerseysPageComponent } from './page-jerseys-page/page-jerseys-page.component';
import { JerseyComponent } from './jersey-page/jersey/jersey.component';
import { JerseyPageModule } from './jersey-page/jersey-page.module';
import { ShortComponent } from './shorts-page/short/short.component';
import { PageShortsPageComponent } from './page-shorts-page/page-shorts-page.component';
import { ShortsPageModule } from './shorts-page/shorts-page.module';
import { BaseLayerComponent } from './base-layers-page/base-layer/base-layer.component';
import { BaseLayersPageModule } from './base-layers-page/base-layers-page.module';
import { PageBaseLayersPageComponent } from './page-base-layers-page/page-base-layers-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    ItemPageComponent,
    CarouselComponent,
    ContactPageComponent,
    ContainerComponent,
    PageCleatsPageComponent,
    CartPageComponent,
    CartLengthComponent,
    PageBallsPageComponent,
    PageJerseysPageComponent,
    PageShortsPageComponent,
    PageBaseLayersPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CleatsPageModule,
    BallsPageModule,
    JerseyPageModule,
    ShortsPageModule,
    BaseLayersPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
