import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantHeaderComponent } from './restaurant-header/restaurant-header.component';
import { MaterialExModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantComponent
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent
  }
]

@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantHeaderComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialExModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TaskThreeModule { }
