import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string;

  constructor(private router: Router, private titleService: Title, private service: CustomCardService) {
  }

  ngOnInit() {
    this.getTitleService();
  }

  getTitleService() {
    this.service.getCustomContentBasicPage('b63181f1-38dd-40c9-a993-c4b8d7faf305').subscribe(params => {
      this.title = params.title;
      this.titleService.setTitle(this.title);
    });
  }


}
