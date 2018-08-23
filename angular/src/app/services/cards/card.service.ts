import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable()
export class CardService {

  private card: Card = {
      title: 'Card Titulo 1',
      description: 'Card Descripcion 1'
    };

  constructor(private http: HttpClient) {
    console.log('Card conten Listo');
  }

  getCard() {
    return this.card;
  }
}

export interface Card {
  title: string;
  description: string;
}
