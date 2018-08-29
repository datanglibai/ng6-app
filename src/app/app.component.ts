import { Component, AfterViewInit } from '@angular/core';
import { HttptestService } from './httptest.service';
import { Observable, forkJoin } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  constructor(private httptestService: HttptestService){}
  ngAfterViewInit(): void {
    let https$: Observable<any>[] = [];
    this.httptestService.getResult1().subscribe(
      data => console.log("result1 request back"),
      error => console.log,
      () => console.log("result1 request complete")
    );

    this.httptestService.getResult2().subscribe(
      data => console.log("result2 request back"),
      error => console.log,
      () => console.log("result2 request complete")
    );

    https$.push(this.httptestService.getResult1());
    https$.push(this.httptestService.getResult2());

    let ob = forkJoin(https$);
    ob.subscribe(v=>console.log("fork join done"));
  }
  title = 'ng6-app';
}
