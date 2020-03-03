import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {InfoComponent} from './info/info.component';
import {ChapterComponent} from './chapter/chapter.component';


const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'info/:id',
    component: InfoComponent
  },
  {
    path: 'chapter/:id/:chapter',
    component: ChapterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangaRoutingModule { }
