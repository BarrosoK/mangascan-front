import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaRoutingModule } from './manga-routing.module';
import { ListComponent } from './list/list.component';
import { InfoComponent } from './info/info.component';
import { ChapterComponent } from './chapter/chapter.component';
import {SharedModule} from '../../shared/shared.module';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ListComponent, InfoComponent, ChapterComponent],
  imports: [
    CommonModule,
    MangaRoutingModule,
    SharedModule,
    FlexModule,
    FormsModule,
    FlexLayoutModule,
  ]
})
export class MangaModule { }
