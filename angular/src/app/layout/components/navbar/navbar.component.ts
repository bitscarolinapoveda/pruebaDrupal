import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from '../../../services/layout/navbar.service';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';

declare var $: any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    NavbarArray: any;
    positionChild: number = 1;
    resolution: string = 'desktop';
    flActiveChilds: any[] = [];
    LanguageMenu: any;
    heightScreen: any;

    constructor(private router: ActivatedRoute, private navbar: NavbarService, private _service: CustomCardService) {
        this.onResize({});
    }

    ngOnInit() {
        this.heightScreen = $(window).height() + 'px';
        $('.Botton, .show-more').on('click', function () {
            $('.menu-scroll, .link').toggleClass('tigger-menu scroll-white color-white');
        });
        $(window).scroll(function () {
            if (window.scrollY > 0) {
                $('.menu-scroll, .link').addClass('inverse-color color-scroll scroll-white');
                $('.burger').css({ color: '#002b49' });
                $('.shadow-of-nav').addClass('shadow-if-exit-scroll');
            } else {
                $('.menu-scroll, .link').removeClass('inverse-color color-scroll scroll-white');
                $('.burger').css({ color: '#ffffff' });
                $('.shadow-of-nav').removeClass('shadow-if-exit-scroll');
            }
        });
        this.getNavBarItems();
        //this.getLanguageData();
        this.LanguageMenu = [{ 'title': 'ES', 'active': true }, { 'title': 'ENN', 'active': false }];
    }

    getNavBarItems() {
        return this.navbar.getMenuItems().subscribe(items => {
            this.NavbarArray = items;
            this.NavbarArray = this.addIdForColToNavbar(this.NavbarArray, 1, 1);
        });
    }

    getLanguageData() {
        this._service.getCustomCardInformation('languagescard').subscribe(items => {
            for (var index in items.others[0].languages) {
                this.LanguageMenu.push(items.others[0].languages[index]);
            }
        });
    }

    addIdForColToNavbar(navbarArray, posCol, posRow) {

        for (let i in navbarArray) {
            navbarArray[i].posCol = posCol;
            navbarArray[i].posRow = posRow;

            if (posRow == 1) {
                navbarArray[i].showrow = true;
            }
            else {
                navbarArray[i].showrow = false;
            }

            if (navbarArray[i].below) {
                navbarArray.below = this.addIdForColToNavbar(navbarArray[i].below, i, posRow + 1);
            }
        }
        return navbarArray;
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

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if ($('body').width() < 1025) {
            this.resolution = 'mobile';
        } else {
            this.resolution = 'desktop';
        }
    }
    menuOver(event) {
        $('.hover-menu-dark-layout').removeClass('hide');
        $('.hover-menu-dark-layout').css('height', document.getElementById('main-wrapper').scrollHeight + 'px');
    }
    menuOut($event) {
        $('.hover-menu-dark-layout').addClass('hide');
    }
    menuOverLang(event) {
        $('.items-phone').removeClass('hide');
        $('.items-phone').addClass('show');
    }
    menuOutLang($event) {
        $('.items-phone').addClass('hide');
        $('.items-phone').removeClass('show');
    }
}
