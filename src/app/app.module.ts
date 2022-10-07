import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ResidentComponent } from './resident-list/resident.component'
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ResidentComponent },
    ]),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ResidentComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
