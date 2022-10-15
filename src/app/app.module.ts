import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '/residents', component: Resident}
]

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
