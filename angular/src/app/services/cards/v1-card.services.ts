import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { copyStyles } from '@angular/animations/browser/src/util';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { General } from '../../cards/components/blurb/blurb.component';

@Injectable({
  providedIn: 'root'
})

export class CustomCardService {

  private memory: any[] = [];
  private memory$: Subject<General>[] = [];

  private sliderData: Slide[] = [
    {
      titleSlide: 'Título de la diapositiva 1',
      subtitleSlide: 'Subtitulo de diapositiva',
      descriptionSlide: 'Reprehenderit cupidatat pariatur qui amet dolore id minim eu qui ipsum qui.',
      listTextSlide: ['Caracteristica #1', 'Caracteristica #2', 'Caracteristica #3'],
      imgSrcSlide: '/assets/images/phone-mockup.png',
      bkgSrcSlide: '/assets/images/fondo-hospital.jpg'
    },
    {
      titleSlide: 'Título de la diapositiva 2',
      subtitleSlide: 'Subtitulo de diapositiva',
      descriptionSlide: 'Reprehenderit cupidatat pariatur qui amet dolore id minim eu qui ipsum qui.',
      listTextSlide: ['Caracteristica #1', 'Caracteristica #2', 'Caracteristica #3'],
      imgSrcSlide: '/assets/images/phone-mockup2.png',
      bkgSrcSlide: '/assets/images/fondo-hospital2.jpg'
    }
  ];

  constructor(
    private http: HttpService
  ) {
  }

  getCustomInfoIM(idblock): Observable<General> {
    if (this.memory === undefined || this.memory[idblock] === undefined) {
      console.log('pide servicio');
      this.memory$[idblock] = new Subject<General>();
      this.getCustomCardInformation(idblock).subscribe(items => {
        console.log('llego servicio');
        this.memory[idblock] = items;
        this.memory$[idblock].next(this.clone(this.memory[idblock]));
        return this.memory$[idblock].asObservable();
      });
    } else {
      console.log('llama variable');
      setTimeout(() => {
        this.memory$[idblock].next(this.clone(this.memory[idblock]));
      },10);
    }
    return this.memory$[idblock].asObservable();
  }

  clone(obj) {
    if (null == obj || 'object' != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
  }

  getCustomForm(idForm) {
    const url = `webform_rest/${idForm}/elements`;
    return this.http.get(url);
  }

  getCustomCardInformation(idblock) {
    const url = `v1/card/config/${idblock}/export?_format=json`;
    return this.http.get(url);
  }

  getCustomCardInformationType(idblock, type) {
    const url = `v1/card/config/${idblock}/${type}/export?_format=json`;
    return this.http.get(url);
  }

  getCustomContentBasicPage(uuid) {
    const url = `v1/content/${uuid}/export?_format=json`;
    return this.http.get(url);
  }

  getFooterContactItems() {
    return this.http.get('v1/card/contact/export/custom?_format=json&bid=contactcard');
  }

  getSliderData(): Slide[] {
    // return this.http.get('v1/card/contact/export/custom?_format=json&bid=slider');
    return this.sliderData;
  }

  getTabsData() {
    // return this.http.get('v1/card/export/tab-horizontal');
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

export interface Blurb {
  imageSrc: string;
  title: string;
  description: string;
}

