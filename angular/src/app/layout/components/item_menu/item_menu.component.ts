import {Component} from "@angular/core";

@Component({
    inputs: ['padre', 'menus'],
    selector: 'app-menu-item',
    templateUrl: './item_menu.component.html'
})
export class ItemMenuComponent {
    menus: any[];

}