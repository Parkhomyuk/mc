import { Component, OnInit, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'mc-badget',
  templateUrl: './badget.component.html',
  styleUrls: ['./badget.component.scss']
})
export class BadgetComponent implements OnInit {

  styleClassVar='p-button-success'
  @Input('favoritesCount') favoritesCountProps: string;
  @HostListener('mouseover') onMouseOver() {  
     
     
    this.styleClassVar='p-button-danger'
      
  }
  @HostListener('mouseleave') onMouseLeave() {  
    
     
    this.styleClassVar='p-button-success'
      
  }
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

}
