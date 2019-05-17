import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { copyStyles } from '@angular/animations/browser/src/util';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';
import { General } from '../../cards/components/blurb/blurb.component';

@Injectable({
  providedIn: 'root'
})

export class CustomCardService {

  private memory: any[] = [];
  private memory$: Subject<General>[] = [];
  private language: string;

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
    this.language = '';
  }

  getCustomInfoIM(idblock): Observable<General> {
    if (this.memory === undefined || this.memory[idblock] === undefined) {
      this.memory$[idblock] = new Subject<General>();
      this.getCustomCardInformation(idblock).subscribe(items => {
        this.memory[idblock] = items;
        this.memory$[idblock].next(this.clone(this.memory[idblock]));
        return this.memory$[idblock].asObservable();
      });
    } else {
      setTimeout(() => {
        this.memory$[idblock].next(this.clone(this.memory[idblock]));
      }, 1);
    }
    return this.memory$[idblock].asObservable();
  }

  getFilterPrincipalType(listPrincipal, campo, type) {
    let value = 0;
    let datos = [];
    for (let index = 0; index < listPrincipal.data.length; index++) {
      if (listPrincipal.data[index].url.indexOf(type) > -1) {
        value++;
        datos = listPrincipal.data[index][campo];
      }
    }
    if (value === 0) {
      listPrincipal.data = [];
    } else {
      listPrincipal.data = datos;
    }
    return listPrincipal;
  }

  getFilterLists(listPrincipal, listElement) {
    let list: any[] = [];

    if (listPrincipal.data !== undefined) {
      for (let index = 0; index < listPrincipal.data.length; index++) {
        for (let j = 0; j < listElement.data.length; j++) {
          if (listPrincipal.data[index].id === listElement.data[j].nid) {
            list.push(listElement.data[j]);
          }
        }
      }
    }
    listElement.data = list;
    return listElement;
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

  getLanguageBrowser() {
    let languagueBrowser = window.navigator.language;
    let languagueStorage = window.sessionStorage.getItem('language');
    if (languagueStorage === undefined || languagueStorage === null || languagueStorage === '') {
      if (languagueBrowser === undefined || languagueBrowser === null || languagueBrowser === '') {
        languagueBrowser = 'es';
      } else {
        languagueBrowser = languagueBrowser.split('-')[0];
      }
      this.language = languagueBrowser;
      window.sessionStorage.setItem('language', this.language);
      return this.language;
    } else if (languagueStorage !== undefined || languagueStorage !== null || languagueStorage !== '') {
      this.language = window.sessionStorage.getItem('language');
      return this.language;
    }
  }

  getValidationLanguage() {
    const lang = `v1/card/config/languagescard/export?_format=json`;
    if (this.language === '') {
      this.getLanguageBrowser();
    }
    this.http.get(lang).subscribe(items => {
      let language = '';
      for (var index in items.others[0].languages) {
        if (this.language === items.others[0].languages[index].id) {
          language = items.others[0].languages[index].id;
        }
      }

      if (language === '') {
        this.language = items.others[0].languages[0].id;
      }
      return this.language;
    });
  }

  getCustomCardInformation(idblock) {
    let url = `v1/card/config/${idblock}/export?_format=json`;

    if (this.language === 'es') {
      console.log(url);
      return this.http.get(url);
    } else if (this.language !== 'es') {
      url = this.language + '/' + url;
      console.log(url);
      return this.http.get(url);
    }

  }

  addImageField(data: any, imagesList: any) {
    imagesList.forEach(imageName => {
      let i;
      for (i = 0; i < data.length; i++) {
        if (data[i][imageName] == undefined) {
          data[i][imageName] = {
            url: '',
            alt: ''
          }
        } else if (data[i][imageName][0] != undefined) {
          data[i][imageName] = data[i][imageName][0];
        }
      }
    });
    return data;
  }

  removeStrFieldFromTheName(data: any) {
    for (let i = 0; i < data.length; i++) {
      let entity = data[i];
      let newEntity = [];
      let newKey = '';
      for (var k in entity) {
        newKey = k;
        if (k.indexOf('field_') != -1) {
          newKey = k.substring(6);
        }
        newEntity[newKey] = entity[k];
      }
      data[i] = newEntity;
    }
    return data;
  }

  getCustomCardInformationType(idblock, type) {
    const url = `v1/card/config/${idblock}/export?_format=json`;
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

  // Organiza el carrusel de a 4 y los espacios faltantes los llena aleatoriamente
  organizeInfoForCarousel(carouselInfo) {
    var arrayBox = [];
    var number = carouselInfo.length / 4;
    if (carouselInfo.length % 4 === 0) {
      var numberOfBoxes = parseInt(number.toString(), 10);
    } else {
      var numberOfBoxes = 1 + parseInt(number.toString(), 10);
    }
    for (let i = 0; i < numberOfBoxes; i++) {
      arrayBox[i] = [];
    }
    if (carouselInfo.length > 4) {
      var vuelta = 0;
      var hasta = 4;
      for (let i = 0; i < arrayBox.length; i++) {
        for (let j = vuelta; j < hasta; j++) {
          if (carouselInfo[j] === undefined) {
            while (arrayBox[i].length < 4) {
              var random = carouselInfo[Math.floor(Math.random() * carouselInfo.length)];
              var cont = 0;
              for (let c = 0; c < arrayBox[i].length; c++) {
                if (arrayBox[i][c].nid === random.nid) {
                  cont++;
                }
              }
              if (cont === 0) {
                arrayBox[i].push(random);
              }
            }
          } else {
            arrayBox[i].push(carouselInfo[j]);
          }
        }
        vuelta = vuelta + 4;
        hasta = hasta + 4;
      }
    } else {
      for (let i = 0; i < arrayBox.length; i++) {
        for (let j = 0; j < 4; j++) {
          if (carouselInfo[j] != undefined) {
            arrayBox[i].push(carouselInfo[j]);
          } else {
            break;
          }
        }
      }
    }
    return arrayBox;
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
