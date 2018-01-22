import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { Consultant } from '../../shared/consultants';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {reject} from 'q';
import { Http } from '@angular/http';

@Injectable()
export class ConsultantsService {
 // consultants: Consultant[];

  constructor(private http: Http) {}

  getConsultants(): Promise<Consultant[]> {
    return this.http.get(environment.apiUrl + '/people/all')
      .toPromise()
      .then(res => res.json() as Consultant[])
      .catch(this.handleError);
  }

  searchConsultants(message: string): Promise<Consultant[]> {
    return this.http.get(environment.apiUrl + '/people/search?content=' + message)
      .toPromise()
      .then(res => res.json() as Consultant[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
