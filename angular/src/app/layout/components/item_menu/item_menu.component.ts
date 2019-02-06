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
    public desktop;
    public mobile;

    ngOnInit() {
        this.onResize();
    }
    onResize() {
        if (window.innerWidth > 1080) {
            this.heightTop = $('.list-menu').height() + 1 +'px';
            this.mobile = false; 
            this.desktop = true;
        } else {
            this.heightTop = '0px';
            this.mobile = true;
            this.desktop = false;
        }
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