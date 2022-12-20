import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'board', pathMatch: 'full' },
  {
    path: '',
    loadChildren : () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  { path: '**', redirectTo: 'board', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
