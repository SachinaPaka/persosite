import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animation';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class CvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
