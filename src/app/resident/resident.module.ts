import {NgModule} from "@angular/core";
import {ResidentListComponent} from "./resident-list/resident-list.component";
import {ResidentUpdateComponent} from "./resident-update/resident-update.component";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

const routes: Routes = [
  {path: 'residents', component: ResidentListComponent}
]

@NgModule({
  declarations: [
    ResidentListComponent,
    ResidentUpdateComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), BrowserModule],
  bootstrap: [ResidentListComponent]
})

export class ResidentModule {
}
