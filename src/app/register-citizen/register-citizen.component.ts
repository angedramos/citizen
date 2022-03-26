import { Component, Input, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-citizen',
  templateUrl: './register-citizen.component.html',
  styleUrls: ['./register-citizen.component.css']
})
export class RegisterCitizenComponent implements OnInit {

  @Input() citizenDetails = { id: 0 , name: '',address:'', email: '', operatorId: 0, operatorName:'' };
  
  constructor(public restApi: RestApiService, public router: Router) {}
  ngOnInit() {}
  addRegister(dataCitizen: any) {
    this.restApi.registerCitizen(this.citizenDetails).subscribe((data: {}) => {
      this.router.navigate(['/validate-citizen']);
    });
  }
}
