import {CustomCardService} from './../../../services/cards/v1-card.services';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-alliances',
  templateUrl: './alliances.component.html',
  styleUrls: ['./alliances.component.scss']
})
export class AlliancesComponent implements OnInit {

  allianceTitle: any[];
  allianceArrayLogos: any[];
  allianceBackground: any[];

  constructor (
    private router: ActivatedRoute,
    private alliance: CustomCardService,
  ) {
    this.allianceBackground = null;
  }

  ngOnInit () {
    this.getAlliance();
  }

  getAlliance () {
    this.alliance.getCustomCardInformation('ouralliance').subscribe(items => {
      this.allianceTitle = items.header[0].data;
      this.allianceBackground = items.body[0].data.back_movil[0];
      this.allianceArrayLogos = items.data;
      //this.allianceArrayLogos = items.files[0].data.logo;
    });
  }
}
