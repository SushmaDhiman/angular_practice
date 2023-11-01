import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { PageNotFoundComponent } from './pages/error/page-not-found/page-not-found.component';

const routes: Routes = [
{
  path:'login',
  component: LoginComponent,
},
{
  path:'register',
  component: RegisterComponent,
},
{
path:'', redirectTo: '/login', pathMatch: 'full'
},
{
  path:'**',
  component: PageNotFoundComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
