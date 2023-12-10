import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempEmailComponent } from './temp-email/temp-email.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MaterialExModule } from '../shared/material.module';

const routes: Routes = [
  {
    path: '',
    component: TempEmailComponent
  }
]

@NgModule({
  declarations: [
    TempEmailComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialExModule
  ]
})
export class TaskTwoModule { }
