import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppDataDependencyService {

  private subject: ReplaySubject<string>;
  private something$: Observable<string>;

  constructor(private http: HttpClient) {
    console.log('Providers: AppDataDependency Service constructor');
   }

  public getSomething() {
    if (this.subject)
      return this.something$;

    this.subject = new ReplaySubject(1);
    this.something$ = this.subject.asObservable();

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        
      })
    };

    this.http.get('/api/user', httpOptions).subscribe(v => {
      this.subject.next("something");
      this.subject.complete();
    });

    return this.something$;
  }
}
