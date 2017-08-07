import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
},{
  path: '',
  component: AppComponent,
  canActivate: [AuthGuard],
  children: [{
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule',
  }]
},{
  path: '',
  component: MainLayoutComponent,
  canActivateChild: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }