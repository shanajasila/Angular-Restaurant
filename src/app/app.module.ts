import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { JuiceComponent } from './juice/juice.component';
import { RiceComponent } from './rice/rice.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"menu",
    component:MenuComponent
  },
  {
    path:"breakfast",
    component:BreakfastComponent
  },
  {
    path:"juice",
    component:JuiceComponent
  },
  {
    path:"meals",
    component:RiceComponent
  },
  {
    path:"register",
    component:SignUpComponent
  }
] 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    MenuComponent,
    BreakfastComponent,
    JuiceComponent,
    RiceComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
