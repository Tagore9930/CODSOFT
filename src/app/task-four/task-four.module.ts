import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ECommerceWebComponent } from './e-commerce-web/e-commerce-web.component';
import { RouterModule, Routes } from '@angular/router';
import { ECommerceWebHeaderComponent } from './e-commerce-web-header/e-commerce-web-header.component';
import { MaterialExModule } from '../shared/material.module';

const routes: Routes = [
  {
    path: '',
    component: ECommerceWebComponent
  }
]

@NgModule({
  declarations: [
    ECommerceWebComponent,
    ECommerceWebHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialExModule
  ]
})
export class TaskFourModule { }
