import { Component, OnInit, Output, EventEmitter, HostListener, Directive } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
declare var $: any;

@Component({
    inputs: ['padre', 'menus', 'col', 'row', 'image', 'flActiveActual'],
    selector: 'app-menu-item',
    templateUrl: './item_menu.component.html'
})
export class ItemMenuComponent implements OnInit {
    @Output() addchild = new EventEmitter();
    menus: any[];
    flActiveChilds: any[] = [];
    flActiveActual: boolean = false;
    public heightTop;
    public desktop;
    public mobile;
    menusColumn: any[];
    value: boolean;
    height: any;

    row: any;
    col: any;
    image: any;

    ngOnInit() {
        this.onResize();
        this.value = false;
        if (this.row === 3) {
            this.image = this.menus[0].image;
        }
        if (this.row === 3 && this.menus.length > 3 && window.innerWidth > 1025) {
            let limit_a;
            if (this.menus.length > 4) {
                limit_a = Math.round(this.menus.length / 1.5);
            } else {
                limit_a = 3;
            }
            this.menusColumn = this.menus.slice(limit_a, this.menus.length);
            this.menus = this.menus.slice(0, limit_a);
            this.value = true;
            if (this.menus.length === 4) {
                this.height = 300;
            } else if (this.menus.length > 4 && this.menus.length < 6) {
                this.height = Math.round(this.menus.length / 2) * 120;
            } else if (this.menus.length >= 6) {
                this.height = Math.round(this.menus.length / 2) * 135;
            }
        }
    }

    mostrarDatosMenus(index) {
        if (this.row === 3 && this.menus.length >= 1) {
            this.image = this.menus[index].image;
        }
    }

    ocultarMenus() {
        this.image = this.menus[0].image;
    }

    mostrarDatosColumn(index) {
        if (this.row === 3 && this.menusColumn.length >= 1) {
            this.image = this.menusColumn[index].image;
        }
    }


    onResize() {
        if (window.innerWidth > 1025) {
            this.heightTop = $('.list-menu').height() + 1 + 'px';
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
