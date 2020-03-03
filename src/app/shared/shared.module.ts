import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FilterPipe} from './pipes/filter.pipe';


@NgModule({
  declarations: [NavigationComponent, FilterPipe],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    MaterialModule,
    NavigationComponent,
    FilterPipe
  ]
})
export class SharedModule { }
