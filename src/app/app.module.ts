import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {ResidentListComponent} from "./resident/resident-list/resident-list.component";
import {ResidentModule} from "./resident/resident.module";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'residents', component: ResidentListComponent}
]

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ResidentModule
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
