import { Directive, Renderer2,ElementRef, Input, HostListener, OnInit  } from '@angular/core';
 

@Directive({
  selector: '[appHighlight1]'
})
export class SomeDirectiveDirective implements OnInit{
  @Input('appHighlight') appSomeDirective: string;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { 
    
   
  }
  
  @HostListener('mouseenter') onMouseEnter(){
    
      this.highlight('red');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(this.appSomeDirective);
}
ngOnInit():void{
  const p = this.renderer.createElement('p');
  const text = this.renderer.createText("I\'m happy" );
  this.renderer.appendChild(p,text);
  this.renderer.appendChild(this.elementRef.nativeElement, p)
  this.renderer.addClass(this.elementRef.nativeElement,'crazy')
}

  private highlight(color: string){
    console.log('highlightColor', color)
    this.elementRef.nativeElement.style.color = color;
  }
  

}
