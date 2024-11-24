import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SkeletonModule } from 'primeng/skeleton';

import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

const routes: Routes = [{ path: '', component: <%= classify(name) %>Component }];

@NgModule({
  declarations: [
  <%= classify(name) %>Component,
  ],
  imports: [
  CommonModule,
  RouterModule.forChild(routes),

  SkeletonModule,
  ]
})
export class <%= classify(name) %>Module { }
