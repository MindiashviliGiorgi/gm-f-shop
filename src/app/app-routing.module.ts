import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CleatsPageComponent } from './cleats-page/cleats-page.component';
import { BallsPageComponent } from './balls-page/balls-page.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
