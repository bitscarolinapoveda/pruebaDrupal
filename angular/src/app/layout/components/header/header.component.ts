import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})

export class HeaderComponent implements OnInit {


  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {



     $('.Botton').on('click', function () {

          $('.blur-logo').attr('src', 'assets/images/Logocolor.png');
        });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ($('.image-bits').offset().top > 50) {
      $('.image-bits').attr('src', 'assets/images/Logocolor.png');
    } else {
      $('.image-bits').attr('src', 'assets/images/Logowhite.png');
    }
  }

}
