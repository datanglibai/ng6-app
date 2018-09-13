import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { mergeMap } from '../../node_modules/rxjs/operators';
import { ReplayService } from './replay.service';

@Injectable({
  providedIn: 'root'
})
export class HttptestService {

  constructor(private http: HttpClient, private replayService: ReplayService) { }

  getResult1(): Observable<any> {
    return this.replayService.getSomething().pipe(mergeMap(v => {
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
