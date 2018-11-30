import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavbarService} from '../../../services/layout/navbar.service';

declare var $: any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    constructor(private router: ActivatedRoute, private navbar: NavbarService) {
    }

    NavbarArray: any = [];

    ngOnInit() {
        $('.Botton, .show-more').on('click', function () {
            $('.menu-scroll, .link').toggleClass('tigger-menu scroll-white color-white');
        });
        $(window).scroll(function () {
            if ($('.menu-scroll, .lines, .link').offset().top > 30) {
                $('.menu-scroll, .lines, .link').addClass('inverse-color color-scroll scroll-white');
            } else {
                $('.menu-scroll, .lines, .link').removeClass('inverse-color color-scroll scroll-white');
            }
        });
        this.getNavBarItems();
    }

    getNavBarItems() {
        return this.navbar.getMenuItems().subscribe(items => {
            this.NavbarArray = items;
        });
    }

    activeClass(sub) {
        sub.active = !sub.active;
    }
}
