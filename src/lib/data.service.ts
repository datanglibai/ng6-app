import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<string> {
    return of('from data service') ;
  } 
}
