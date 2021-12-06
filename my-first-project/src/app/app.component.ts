import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from './Model/user.model';
import { AccountService } from './Services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  loginStatus = "";//used to set the status property of login component using propert binding in html
  //signUpStatus = "";


  constructor(public accountservice : AccountService,private router : Router)
  {

  }


  onLoginHandler(data : UserModel)
  {
    console.log(data);
    this.loginStatus = "Invalid Credentials";
    this.accountservice.ValidateCredentials(data).subscribe(
      (res:any) => {this.loginStatus = res;},
      (error : any) => {this.loginStatus = "Invalid";}
    )
  }

  // onSignUp(data : UserModel)
  // {
  //   console.log(data);
  //   this.accountservice.register(data).subscribe(
  //   (res:any)=>this.signUpStatus=res,
  //   err => this.signUpStatus="Error "
  //   )
  // }

  switch()
  {
    this.router.navigate(['/welcome']);
  }
}
