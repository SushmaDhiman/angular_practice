import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { PageNotFoundComponent } from './pages/error/page-not-found/page-not-found.component';
import { ParentComponent } from './pages/test/parent/parent.component';
import { ChildComponent } from './pages/test/parent/child/child.component';
import { DataComponent } from './data/data.component';
import { TestComponent } from './data/test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';
import { EditModalComponent } from './modals/edit-modal/edit-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ParentComponent,
    ChildComponent,
    DataComponent,
    TestComponent,
    DashBoardComponent,
    DeleteModalComponent,
    EditModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule, BrowserAnimationsModule,MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
