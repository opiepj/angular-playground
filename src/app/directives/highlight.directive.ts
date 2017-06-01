import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/* tslint:disable:no-input-rename */ // Only for demo purposes
/**
 * Attribute Directive Demo
 */
@Directive({
  selector: '[acnHighlight]'
})
export class HighlightDirective {
  @Input('acnHighlight') public highlightColor: string;
  
  constructor(private el: ElementRef) {
  }
  
  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this.highlight(this.highlightColor || 'red');
  }
  
  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.highlight(null);
  }
  
  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
