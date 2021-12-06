import { Component, OnInit,Inject, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/Model/user.model';
import { ConsoleLogService } from 'src/app/Services/consolelog.service';
import { services } from 'src/app/Services/service.constant'
@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = "";
  password : string = "";
  logservice : any = null;
  @Input()
  status : string = '';

  @Output()
  onLogin = new EventEmitter<UserModel>()

  //constructor injection
  constructor(@Inject(services.LogService)logger : any) { //abstraction for consolelogservice  ,without abstraction cons(logger:ConsoleLogService)
    this.logservice = logger;
  }


  signup(formGroup:any){

    if(formGroup.valid){
      //  console.log(formGroup.controls.passwordCtrl.value)
      this.logservice.writelog(formGroup.controls.passwordCtrl.value);
    }
  }
  onEmailEdit(inputvalue : string):void
  {
    this.email = inputvalue;
    console.log(this.email);
  }

  onPasswordEdit(inputvalue : string):void
  {
    this.password = inputvalue;
    console.log(this.password);
  }

  clear():void
  {
    this.email = "";
    this.password = "";
    this.logservice.writelog("cleared");
  }

  login()
  {
      this.onLogin.emit(new UserModel(this.email,this.password));
  }
  ngOnInit(): void {
  }

}
