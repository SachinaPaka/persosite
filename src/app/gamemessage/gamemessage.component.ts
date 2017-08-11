import {Component, OnInit } from '@angular/core';
import{PicsService} from '../pics.service';
import{ScoreService} from '../score.service';

//GSAP
import{TweenMax} from 'gsap';
import{TimelineMax} from 'gsap';
import{CustomEase} from 'gsap';


@Component({
  selector: 'app-gamemessage',
  templateUrl: './gamemessage.component.html',
  styleUrls: ['./gamemessage.component.css']
})
export class GamemessageComponent implements OnInit {
  score;
  main;
  item: number = 0;
  subscription: any;
  constructor(private scoreService:ScoreService, private picsService:PicsService) { }

  ngOnInit() {
    this.score= this.scoreService.score;
    this.main= this.picsService.pictures[0];

    this.subscription = this.scoreService.winEmit.subscribe( () => {
      console.log("Gagné !");
      var gameWin= document.getElementById("GameWin");
      gameWin.style.display="block";
      gameWin.style.opacity="1";
      TweenMax.from(gameWin, 1, {opacity:0});
    });





  }

  test(){
    console.log("Ici la valeur est de " + this.score.valeur);
    if(this.score.valeur==2 ){
      var gameWin= document.getElementById("GameWin");
      console.log("Ici aussi");
      gameWin.style.display="block";
      gameWin.style.opacity="1";
      TweenMax.from(gameWin, 1, {opacity:0})
      }else{};
  }


  reloadGame(){
    this.score.valeur=0;
    var gameWin= document.getElementById("GameWin");
    var unfade = new TimelineMax({onComplete:onCompleteFunc});
    unfade.to(gameWin, 0.5, {opacity:0});

    function onCompleteFunc(){
      gameWin.style.display="none";
      console.log(gameWin.style.display);
}
  }

  selectedNavItem(item: number) {
   this.item = item;
 }
 ngOnDestroy() {
   this.subscription.unsubscribe();
 }
}
