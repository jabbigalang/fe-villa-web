import { Component, OnInit } from "@angular/core";
import { Resident } from './resident';
import { ResidentService } from "./resident.service";

@Component({
  selector: 'app-resident-list',
  templateUrl: './resident.component.html',
  styleUrls: [ './resident.component.css' ],
  providers: [ResidentService]
})

export class ResidentComponent implements OnInit {
  residents: Resident[] = [];

  constructor(private residentService: ResidentService) {}

  ngOnInit() {
    this.getResidents();
  }

  getResidents(): void {
    this.residentService.getResidents()
      .subscribe(residents => (this.residents = residents));
  }

}
