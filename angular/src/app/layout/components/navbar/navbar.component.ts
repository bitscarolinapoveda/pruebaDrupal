import {Component, OnInit, ViewEncapsulation, HostListener} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavbarService} from '../../../services/layout/navbar.service';

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

    constructor(private router: ActivatedRoute, private navbar: NavbarService) {
        this.onResize({});
    }

    ngOnInit() {
        $('.Botton, .show-more').on('click', function () {
            $('.menu-scroll, .link').toggleClass('tigger-menu scroll-white color-white');
        });
        $(window).scroll(function () {
            if ($('.menu-scroll, .lines, .link').offset().top > 10) {
                $('.menu-scroll, .lines, .link').addClass('inverse-color color-scroll scroll-white');
                $('.shadow-of-nav').addClass('shadow-if-exit-scroll');
            } else {
                $('.menu-scroll, .lines, .link').removeClass('inverse-color color-scroll scroll-white');
                $('.shadow-of-nav').removeClass('shadow-if-exit-scroll');
            }
        });
        this.getNavBarItems();
    }

    getNavBarItems() {
        return this.navbar.getMenuItems().subscribe(items => {
            this.NavbarArray = items;
            this.NavbarArray = this.addIdForColToNavbar(this.NavbarArray, 1, 1);
            console.log(this.NavbarArray);
        });
    }

    addIdForColToNavbar(navbarArray, posCol, posRow) {

        for (let i in navbarArray) {
            navbarArray[i].posCol=posCol;
            navbarArray[i].posRow=posRow;

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
      }
      else {
        this.resolution = 'desktop';
      }
    }
}
