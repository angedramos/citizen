import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-validate-citizen',
  templateUrl: './validate-citizen.component.html',
  styleUrls: ['./validate-citizen.component.css']
})
export class ValidateCitizenComponent implements OnInit {
  @Input() citizenDetails = { id: 0 };


  constructor(public restApi: RestApiService, public router: Router) {}
  ngOnInit() {}
  getCitizenById(dataCitizen: any) {
    this.restApi.getCitizenById(this.citizenDetails.id).subscribe((data: {}) => {
      // console.log("Ciudadano vigente");
      this.router.navigate(['/validate-citizen']);
    });
  }

}
