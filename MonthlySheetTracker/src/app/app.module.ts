import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/error/page-not-found/page-not-found.component';
import { ParentComponent } from './pages/test/parent/parent.component';
import { ChildComponent } from './pages/test/parent/child/child.component';
import { DataComponent } from './data/data.component';
import { TestComponent } from './data/test/test.component';
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ParentComponent,
    ChildComponent,
    DataComponent,
    TestComponent,
    
    
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
