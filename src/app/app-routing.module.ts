import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule)
  },
  {
    path: 'task-1',
    loadChildren: () => import("./task-one/task-one.module").then((m) => m.TaskOneModule)
  },
  {
    path: 'task-2',
    loadChildren: () => import("./task-two/task-two.module").then((m) => m.TaskTwoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
