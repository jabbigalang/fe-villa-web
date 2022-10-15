import {NgModule} from "@angular/core";
import {ResidentListComponent} from "./resident-list/resident-list.component";
import {ResidentUpdateComponent} from "./resident-update/resident-update.component";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path:}
]

@NgModule({
  declarations: [
    ResidentListComponent,
    ResidentUpdateComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)]
})

export class ResidentModule {}
