import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Timeline, TimelineOptions, DataItem } from 'vis-timeline';
import { DataInterface, DataSet, DataView } from 'vis-data';

import { Assignable } from "vis-utils";

@Component({
  selector: 'timeline2',
  templateUrl: './timeline2.component.html',
  styleUrls: ['./timeline2.component.scss']
})
export class Timeline2Component implements OnInit, AfterViewInit {

  @ViewChild('timeline') _time: ElementRef;
  items: any;
  timelineView:Timeline;
  options = {
  start: new Date(),
  end: new Date(new Date().getTime() + 1000000),
  editable: true,
  itemsAlwaysDraggable: {
    item: true,
    range: true,
  },
};
groups = [
  {
    id: 1,
    content: "Xi-alpha",
  },
  {
    id: 2,
    content: "Xi-beta",
  },
];

  constructor() { 
    this.items= new DataSet();
    let group=1;
    for(let i=10; i>=0; i--){
      let start = new Date(new Date().getTime()+i*100000);
       if(group===1){
         group=2
       } else{
         group=1
       }
      this.items.add({
        id: i,
        content: "item "+i,
        start: start,
        end: new Date(start.getTime()+100000),
        group: group,
      })
    }
    
    
  }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(){
     console.log('items', this.items);
      this.timelineView= new Timeline(this._time.nativeElement, this.items, this.groups, this.options)

  }

}
