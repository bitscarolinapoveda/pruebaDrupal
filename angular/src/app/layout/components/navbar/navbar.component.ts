import { Component, OnInit, ViewEncapsulation, HostListener, ViewChild, ElementRef } from '@angular/core';
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
    LanguageMenuDefault: any;
    LanguageMenu: any;
    LanguageMenuDesktop: any;
    heightScreen: any;
    languagueBrowser: any;
    url: any;
    ruta: any;
    @ViewChild('Botton') Botton: ElementRef;
    @ViewChild('block-navbar') Bot: ElementRef;


    constructor(private router: ActivatedRoute, private navbar: NavbarService, private _service: CustomCardService) {
        this.onResize({});
        this.LanguageMenu = [];
        this.LanguageMenuDesktop = [];
        this.LanguageMenuDefault = {};
        this.languagueBrowser = '';
        this.ruta = '';
    }

    ngOnInit() {

        this.url = window.location.pathname;

        this.languagueBrowser = this._service.getLanguageBrowser();

        if (this.languagueBrowser !== 'es') {
            this.ruta = '/' + this.languagueBrowser + '/contact-us';
        } else if (this.languagueBrowser === 'es') {
            this.ruta = '/contactenos';
        }

        $('html').attr('lang', this.languagueBrowser);

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
        this.getLanguageData();
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
                if (this.languagueBrowser === items.others[0].languages[index].id) {
                    items.others[0].languages[index].status = true;
                    this.LanguageMenuDefault = items.others[0].languages[index];
                } else {
                    items.others[0].languages[index].status = false;
                    this.LanguageMenuDesktop.push(items.others[0].languages[index]);
                }
                this.LanguageMenu.push(items.others[0].languages[index]);
            }
            if (this.LanguageMenuDefault.id === undefined) {
                this.LanguageMenu[0].status = true;
                this.LanguageMenuDefault = this.LanguageMenu[0];
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

    changeLanguage(id) {
        window.sessionStorage.setItem('language', id);
        location.reload();
    }

    overMenu() {
        if ($('body').width() < 1025) {
            this.Botton.nativeElement.click();
            this.Bot.nativeElement.click();
        }
    }


}
