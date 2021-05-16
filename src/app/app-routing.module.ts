import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EmphomeComponent } from './emphome/emphome.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path: '',redirectTo:'/login',pathMatch:"full"},
  {
    path: 'adminhome',component:AdminhomeComponent,canActivate:[AuthGuard]
  },{
    path: 'emphome',component:EmphomeComponent,canActivate:[AuthGuard]
  },{
    path:'register',component:RegisterComponent,canActivate:[AuthGuard]
  } 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
