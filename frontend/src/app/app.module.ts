import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { Routes, RouterModule } from "@angular/router";
import { ComboDatepickerModule } from 'ngx-combo-datepicker';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';


@NgModule({
   declarations: [
      AppComponent,
      RegisterComponent,
      UserinfoComponent,
      HeaderComponent,
      FooterComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      ComboDatepickerModule,
      HttpClientModule,
      BsDatepickerModule.forRoot(),
      BrowserAnimationsModule
   ],
   providers: [
      UserService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
