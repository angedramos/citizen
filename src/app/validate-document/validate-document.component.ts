import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-validate-document',
  templateUrl: './validate-document.component.html',
  styleUrls: ['./validate-document.component.css']
})
export class ValidateDocumentComponent implements OnInit {

@Input() documentDetails = { citizenId: 0 , urlDocument: '', documentTitle:''};
  
  constructor(public restApi: RestApiService, public router: Router) {}
  ngOnInit() {}
 validateDocuments(dataDocument: any) {
    this.restApi.validateDocument(this.documentDetails.citizenId,this.documentDetails.urlDocument,this.documentDetails.documentTitle).subscribe((data: {}) => {
            this.router.navigate(['/validate-document']);
    });
  }

}
