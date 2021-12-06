import { ConsoleLogService } from "./consolelog.service";
import { ApiLoggerService } from "./apilogger.service";
import { services } from "./service.constant";

export class LogAggregateService
{
    allServices : any = null;
    constructor()
    {
      //  this.allServices = [new ConsoleLogService(),new ApiLoggerService("")];
    }

    writelog(message : string)
    {
        for (let i =0 ;i<2;i++)
        {
            this.allServices[i].writelog(message);
        }
    }
}