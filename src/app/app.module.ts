import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './core/app.routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavBarComponent } from './sidenav-bar/sidenav-bar.component';
import { SalesServiceService } from './sales-service.service';
import { SlideshowModule } from 'ng-simple-slideshow';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidenavBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    MatListModule, HttpClientModule, SlideshowModule
  ],
  providers: [SalesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }