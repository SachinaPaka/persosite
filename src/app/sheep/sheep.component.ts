import {Component, OnInit } from '@angular/core';
import{PicsService} from '../pics.service';
import{ScoreService} from '../score.service';

//GSAP
import{TweenMax} from 'gsap';
import{TimelineMax} from 'gsap';
import{TimelineLite} from 'gsap';
import{CustomEase} from 'gsap';

@Component({
  selector: 'app-sheep',
  templateUrl: './sheep.component.html',
  styleUrls: ['./sheep.component.css']
})
export class SheepComponent implements OnInit {
  score;
  main;

  constructor(private scoreService:ScoreService, private picsService:PicsService ) { }

  ngOnInit() {
    this.score= this.scoreService.score;
    this.main= this.picsService.pictures[0];
  }

  onClick(){
    //appeler la méthode incrementScore
    this.scoreService.incrementScore();
  }

  picToString(url){
    return "url('"+url+"')";
  }
}
