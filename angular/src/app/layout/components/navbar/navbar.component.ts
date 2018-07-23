import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavbarService } from '../../../services/layout/navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: ActivatedRoute,
      private navbar: NavbarService ) {

      }

    ngOnInit(){
      console.log("onInit");
      this.getNavBarItems();
    }
    getNavBarItems() {
      this.navbar.getMenuItems().subscribe( items => {
        console.log(items);
      });
    }

}
