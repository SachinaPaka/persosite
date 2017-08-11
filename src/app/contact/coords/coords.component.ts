import { Component, OnInit } from '@angular/core';

import{CoordsService} from '../../coords.service';

@Component({
  selector: 'app-coords',
  templateUrl: './coords.component.html',
  styleUrls: ['./coords.component.css']
})
export class CoordsComponent implements OnInit {
  coords;

  constructor(private coordsService:CoordsService) { }

  ngOnInit() {
    this.coords= this.coordsService.coordData;
  }

}
