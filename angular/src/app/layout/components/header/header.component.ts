import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit() {
   $(window).scroll(function () {
      if ($('.image-bits').offset().top > 50) {
        $('.image-bits').attr('src', 'assets/images/Logocolor.png');
      } else {
        $('.image-bits').attr('src', 'assets/images/Logowhite.png');
      }
    });
     $('.Botton').on('click', function () {

          $('.blur-logo').attr('src', 'assets/images/Logocolor.png');
        });
  }


}
