import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

import { map, mergeMap } from "rxjs/operators";
import { ReplayService } from "./replay.service";


@Injectable()
export class TestHttpInterceptor implements HttpInterceptor {
    constructor(private replayService: ReplayService) { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        

        if (req.url == '' || req.url.endsWith(`api/user`)) {
            return next.handle(req);
        }

        console.log(`********* in intercepror ${req.url}`);

        return this.replayService.getSomething().pipe(mergeMap((v) => {
            let newRequest: HttpRequest<any> = req.clone({
                headers: req.headers.set("Accept", 'application/json')
            });
            return next.handle(newRequest);
        }))
    }
}
