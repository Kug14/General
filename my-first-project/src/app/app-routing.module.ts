import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { HeaderComponent } from './layout/Header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
 {path : "",redirectTo : "empty",pathMatch : "full"},
 {path : "empty",component : EmptyComponent},
 {path : "welcome",component : WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
