import { Component, OnInit, ViewChild,AfterViewInit, Renderer2, ElementRef } from '@angular/core';
 
import { MomentInput, MomentFormatSpecification, Moment } from 'moment';
 
import { Timeline, TimelineOptions, DataItem } from 'vis-timeline';
import { DataInterface, DataSet, DataView } from 'vis-data';

import { Assignable } from "vis-utils";
export { DELETE } from "vis-util/esnext";

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})


export class TimelineComponent implements OnInit, AfterViewInit {

  // var container = document.getElementById('visualization');
  options = {};
  items =[];
  constructor(private _renderer: Renderer2) {
     
    
   }

   @ViewChild('elem') _elem: ElementRef;

  ngOnInit(): void {
     

    // Create a DataSet (allows two way data-binding)
     

    
     
  }
  ngAfterViewInit() {
    this.RenderTimeline();
 }
 public RenderTimeline()
    {    
        //RANDOM DATA SOURCE FOR TESTING
        var items = new DataSet(
        [
          {id: 1, content: 'item 1', start: '2013-04-20'},
          {id: 2, content: 'item 2', start: '2013-04-14'},
          {id: 3, content: 'item 3', start: '2013-04-18'},
          {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
          {id: 5, content: 'item 5', start: '2013-04-25'},
          {id: 6, content: 'item 6', start: '2013-04-27'}
        ]);

        //SOME BASIC PROPS TO CONFIG THE TIMELINE
        let timelineOptions:TimelineOptions = 
        {
            start: '2014-03-10',
            end: '2014-05-10',
            verticalScroll: false,
            editable: false,
            zoomable:true, 
            locale: "pt"
        };
        var options = {};

        //INIT TIMELINE INSTANCE
        let timeline:Timeline = new Timeline(this._elem.nativeElement, items, timelineOptions);
    }

}
