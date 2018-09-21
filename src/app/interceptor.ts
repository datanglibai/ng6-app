import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

import { map, mergeMap } from "rxjs/operators";
import { AppDataDependencyService } from "./app-data-dependency.service";


@Injectable()
export class TestHttpInterceptor implements HttpInterceptor {
    constructor(private appDataDependencyService: AppDataDependencyService) { 
        console.log('Http interceptor constructor');
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        

        if (req.url == '' || req.url.endsWith(`api/user`)) {
            return next.handle(req);
        }

        console.log(`********* in intercepror ${req.url}`);

        return this.appDataDependencyService.getSomething().pipe(mergeMap((v) => {
            let newRequest: HttpRequest<any> = req.clone({
                headers: req.headers.set("Accept", 'application/json')
            });
            return next.handle(newRequest);
        }))
    }
}
