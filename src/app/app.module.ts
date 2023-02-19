import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserService } from './service/user.service';
import { AppRoutingModule } from './app-routing';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, SignUpComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserService]
})
export class AppModule { }
