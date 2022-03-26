import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Citizen } from '../shared/citizen';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
   // Define API
   apiURL = 'http://localhost:9091/api/v1';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getCitizenById(id: any): Observable<Citizen> {
    return this.http
      .get<Citizen>(this.apiURL + '/validateCitizen/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

// HttpClient API post() method => Create employee
registerCitizen(citizen: any): Observable<Citizen> {
  return this.http
    .post<Citizen>(
      this.apiURL + '/registerCitizen',
      JSON.stringify(citizen),
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.handleError));
}

validateDocument(citizenId: number, urlDocument:string, documentTitle:string): Observable<Document> {
  return this.http
    .get<Document>(this.apiURL + '/authenticatedocument/' + citizenId + '/' + urlDocument + '/' + documentTitle)
    .pipe(retry(1), catchError(this.handleError));
}
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
