import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { BreakfastComponent } from './breakfast/breakfast.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    MenuComponent,
    BreakfastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
