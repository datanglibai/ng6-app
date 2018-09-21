import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { 
    console.log('Providers: Books Service constructor');
  }
}
