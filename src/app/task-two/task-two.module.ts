import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempEmailComponent } from './temp-email/temp-email.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialExModule } from '../shared/material.module';
import { TempEmailHeaderComponent } from './temp-email-header/temp-email-header.component';

const routes: Routes = [
  {
    path: '',
    component: TempEmailComponent
  }
]

@NgModule({
  declarations: [
    TempEmailComponent,
    TempEmailHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialExModule
  ]
})
export class TaskTwoModule { }
