import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'science-fiction',
  templateUrl: './science-fiction.component.html',
  styleUrls: ['./science-fiction.component.css']
})
export class ScienceFictionComponent implements OnInit {

  constructor(private booksService : BooksService, private authorsService : AuthorsService) { 
    console.log('ScienceFiction Component constructor');
  }

  ngOnInit() {
    //console.log('ScienceFiction Component OnInit');
  }

}
