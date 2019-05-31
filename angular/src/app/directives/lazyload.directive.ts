import { Directive , ElementRef, HostListener, HostBinding, Input, AfterViewInit, Renderer2} from '@angular/core';
import { PorqueBitsComponent } from '../cards/components/porque-bits/porque-bits.component';
@Directive({
  selector: '[lazyload]',

})
export class LazyloadClass implements AfterViewInit{

  @HostBinding('attr.src') srcAttr = null;
  @Input() src: string;
  public element : ElementRef;

  constructor(private el: ElementRef, private rendelement: Renderer2 ) { 
   
  }
  ngAfterViewInit() {
      this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  private canLazyLoad(){
    return window && 'IntersectionObserver' in window;
  }

  
  private lazyLoadImage(){
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          obs.unobserve(this.el.nativeElement);
        }

      });
    });
    obs.observe(this.el.nativeElement);
  }

  private loadImage(){
    // EVENTO QUE REESTABLECE EL SOURCE DE LA IMAGEN 
    this.srcAttr = this.src;
    this.rendelement.addClass(this.el.nativeElement, "element-animation");
  }

}
