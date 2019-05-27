import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/security/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', loadChildren: './main/main.module#MainModule', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
