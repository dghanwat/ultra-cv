import { Component, OnInit, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-create-cv',
  templateUrl: './createcv.component.html',
  styleUrls: ['./createcv.component.css','./bootstrap.css']
})
export class CreateCVComponent implements OnInit {

  activeTab: number = 1;
  lastTabNumber: number = 8;
  progressBarPercentage: string = "12%";

  constructor() { }

  ngOnInit() {
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
