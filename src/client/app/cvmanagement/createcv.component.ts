import { Component, OnInit, EventEmitter } from '@angular/core';

import { ISlimScrollOptions, SlimScrollEvent } from 'ngx-slimscroll';


@Component({
  selector: 'app-create-cv',
  templateUrl: './createcv.component.html',
  styleUrls: ['./createcv.component.css']
})
export class CreateCVComponent implements OnInit {

  activeTab: number = 1;
  lastTabNumber: number = 8;
  progressBarPercentage: string = "12%";

  opts: ISlimScrollOptions;
  scrollEvents: EventEmitter<SlimScrollEvent>;


  constructor() { }

  ngOnInit() {
    this.scrollEvents = new EventEmitter<SlimScrollEvent>();
    this.opts = {
      alwaysVisible: true,
      gridOpacity: '0.2', 
      barOpacity: '0.5',
      gridBackground: '#c2c2c2',
      gridWidth: '6',
      gridMargin: '2px 2px',
      barBackground: '#2C3E50',
      barWidth: '6',
      barMargin: '2px 2px'
    }

  }

  navPreviousTab = function () {
    if (this.activeTab > 1) {
      this.activeTab--;
      this.progressBarPercentage = (this.activeTab / this.lastTabNumber) * 100 + "%";
    }
  }

  navNextTab = function () {
    if (this.activeTab < this.lastTabNumber) {
      this.activeTab++;
      this.progressBarPercentage = (this.activeTab / this.lastTabNumber) * 100 + "%";
    }
  }

  

}
