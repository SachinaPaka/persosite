import {EventEmitter} from '@angular/core';
//GSAP
import{TweenMax} from 'gsap';
import{TimelineMax} from 'gsap';
import{CustomEase} from 'gsap';

export class ScoreService {
  score=
    {
      valeur: 0
  };
  
  winEmit: EventEmitter<void> = new EventEmitter<void>();
  //besoin d'un winEmitter: eventEmitter<void>
  //besoin de faire winEmitter.emit() quand score est à 5

  incrementScore(){
      this.score.valeur ++;
      console.log(this.score.valeur);

      if(this.score.valeur==5 ){
        this.winEmit.emit();
        }
  }

}
