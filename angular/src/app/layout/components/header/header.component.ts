import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { CustomCardService } from '../../../services/cards/v1-card.services';
declare var $: any;
var count = 0;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  imageLogo: any;

  constructor(@Inject(DOCUMENT) private document: Document, private headerBrand: CustomCardService) {
    this.imageLogo = {
      white: '',
      color: '',
      link : '',
      label : '',
    };
   }

  ngOnInit() {
    this.getHeaderBrandItems();
    $('.Botton').on('click', () => {
      count = count + 1; // Numero Impar = menu abierto ; Numero par = menu cerrado
      if (count % 2 === 0) {
        //PAR MENU CERRADO
        $('.burger').removeClass('fa-times');
        $('.burger').addClass('fa-bars');
        $('html').css('overflow', 'auto');
        if (window.scrollY === 0) {
          $('.blur-logo').attr('src', this.imageLogo.white);
          $('.arrow-down-change-color').css({ color: '#002b49' });
          $('.burger').css({ color: '#fff' });
        }
      } else {
        //IMPAR = MENU ABIERTO
        $('.burger').addClass('fa-times');
        $('.burger').removeClass('fa-bars');
        $('html').css('overflow', 'hidden');
        if (window.scrollY === 0) {
          $('.blur-logo').attr('src', this.imageLogo.color);
          $('.arrow-down-change-color').css({ color: '#002b49' });
          $('.burger').css({ color: '#002b49' });
        }
      }
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 0) {
      $('.image-bits').attr('src', this.imageLogo.color);
      $('.burger').css({ color: '#002b49' });
      $('.arrow-down-change-color').css({ color: '#002b49' });
    } else {
      $('.image-bits').attr('src', this.imageLogo.white);
      $('.burger').css({ color: '#fff' });
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

  getHeaderBrandItems() {
    this.headerBrand.getCustomCardInformation('headerbrandcard').subscribe((items) => {
      this.imageLogo = {
        white: items.header[0].white_logo[0].url,
        color: items.header[1].color_logo[0].url,
        link : items.header[2].data.link,
        label : items.header[2].data.label,
      };
    });
  }

}
