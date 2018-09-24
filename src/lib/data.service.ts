import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FruitsModule } from './fruits/index';


@Injectable({
  providedIn: FruitsModule
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log('Data service constructor.')
   }

  getData(): Observable<string> {
    return of('from data service') ;
  } 
}
