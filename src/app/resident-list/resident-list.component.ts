import { Component, OnInit } from "@angular/core";
import { residents } from './resident';

@Component({
  selector: 'resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: [ './resident-list.component.css' ]
})

export class ResidentListComponent {
  residents = residents;
}
