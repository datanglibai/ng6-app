import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor() { 
    console.log('Providers: Fruits service constructor.');
   }
}
