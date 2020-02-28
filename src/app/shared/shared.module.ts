import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    MaterialModule,
    NavigationComponent
  ]
})
export class SharedModule { }
