import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'mc-paggination',
  templateUrl: './paggination.component.html',
  styleUrls: ['./paggination.component.scss']
})
export class PagginationComponent implements OnInit {

  @Output() currentState = new EventEmitter<{page: number, limit: number}>()
  @Input('total') totalCountProps: number;
  @Input('currentPageNumber') currentPageNumber;
  @ViewChild('paginator', { static: true }) paginator: Paginator 
  constructor() { }

  ngOnInit(): void {
    console.log('currentPageNumber', this.currentPageNumber);
   
     setTimeout(() =>  this.paginator.changePage(this.currentPageNumber-1));
  }

  paginate(event) {
        
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
        console.log('event.page', event)
       console.log('p', this.paginator)
       this.currentPageNumber=event.page+1;

       this.currentState.emit({page: this.currentPageNumber, limit:event.rows })
    }

}
