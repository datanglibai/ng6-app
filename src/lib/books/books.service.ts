import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { 
    console.log('Providers: Books Service constructor');
  }

  public getBooks(){
    return [{
      name: 'robot 1',
      category: 'science fiction',
      author: 'asmov'},
      {
        name: 'robot 2',
        category: 'science fiction',
        author: 'asmov'}]
  }
}
