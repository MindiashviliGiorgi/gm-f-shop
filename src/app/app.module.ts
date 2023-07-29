import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    CleatsPageComponent,
    BallsPageComponent,
    JerseyPageComponent,
    ShortsPageComponent,
    BaseLayersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
