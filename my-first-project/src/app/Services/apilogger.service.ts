import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { services } from "./service.constant";

@Injectable()
export class ApiLoggerService
{
    epAddress : string ;
    httpReq :any;
    constructor(@Inject(services.EndPointAddr) endPointAddr : string,httpClient : HttpClient)
    {
        this.epAddress = endPointAddr
        this.epAddress = this.epAddress+"/";
        this.httpReq = httpClient
    }

  //  this.epAddress = this.epAddress+"/";
    

    writelog(message : string)
    {
       // console.log(`API LOGGING...${message},${this.epAddress}`)
        this.epAddress = this.epAddress+message;
        this.httpReq.get(this.epAddress).subscribe(
            ()  =>  {console.log("....log Completed");
        })
    }
}