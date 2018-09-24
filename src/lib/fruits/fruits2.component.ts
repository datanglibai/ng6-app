import { Component, OnInit } from '@angular/core';
import { FruitsService } from './fruits.service';

@Component({
  selector: 'app-fruits2',
  templateUrl: './fruits2.component.html',
  styleUrls: ['./fruits2.component.css'],
  //providers: [ FruitsService ],
})
export class Fruits2Component implements OnInit {

  constructor(private fruitsService: FruitsService) { 
    console.log('Fruits 2 Component constructor');
  }

  ngOnInit() {
  }

}
