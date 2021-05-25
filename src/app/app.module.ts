import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import{HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    HomeComponent,
    FormComponent,
    HttpClientModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
	routing,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
