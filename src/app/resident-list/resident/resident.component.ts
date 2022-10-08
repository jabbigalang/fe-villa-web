import {Component, OnInit} from "@angular/core";
import {Resident} from "../resident";
import {ResidentService} from "../resident.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-resident',
  templateUrl: 'resident.component.html',
  styleUrls: ['resident.component.css']
})

export class ResidentComponent implements OnInit {
  resident: Resident | undefined;

  constructor(
    private residentService: ResidentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getResident()
  }

  getResident(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.residentService.getResident(id)
      .subscribe(resident => this.resident = resident);
  }
}
