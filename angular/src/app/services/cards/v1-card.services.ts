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
      for (let index = 0; index < listElement.data.length; index++) {
        for (let j = 0; j < listPrincipal.data.length; j++) {
          if (listElement.data[index].nid === listPrincipal.data[j].id) {
            list.push(listElement.data[index]);
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

  getCustomCardInformation(idblock) {
    console.log(`v1/card/config/${idblock}/export?_format=json`);
    const url = `v1/card/config/${idblock}/export?_format=json`;
    return this.http.get(url);
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

  base64ArrayBuffer(arrayBuffer) {
    var base64    = ''
    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

    var bytes         = new Uint8Array(arrayBuffer)
    var byteLength    = bytes.byteLength
    var byteRemainder = byteLength % 3
    var mainLength    = byteLength - byteRemainder

    var a, b, c, d
    var chunk

    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
      // Combine the three bytes into a single integer
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]

      // Use bitmasks to extract 6-bit segments from the triplet
      a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
      b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
      c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
      d = chunk & 63               // 63       = 2^6 - 1

      // Convert the raw binary segments to the appropriate ASCII encoding
      base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
    }

    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
      chunk = bytes[mainLength]

      a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2

      // Set the 4 least significant bits to zero
      b = (chunk & 3)   << 4 // 3   = 2^2 - 1

      base64 += encodings[a] + encodings[b] + '=='
    } else if (byteRemainder == 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]

      a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
      b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4

      // Set the 2 least significant bits to zero
      c = (chunk & 15)    <<  2 // 15    = 2^4 - 1

      base64 += encodings[a] + encodings[b] + encodings[c] + '='
    }

    return base64
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
                cont ++;
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

