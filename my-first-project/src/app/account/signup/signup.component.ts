import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from 'src/app/Model/user.model';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email:string="";
  password:string="";
  confirmPassword:string="";

  @Input()
  signUpstatus : string = '';

  @Output()
  onSignUpEvent = new EventEmitter<UserModel>()
  
  constructor() { }
  signup(formGroup:any){

    if(formGroup.valid){

    }
  }
  clear(formGroup:any){

    formGroup.reset();
  }
  onSignUp()
  {
      this.onSignUpEvent.emit(new UserModel(this.email,this.password));
  }
  ngOnInit(): void {
  }

}