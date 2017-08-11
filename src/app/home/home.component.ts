import {Component, OnInit } from '@angular/core';
import{PicsService} from '../pics.service';
import{ScoreService} from '../score.service';
import { routerTransition } from '../router.animation';

//GSAP
import{TweenMax} from 'gsap';
import{TimelineMax} from 'gsap';
import{TimelineLite} from 'gsap';
import{CustomEase} from 'gsap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {
  main;
  homepic;
  sheep;
  gameWin;
  score;
  onComplete;
  more;

  constructor(private scoreService:ScoreService, private picsService:PicsService ) { }

  ngOnInit() {
    this.score= this.scoreService.score;
    this.main= this.picsService.pictures[0];
    this.homepic=this.picsService.pictures[1];
    this.sheep=document.getElementById("sheep");
    this.gameWin=document.getElementById("GameWin");

    var logo = document.getElementById("logo");
    var illu = document.getElementById("illu");
    var graph = document.getElementById("graph");
    var proj = document.getElementById("proj");
    var bg = document.getElementById("bg");
    var sheep= document.getElementById("sheep");
    var gameWin= document.getElementById("GameWin");

    var tl = new TimelineLite();
    tl.from(bg,2,{y:3000}, "test")
    .to(bg,2,{y:-250})
    .from(logo, 0.5, {scale:2, rotation:180,autoAlpha:0,})
    .from(graph, 1, {opacity:0})
    .from(proj, 1, {opacity:0})
    .from(illu, 1, {opacity:0})

    console.log(this.score.valeur);
    function randomNumber(min:1, max:200):Number {
        //good
      return Math.floor(Math.random() * (1 + max - min) + min);
    }
    TweenMax.to(sheep, 1, {left:randomNumber(1,200),repeat:-1, yoyo:true});
}

onClick(){

  this.sheep.style.display = "none";
  this.score.valeur ++;


  if(this.score.valeur==5 ){
    var gameWin= document.getElementById("GameWin");
    console.log(this.score.valeur);
    gameWin.style.display="block";
    gameWin.style.opacity="1";
    TweenMax.from(gameWin, 1, {opacity:0})
    }else{};

  this.sheep.style.marginLeft= Math.floor(Math.random() * (1 + 1800 - 1) + 1) + 'px';
  this.sheep.style.display="inline-block";
}


  picToString(url){
    return "url('"+url+"')";
  }

  reloadGame(){
    this.score.valeur=0;
    var gameWin= document.getElementById("GameWin");
    var unfade = new TimelineMax({onComplete:onCompleteFunc});
    unfade.to(gameWin, 0.5, {opacity:0});

    function onCompleteFunc(){
      gameWin.style.display="none";
      console.log(  gameWin.style.display);
}
  }
}
