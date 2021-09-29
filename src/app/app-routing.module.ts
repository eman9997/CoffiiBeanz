import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemselectedComponent } from './components/itemselected/itemselected.component';
import { Page404Component } from './components/shared/page404/page404.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path:'product/:id/view',component:ItemselectedComponent,pathMatch: 'full'},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component:Page404Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
