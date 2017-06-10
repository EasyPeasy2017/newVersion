import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';
//import { AuthGuard } from './auth.guard';
//import {AuthService} from './services/auth.service';
import { DashboardComponent }               from './dashboard/dashboard.component';
import { EditorComponent }               from './editor/editor.component';
import {LoginComponent }               from './login/login.component';


const appRoutes: Routes = [
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', component: DashboardComponent/*, canActivate: [AuthGuard]*/ },
  { path: 'editor', component: EditorComponent/*, canActivate: [AuthGuard]*/ },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];
/*
export const appRoutingProviders: any[] = [
  AuthGuard,
  AuthService


];
*/
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
