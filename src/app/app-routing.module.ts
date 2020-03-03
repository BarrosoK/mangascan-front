import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavigationComponent} from './shared/navigation/navigation.component';
import {HomeComponent} from './modules/home/home.component';
import {ListComponent} from './modules/manga/list/list.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule',
  },
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'manga',
        loadChildren: './modules/manga/manga.module#MangaModule'
      }
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
