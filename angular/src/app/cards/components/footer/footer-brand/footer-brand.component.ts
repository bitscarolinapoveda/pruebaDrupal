import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterBrandService } from '../../../../services/cards/footerBrand.service';

@Component({
  selector: 'app-footer-brand',
  templateUrl: './footer-brand.component.html',
  styleUrls: ['./footer-brand.component.scss']
})
export class FooterBrandComponent implements OnInit {
  url: string;
  nameBrand: string;

  constructor(private router: ActivatedRoute,
    private footerBrand: FooterBrandService) {
    this.url = '';
    this.nameBrand = '';
  }

  ngOnInit() {
    this.getFooterBrandItems();
  }

  getFooterBrandItems() {
    this.footerBrand.getFooterBrandItems().subscribe((items: {header, body}) => {
      this.url = items.header[0].data;
      this.nameBrand = items.body[0].data;
    });
  }
}
