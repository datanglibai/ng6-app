import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { 
    console.log('Providers: Authors Service constructor');
  }
}
