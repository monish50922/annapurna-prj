import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent as DonorDashboard } from './donor/dashboard/dashboard.component';
import { NgoDashboardComponent as NgoDashboard } from './ngo/dashboard/dashboard.component';
import { AdminDashboardComponent as AdminDashboard } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'donor', component: DonorDashboard },
  { path: 'register', component: RegisterComponent },
  { path: 'ngo', component: NgoDashboard },
  { path: 'admin', component: AdminDashboard }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
