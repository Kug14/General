
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { UserModel } from "../Model/user.model";
import { services } from "./service.constant";
@Injectable()
export class AccountService
{
    baseaddress : any
    constructor(@Inject(services.AccountServiceEndPointAddress) baseAddress :string,public httpclient : HttpClient)
    {
        this.baseaddress = baseAddress
    }

    ValidateCredentials(Credentials : UserModel)
    {
        const header = {'content-type':'application/JSON'};
        const body = Credentials;

        console.log(!!this.httpclient.post<Credential>
            (this.baseaddress+"/authenticate",body,{headers : header}));
            
        return this.httpclient.post<Credential>
        (this.baseaddress+"/authenticate",body,{headers : header});

        
    }

    register(Credentials : UserModel)
    {
        const header = {'content-type':'application/JSON'};
        const body = Credentials;

        return this.httpclient.post<Credential>
        (this.baseaddress+"/register",body,{headers : header})
    }

}