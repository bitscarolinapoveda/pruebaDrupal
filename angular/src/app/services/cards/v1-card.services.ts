import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { copyStyles } from '@angular/animations/browser/src/util';


@Injectable({
  providedIn: 'root'
})

export class CustomCardService {

  private sliderData: Slide[] = [
    {
      titleSlide: "Título de la diapositiva 1",
      subtitleSlide: "Subtitulo de diapositiva",
      descriptionSlide: "Reprehenderit cupidatat pariatur qui amet dolore id minim eu qui ipsum qui.",
      listTextSlide: ['Caracteristica #1', 'Caracteristica #2', 'Caracteristica #3'],
      imgSrcSlide: "/assets/images/phone-mockup.png",
      bkgSrcSlide: "/assets/images/fondo-hospital.jpg"
    },
    {
      titleSlide: "Título de la diapositiva 2",
      subtitleSlide: "Subtitulo de diapositiva",
      descriptionSlide: "Reprehenderit cupidatat pariatur qui amet dolore id minim eu qui ipsum qui.",
      listTextSlide: ['Caracteristica #1', 'Caracteristica #2', 'Caracteristica #3'],
      imgSrcSlide: "/assets/images/phone-mockup2.png",
      bkgSrcSlide: "/assets/images/fondo-hospital2.jpg"
    }
  ];

  constructor(
    private http: HttpService
  ) { }

  getCustomCardInformation(idblock) {
    const url = `v1/card/config/${idblock}/export?_format=json`;
    return this.http.get(url);
  }

  getFooterContactItems() {
    return this.http.get('v1/card/contact/export/custom?_format=json&bid=contactcard');
  }

  getSliderData():Slide[]{
    // return this.http.get('v1/card/contact/export/custom?_format=json&bid=slider');
    return this.sliderData;
  }

  getTabsData(){
    //return this.http.get('v1/card/export/tab-horizontal');
  }
}

export interface Slide {
  titleSlide: string;
  subtitleSlide: string;
  descriptionSlide: string;
  listTextSlide: string[];
  imgSrcSlide: string;
  bkgSrcSlide: string;
}

export interface Blurb{
  imageSrc: string;
  title: string;
  description: string;
}

