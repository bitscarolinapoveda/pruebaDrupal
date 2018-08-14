import { Component } from '@angular/core';
import { CardService, Card } from '../../../services/cards/card.service';



@Component({
  selector: 'app-card-values',
  templateUrl: './card-values.component.html',
  styleUrls: ['./card-values.component.scss']
})
export class CardValuesComponent {

  card: Card;

  constructor( private _cardService: CardService) {
    this.card = _cardService.getCard();
    console.log(this.card);
  }

}
