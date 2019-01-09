import { CustomCardService } from './../../../services/cards/v1-card.services';
import { Component, OnInit} from '@angular/core';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.scss']
})
export class TecnologiesComponent implements OnInit{
  arrayLogos:any = [];
  arrayLogosCustom:any[][];
  title:string = "";
  background:string = "";

  constructor(
    private _tecnologies: CustomCardService,
  ) {
    this.arrayLogosCustom = [];
  }

  ngOnInit() {
    this.getItemsTecnologies();
  }

  customArrayImages( arrayLogosOriginal:any[] ){
    for (let i:number = 0; i <= arrayLogosOriginal.length; i++) {
      this.arrayLogosCustom[i] = [];
      let j2:number = 0;
      for (let j:number = 0; j < 4; j++) {
        if (arrayLogosOriginal.length > 0) {
          this.arrayLogosCustom[i][j] = arrayLogosOriginal[0];
          arrayLogosOriginal.shift();
        }else{
          this.arrayLogosCustom[i][j] = this.arrayLogosCustom[i - 1][j2];
          j2++;
        }
      }    
    }
  }

  createSlick(){
    $(document).ready(function(){
      $('.tec-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3500,
        fade: true,
        responsive:[
          {
            breakpoint: 600,
            settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              fade: true,
              autoplay: true,
              speed: 3500,
            }
          }
        ]
      });
    });
  }

  getItemsTecnologies() {
    return this._tecnologies.getCustomCardInformation('technologies').subscribe(items => {
      this.title = items.header[0].data.title;
      this.background = items.body[0].data.back_movil[0].url;
      this.arrayLogos = items.data;
      this.customArrayImages( this.arrayLogos );
      this.createSlick();
    });
  }

}
