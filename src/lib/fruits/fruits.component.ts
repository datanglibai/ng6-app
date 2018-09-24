import { Component, OnInit } from '@angular/core';
import { FruitsService } from './fruits.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],
  //providers:[FruitsService],
})
export class FruitsComponent implements OnInit {

  constructor(private fruitsService: FruitsService) { 
    console.log('Fruits Component constructor');
  }

  ngOnInit() {
  }

}
