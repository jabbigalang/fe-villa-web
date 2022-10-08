import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ResidentListComponent } from './resident-list/resident-list.component'
import { HttpClientModule } from "@angular/common/http";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import {ResidentComponent} from "./resident-list/resident/resident.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'resident', component: ResidentListComponent },
  { path: 'resident/:id', component: ResidentComponent }
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
    ResidentListComponent,
    TopBarComponent,
    DashboardComponent,
    ResidentComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
