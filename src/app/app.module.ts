import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import {LoginComponent} from './views/login/login.component';
import {FormsModule} from '@angular/forms';
import {AboutComponent} from './components/about/about.component';
import {AdminComponent} from './components/admin/admin.component';
import {UserComponent} from './components/user/user.component';
import { FirstComponent } from './components/first/first.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LoginComponent,
    AboutComponent,
    AdminComponent,
    UserComponent,
    FirstComponent,


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
