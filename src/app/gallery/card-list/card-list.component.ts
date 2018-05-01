import { Component, OnInit } from '@angular/core';
import { Card } from "../../models/card";
import { CardApiService } from '../card-api.service';

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

public cardList:Card ;

  constructor(private cardApi:CardApiService) { }

  ngOnInit() {
     
    let phrase:string
    ,url:string
    
    this.cardApi.fetchPhrase()
    .subscribe(phrases=> {phrase=phrases[0]})
    this.cardApi.fetchImage()
    .subscribe(cards=>{url=cards[0]}) 
      this.cardList = new Card(url,phrase,'unknow') 
      console.log(this.cardList)  
  }
  
  
}
