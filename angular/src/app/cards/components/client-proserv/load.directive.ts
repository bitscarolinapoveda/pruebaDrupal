import { Directive, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { General } from '../blurb/blurb.component';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';

@Directive({
  selector: '[appLoad]'
})
export class LoadDirective implements OnInit {
  principal: General;
  principal$: Observable<General>;
  clients: any[] = [];
  @Input() type: string;
  @Output() propagar = new EventEmitter<any>();

  constructor(private _cardService: CustomCardService) {
  }

  ngOnInit() {
    this.hacer();
  }

  hacer() {
    this.principal$ = this._cardService.getCustomInfoIM('productsandservicescard_2');
    this.principal$.subscribe(items => {
      this.principal = this._cardService.clone(items);

      let value = 0;
      let datos = [];
      for (let index = 0; index < this.principal.data.length; index++) {
        if (this.principal.data[index].nid === this.type) {
          value++;
          datos = this.principal.data[index].clients;
        }
      }
      if (value === 0) {
        this.principal.data = [];
      } else {
        this.principal.data = datos;
      }

      this._cardService.getCustomInfoIM('clientscard').subscribe(itemsw => {

        const list_items = this._cardService.clone(itemsw.data);

        let lista: any[] = [];
        this.clients = [];

        for (let index = 0; index < list_items.length; index++) {
          for (let j = 0; j < this.principal.data.length; j++) {
            if (list_items[index].nid === this.principal.data[j].id) {
              this.clients.push(list_items[index]);
            }
          }
        }
        this.propagar.emit(this.clients);
        console.log('lista clients directive', this.clients);

      });
    });
  }

}
