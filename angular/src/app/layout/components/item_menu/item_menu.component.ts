import {Component, OnInit, Output, EventEmitter, HostListener, Directive} from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
declare var $: any;


@Component({
    inputs: ['padre', 'menus', 'col', 'row', 'image', 'flActiveActual'],
    selector: 'app-menu-item',
    templateUrl: './item_menu.component.html'
})
export class ItemMenuComponent implements OnInit{
    @Output() addchild = new EventEmitter();
    menus: any[];
    flActiveChilds: any[] = [];
    flActiveActual: boolean = false;
    public heightTop;

    ngOnInit() {
        this.heightTop = $('.list-menu').height() +'px';
    }

    activeChild(idx) {
        if (!this.flActiveChilds[idx]) {
            this.flActiveChilds[idx] = false;
        }
        this.flActiveChilds[idx] = !this.flActiveChilds[idx];
        //this.addchild.emit(info);
        //return this.navBar.activeChild(event, col, row);
    }

    getActiveChild(idx) {
        if (!this.flActiveChilds[idx]) {
            this.flActiveChilds[idx] = false;
        }
        return this.flActiveChilds[idx];
    }
}