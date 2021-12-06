import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UtilityModule } from './utility/utility.module';
import { LayoutModule } from './layout/layout.module';
import { AccountModule } from './account/account.module';
import { HttpClientModule } from '@angular/common/http';
import { ConsoleLogService } from './Services/consolelog.service';
import { ApiLoggerService } from './Services/apilogger.service';
import { LogAggregateService } from './Services/logaggregate.service';
import { services } from './Services/service.constant';
import { AccountService } from './Services/account.service';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmptyComponent } from './empty/empty.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    UtilityModule,
    LayoutModule,
    AccountModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [// {provide : ConsoleLogService,useClass : ConsoleLogService} similar to just giving ConsoleLogService
 // {provide : "logService",useClass : ConsoleLogService} //providing abstraction 
    {provide : services.LogService,useClass : ApiLoggerService }, //using all service in one class - composite design pattern
    {provide : services.EndPointAddr,useValue : "http://localhost:3000/log"},
    {provide : services.AccountServiceEndPointAddress ,useValue : "http://localhost:3000"},
    {provide : AccountService,useClass : AccountService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
