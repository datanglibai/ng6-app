import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor() { 
    console.log('Fruits service constructor.');
   }
}