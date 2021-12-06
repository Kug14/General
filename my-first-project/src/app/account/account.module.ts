import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ChangepasswordComponent,
    RecoverpasswordComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    ChangepasswordComponent,
    RecoverpasswordComponent
  ]
})
export class AccountModule { }
