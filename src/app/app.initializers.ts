import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, throwError } from 'rxjs';
import { catchError, filter, take } from 'rxjs/operators';
import { promise } from '../../node_modules/protractor';

@Injectable()
export class AppInitializers {
    constructor() {
        console.log('AppInitializers constructor');
     }
    
    setAppInitializerState(): Promise<boolean> {
        console.log('AppInitializers setAppInitializerState called.');
        return Promise.resolve(true);
    }
}
