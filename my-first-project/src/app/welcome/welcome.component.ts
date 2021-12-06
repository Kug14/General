import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../Model/user.model';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  signUpStatus = "";


  constructor(public accountservice : AccountService,private router : Router)
  {

  }

  ngOnInit(): void {
  }

  onSignUp(data : UserModel)
  {
    console.log(data);
    this.accountservice.register(data).subscribe(
    (res:any)=>this.signUpStatus=res,
    (err :any)=> this.signUpStatus="Error"
    )
  }
  switch()
  {
    this.router.navigate(['/empty']);
  }
}
