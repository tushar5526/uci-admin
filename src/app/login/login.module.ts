import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginRoutingModule } from './login-routing.module';
import {LoginComponent} from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    loginRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class loginModule { }
