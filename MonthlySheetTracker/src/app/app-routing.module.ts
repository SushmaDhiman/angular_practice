import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { PageNotFoundComponent } from './pages/error/page-not-found/page-not-found.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';
import { EditModalComponent } from './modals/edit-modal/edit-modal.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashBoardComponent,
  },
  {
    path: 'edit',
    component: EditModalComponent,
  },
  {
    path: 'delete',
    component: DeleteModalComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
