import { Component, OnInit } from '@angular/core';
import { Card } from "../../models/card";
@Component({
  selector: 'shiba-card-list',
  templateUrl: './card-list.component.html',
  styles: [`
  .flip-container {
    perspective: 1000px; /*Perspectiva del contendedor como sifuera un dibujo sobre eje x*/
    margin-top:5%;
  }
  /*Al momento de pasa el mous sobre el contenidor*/
  .flip-container:hover .flipper, .flip-container.hover .flipper {
		transform: rotateY(180deg);
  }
  .flip-container, .front, .back {
    width: 320px;
    height: 480px;
  }
  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
  
    position: relative;
  }
  .front, .back {
    backface-visibility: hidden;
    
    position: absolute;
    top: 0;
    left: 0;
  }
  .front {
    backgroundcolor:green;
    z-index: 2;
    /* for firefox 31 */
    transform: rotateY(0deg);
  }
  .back {
    backgroundcolor:red;
    transform: rotateY(180deg);
  }  
  `]
})
export class CardListComponent implements OnInit {
  card = new Card('http://cdn.shibe.online/shibes/1ea5381d4e2c6bc6f6d98484daffc4dcfa36c2f5.jpg'
,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, odit. Dolorum nam culpa maxime ex corrupti, possimus ipsum suscipit iure asperiores id explicabo officiis officia quia vitae. Quisquam, omnis amet."
,"")
  constructor() { }

  ngOnInit() {
  }

  switchCard(){
    // classList.toggle('hover'); 
    // console.log('POP');
    alert('POP');
  }
}
