import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AppDataDependencyService } from './app-data-dependency.service';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(private http: HttpClient, private appDataDependencyService: AppDataDependencyService) { 
    console.log('Providers: AppData Service constructor');
  }

  getResult1(): Observable<any> {
    return this.appDataDependencyService.getSomething().pipe(mergeMap(v => {
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      return this.http.get('/api/result1', httpOptions);
    }
    ));
  }

  getResult2(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get('/api/result2', httpOptions);
  }
}
