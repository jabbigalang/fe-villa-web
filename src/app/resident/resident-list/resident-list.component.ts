import {Component, OnInit} from "@angular/core";
import {ResidentService} from "../resident.service";
import {Resident} from "../resident.interface";

@Component({
  selector: 'resident-list',
  templateUrl: 'resident-list.component.html',
  styleUrls: ['resident-list.component.css'],
  providers: [ResidentService]
})

export class ResidentListComponent implements OnInit {
  residents: Resident[] = [];

  constructor(
    private residentService:ResidentService) {
  }

  ngOnInit() {
    this.getResidents();
  }

  getResidents(): void {
    this.residentService.getResidents()
      .subscribe(residents => (this.residents = residents))
  }
}
