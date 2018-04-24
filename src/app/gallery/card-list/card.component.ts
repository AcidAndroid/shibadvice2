import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shiba-card',
  templateUrl: './card.component.html',
  styles: [`
  
  img:hover{    
    filter:gray;
    -webkit-filter: grayscale(1);
  }`]
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
