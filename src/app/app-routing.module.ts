import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByletterComponent } from './pages/byletter/byletter.component';
import { DetailComponent } from './pages/detail/detail.component';
import { RandomComponent } from './pages/random/random.component';

const routes: Routes = [
  {
    path: 'home',
    component: RandomComponent
  },
  {
    path: 'byletter',
    component: ByletterComponent
  },
  {
    path: 'byname',
    component: ByNameComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: '**',
    component: RandomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
