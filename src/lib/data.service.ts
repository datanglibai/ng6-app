import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { mergeMap } from '../../node_modules/rxjs/operators';
import { ReplayService } from './replay.service';

@Injectable()
export class DataService {

  constructor(private http: HttpClient, private replayService: ReplayService) { }

  getData(): Observable<string> {
    return of('from data service') ;
  } 
}
