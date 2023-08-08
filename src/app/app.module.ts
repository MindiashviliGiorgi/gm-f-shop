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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    BallsPageComponent,
    JerseyPageComponent,
    ShortsPageComponent,
    BaseLayersPageComponent,
    ItemPageComponent,
    CarouselComponent,
    ContactPageComponent,
    ContainerComponent,
    PageCleatsPageComponent
    // CleatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CleatsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
