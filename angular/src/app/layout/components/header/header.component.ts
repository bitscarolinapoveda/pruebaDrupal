import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
declare var $: any;
var count = 0;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    $('.Botton').on('click', function () {
      count = count + 1; // Numero Impar = menu abierto ; Numero par = menu cerrado
      if (count % 2 === 0) {
        //PAR MENU CERRADO
        $('html').css('overflow', 'auto');
        if (window.scrollY === 0) {
          $('.blur-logo').attr('src', 'assets/images/Logowhite.png');
          $('.arrow-down-change-color').css({ color: '#002b49' });
          $('.lines').css({ background: '#fff' });
        }
      } else {
        //IMPAR = MENU ABIERTO 
        $('html').css('overflow', 'hidden');
        if (window.scrollY === 0) {
          $('.blur-logo').attr('src', 'assets/images/Logocolor.png');
          $('.arrow-down-change-color').css({ color: '#002b49' });
          $('.lines').css({ background: '#002b49' });
        }
      }
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 0) {
      if (count) {

      }
      $('.image-bits').attr('src', 'assets/images/Logocolor.png');
      $('.lines').css({ background: '#002b49' });
      $('.arrow-down-change-color').css({ color: '#002b49' });
    } else {
      $('.image-bits').attr('src', 'assets/images/Logowhite.png');
      $('.lines').css({ background: '#fff' });
      $('.arrow-down-change-color').css({ color: '#fff' });
    }
    // if ($('.image-bits').offset().top > 40) {
    //   $('.image-bits').attr('src', 'assets/images/Logocolor.png');
    //   $('.arrow-down-change-color').css({color: '#002b49'});
    // } else {
    //   $('.image-bits').attr('src', 'assets/images/Logowhite.png');
    //     $('.arrow-down-change-color').css({color: '#fff'});
    // }
  }

}
