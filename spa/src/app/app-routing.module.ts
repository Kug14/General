import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { InboxComponent } from './inbox/inbox.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path : "",redirectTo : "home" , pathMatch : "full"},
  {
    path : "home",component : HomeComponent,
    children :[
      {path : 'login',component : LoginComponent},
      {path : 'signup',component : SignupComponent}
    ]
  },
  {
    path : "dashboard",component : DashboardComponent,
    children : [
      {path: 'inbox',component : InboxComponent}
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
