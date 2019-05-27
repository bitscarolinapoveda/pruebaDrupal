import { Directive , ElementRef, HostListener, HostBinding, Input, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[lazyload]'
})
export class LazyloadClass implements AfterViewInit{

  @HostBinding('attr.src') srcAttr = null;
  @Input() src: string;

  constructor(public el: ElementRef) { 

  }
  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }
  ngOnInit(): void {
    //this.el.nativeElement.style.backgroundColor = "blue";
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
    // setea el valor del source en la imagen
    this.srcAttr = this.src;
  }
}
