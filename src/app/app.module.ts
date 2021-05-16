import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EmphomeComponent } from './emphome/emphome.component';
import { LoginComponent } from './login/login.component';
import{FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    EmphomeComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
